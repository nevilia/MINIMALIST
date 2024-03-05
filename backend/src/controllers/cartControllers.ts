import { Request, Response } from 'express';
import Cart, { CartDocument, CartItem } from '../models/cartModel';

export const getAllCarts =async (req: Request, res: Response) => {
    try {
        const carts = await Cart.find();

        res.json(carts);

    } catch (error) {
        
    }
}

// userId is now coming in req directly instead of params
export const getCart =async (req: Request, res: Response) => {
    try {

        let cart = await Cart.findOne({ user: req.userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        res.json(cart)

    } catch (error) {
        
    }
}


export const addToCart = async (req: Request, res: Response) => {
    try {
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ user: req.userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        const newItem = {
            productId: productId,
            quantity: quantity
        };

        cart.items.push(newItem);
        await cart.save();

        res.json(cart);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateCartItem = async (req: Request, res: Response) => {
    try {
        const { userId, itemId } = req.params;
        const { quantity } = req.body;

        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        const itemIndex = cart.items.findIndex(item => item._id && item._id.toString() === itemId);

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Item not found in the cart' });
        }

        cart.items[itemIndex].quantity = quantity;
        await cart.save();

        res.json(cart);
    } catch (error) {
        console.error('Error updating item in cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const removeProductFromCart = async (req: Request, res: Response) => {
    try {
        const { userId, itemId } = req.params;

        const cart: CartDocument | null = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        cart.items = cart.items.filter(item => item._id.toString() !== itemId);

        await cart.save();

        res.json(cart);
    } catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const deleteCart = async (req: Request, res: Response) => {
    try {
        const cart = await Cart.findOneAndDelete({ user: req.userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        res.json({ message: 'Cart deleted successfully' });
    } catch (error) {
        console.error('Error deleting user cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const clearCart = async (req: Request, res: Response) => {
    try {
        const cart = await Cart.findOne({ user: req.userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found for this user' });
        }

        while (cart.items.length > 0) {
            cart.items.pop();
        }

        await cart.save();
        res.json({ message: 'Cart cleared successfully' });
    } catch (error) {
        console.error('Error clearing user cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
