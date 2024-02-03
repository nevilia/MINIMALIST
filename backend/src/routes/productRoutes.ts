// productRoutes.ts
import express from 'express';
import { getAllProducts, getProductById, postProduct, updateProduct } from '../controllers/productsController';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', postProduct)
router.patch('/products/:id', updateProduct)


// Add more routes as needed

export default router;
