import express from 'express';
import { createOrder, getUserOrders, getOrderById } from '../controllers/ordersControllers';

const router = express.Router();

router.post('/:userId', createOrder);

router.get('/users/:userId', getUserOrders);

router.get('/:orderId', getOrderById);

export default router;
