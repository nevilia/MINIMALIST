import express from 'express';
import { getAllCarts, createCart, addToCart, getCart, deleteFromCart  } from '../controllers/cartControllers';
// updateCart, 
const router = express.Router();

router.get('/', getAllCarts);
router.get('/:cartId', getCart);
router.post('/', createCart);
router.post('/:cartId', addToCart);
// router.put('/:cartId', updateCart);
router.delete('/:cartId/item/:itemId', deleteFromCart);


export default router;
