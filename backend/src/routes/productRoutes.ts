// productRoutes.ts
import express from 'express';
import { deleteProduct, getAllProducts, getProductById, postProduct, updateProduct } from '../controllers/productsController';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.post('/', postProduct)
router.patch('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router;
