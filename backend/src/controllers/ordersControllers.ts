import { Request, Response } from "express";
// import { getUserIdFromToken } from '../../../frontend/utils'
import Order from "../models/orderModel";

export const createOrder = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId
        const { cartId, totalPrice } = req.body

        if (!userId) {
            return res.status(401).json({ error: "Unauthorized: User Id not found in token" })
        }

        const newOrder = new Order({
            user: userId,
            cart: cartId,
            totalPrice: totalPrice,
            paymentStatus: 'Pending',
            fullfillmentStatus: 'Pending'
        })

        const savedOrder = await newOrder.save()

        return res.status(201).json(savedOrder)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getUserOrders = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId

        const userOrders = await Order.find({user:userId})

        return res.status(200).json(userOrders)
        
    } catch (error) {
        console.error("Error fetching user orders:", error);
        return res.status(500).json({ error: "Failed to fetch user orders" });
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const orderId = req.params.orderId

        const order = await Order.findById(orderId)

        if (!order){
            return res.status(404).json({error: "Order not found"})
        }

        return res.status(200).json(order)
        
    } catch (error) {
        console.error("Error fetching order by ID:", error);
        return res.status(500).json({ error: "Failed to fetch order" });
    }
}
