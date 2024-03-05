import express from 'express';
import { getAllCarts, getCart, addToCart, updateCartItem, removeProductFromCart, deleteCart, clearCart } from '../controllers/cartControllers';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

// Route to get all carts. Only for Admin purposes
router.get('/', getAllCarts);

// Auth Middleware
router.use(authMiddleware)

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

router.delete('/:userId/clear', clearCart);

export default router;
