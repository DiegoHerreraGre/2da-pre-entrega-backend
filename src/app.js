import express from "express";
import routes from "./routes/index.js";
import __dirname from "./dirname.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewsRoutes from "./routes/views.routes.js";
import productManager from "./productManager.js";
import clientsRoutes from "./routes/clients.routes.js";
import { connectMongoDB } from "./config/mongoDb.config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static("public"));

connectMongoDB();
// Rutas de la api
app.use("/api", routes);

// Ruta de las vistas
app.use("/", viewsRoutes);
app.use("/clients", clientsRoutes);

const httpServer = app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
export const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Nuevo usuario Conectado");
  productManager
    .getProducts()
    .then((products) => {
      socket.emit("products", products);
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
});
