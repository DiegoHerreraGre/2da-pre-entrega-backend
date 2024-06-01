import express from "express";
import viewRoutes from "./routes/views.routes.js";
import handlebars from "express-handlebars";
import __dirname from "./dirname.js";
import path from "path";
import { Server } from "socket.io";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuración de handlebars
app.engine("handlebars", handlebars.engine()); // Inicia el motor del la plantilla
app.set("views", path.join(__dirname, "views")); // Indicamos que ruta se encuentras las vistas
app.set("view engine", "handlebars"); // Indicamos con que motor vamos a utilizar las vistas

app.use("/", viewRoutes);


const httpServer = app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});

let messages = [];
let products = [];


const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log("Nuevo usuario conectado");
  socket.on("message", (data) => {
      messages.push(data);
      socketServer.emit("messageLog", messages);
  })

  socket.on("newUser", (data) => {
      socket.broadcast.emit("newUser", data);
  })
});