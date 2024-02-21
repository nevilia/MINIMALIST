import express from 'express';
import { getAllCarts, createCart, addToCart, getCart,  getItemFromCart, removeProductFromCart, updateCartItem, deleteEmptyCarts  } from '../controllers/cartControllers';

const router = express.Router();

router.get('/', getAllCarts);
router.get('/:cartId', getCart);
router.post('/', createCart);
router.post('/:cartId', addToCart);
router.delete('/empty', deleteEmptyCarts)

router.patch('/:cartId/items/:itemId', updateCartItem); // Update quantity of item in cart
router.delete('/:cartId/items/:itemId', removeProductFromCart); // Remove product from cart
// router.delete('/:cartId/item/:itemId', deleteFromCart);
router.get('/:cartId/items/:itemId', getItemFromCart);


export default router;
