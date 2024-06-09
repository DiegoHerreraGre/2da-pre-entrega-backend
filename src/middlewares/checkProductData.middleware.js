import { request, response } from "express";
import productManager from "../productManager.js";

export const checkProductData = async (req = request, res = response, next) => {
  try {
    const { title, description, price, stock } = req.body;
    const newProduct = {
      title,
      description,
      price,
      stock,
    };
    const products = await productManager.getProducts();
    const productExists = products.find((p) => p.title === title);
    if (productExists)
      return res
        .status(400)
        .json({ status: "Error", msg: `El producto ya existe` });
    const checkData = Object.values(newProduct).includes(undefined);
    if (checkData)
      return res
        .status(400)
        .json({ status: "Error", msg: "Todos los datos son obligatorios" });

    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Error", msg: "Error interno del servidor" });
  }
};
