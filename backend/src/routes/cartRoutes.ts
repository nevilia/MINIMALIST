import express from 'express';
import { getCart, createCart, addToCart,  } from '../controllers/cartControllers';
// updateCart, deleteFromCart
const router = express.Router();

router.get('/', getCart);
router.post('/', createCart);
router.post('/:cartId', addToCart);
// router.put('/:cartId', updateCart);
// router.delete('/:cartId', deleteFromCart);


export default router;
