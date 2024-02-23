import express from 'express';
import { getAllCarts, getCart, addToCart, updateCartItem, removeProductFromCart, deleteCart } from '../controllers/cartControllers';

const router = express.Router();

// Route to get all carts
router.get('/', getAllCarts);

// Route to get a specific cart by user ID
router.get('/:userId', getCart);

// Route to add a product to the cart
router.post('/:userId/add', addToCart);

// Route to update a product in the cart
router.put('/:userId/items/:itemId', updateCartItem);

// Route to remove a product from the cart
router.delete('/:userId/items/:itemId', removeProductFromCart);

// Route to delete a cart
router.delete('/:userId', deleteCart);

export default router;
