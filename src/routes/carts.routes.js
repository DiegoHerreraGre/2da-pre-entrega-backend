import { Router } from 'express';
import cartManager from '../cartManager.js';
import productManager from '../productManager.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const cart = await cartManager.createCart();

    res.status(201).json({ status: 'success', cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'Erro', msg: 'Error interno del servidor' });
  }
});

router
  .route('/:cid')
  .get(async (req, res) => {
    try {
      const { cid } = req.params;
      const cart = await cartManager.getCartById(Number(cid));
      if (!cart)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Carrito no encontrado' });

      res.status(200).json({ status: 'success', cart });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ status: 'Erro', msg: 'Error interno del servidor' });
    }
  })
  .delete(async (req, res) => {
    try {
      const { cid } = req.params;
      const cartDelete = await cartManager.deleteCart(cid);
      if (!cartDelete)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Carrito no encontrado' });

      res
        .status(200)
        .json({ status: 'success', msg: 'Carrito eliminado con éxito' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  })
  .put(async (req, res) => {
    try {
      const { cid } = req.params;
      const cartUpdate = await cartManager.updateCart(cid, req.body);
      if (!cartUpdate)
        return res
          .status(404)
          .json({ status: 'Error', msg: 'Carrito no encontrado' });

      res.status(200).json({ status: 'success', payload: cartUpdate });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  })
  .post(async (req, res) => {
    try {
      const { cid } = req.params;
      const product = await productManager.getProductById(Number(pid));
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: 'Error', msg: 'Error interno del servidor' });
    }
  });

router.post('/:cid/product/:pid', async (req, res) => {
  try {
    const { cid, pid } = req.params;

    const product = await productManager.getProductById(Number(pid));
    if (!product)
      return res
        .status(404)
        .json({ status: 'Error', msg: 'Producto no encontrado' });

    const cart = await cartManager.addProductToCart(Number(cid), Number(pid));
    if (!cart)
      return res
        .status(404)
        .json({ status: 'Error', msg: 'Carrito no encontrado' });

    res.status(200).json({ status: 'success', cart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'Erro', msg: 'Error interno del servidor' });
  }
});

export default router;
