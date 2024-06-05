import { Router } from "express";
import productManager from "../productManager.js";
import { io } from "../app.js";
import { clientsModel } from "../models/client.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    res.render("home", { products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router
  .route("/addclients")
  .get(async (req, res) => {
    res.render("addclients");
  })
  .post(async (req, res) => {
    try {
      const { name, lastName, dni, age, email, password } = req.body;
      const client = await clientsModel.create({ name, lastName, dni, age, email, password });

      res.status(200).json({ status: "success", payload: client });
    } catch (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).json({ status: "Error", msg: "Internal server error" });
    }
  });

router
  .route("/realtimeproducts")
  .get(async (req, res) => {
    try {
      let products = await productManager.getProducts();
      io.emit("products", products);
      res.status(200).render("realTimeProducts", { products: products });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, price, description } = req.body;
      await productManager.addProduct({ title, price, description });
      const products = await productManager.getProducts();
      io.emit("products", products);

      res.render("realTimeProducts");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.body;
      await productManager.deleteProduct(Number(id));
      const products = await productManager.getProducts();
      io.emit("products", products);

      res.render("realTimeProducts");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

export default router;
