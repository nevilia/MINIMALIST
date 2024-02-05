// productRoutes.ts
import express from 'express';
import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from '../controllers/productsController';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', postProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)


// Add more routes as needed

export default router;
