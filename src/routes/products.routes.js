import { Router } from 'express';
import productManager from '../productManager.js';
import { checkProductData } from '../middlewares/checkProductData.middleware.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const products = await productManager.getProducts({ limit, skip });
      res.status(200).json({
        status: 'success',
        products,
        currentPage: page,
        totalPages: Math.ceil((await productManager.countProducts()) / limit),
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  })
  .post(checkProductData, async (req, res) => {
    try {
      const product = await productManager.addProduct(req.body);
      res.status(201).json({ status: 'success', product });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  });

router
  .route('/:pid')
  .get(async (req, res) => {
    try {
      const { pid } = req.params;
      const product = await productManager.getProductById(Number(pid));
      if (!product)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Producto no encontrado' });
      res.status(200).json({ status: 'success', product });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { pid } = req.params;
      const product = await productManager.deleteProduct(Number(pid));
      if (!product)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Producto no encontrado' });

      res.status(200).json({
        status: 'success',
        msg: `El producto con el id ${pid} fue eliminado`,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Erro', msg: 'Error interno del servidor' });
    }
  })
  .put(async (req, res) => {
    try {
      const { pid } = req.params;
      const body = req.body;
      const product = await productManager.updateProduct(Number(pid), body);
      if (!product)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Producto no encontrado' });

      res.status(200).json({ status: 'success', product });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Erro', msg: 'Error interno del servidor' });
    }
  });
export default router;
