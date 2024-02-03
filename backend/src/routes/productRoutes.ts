// productRoutes.ts
import express from 'express';
import { getAllProducts, getProductById, postProduct } from '../controllers/productsController';
import { authenticateUser } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', postProduct)

// Add more routes as needed

export default router;
