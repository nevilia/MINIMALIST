import { Request, Response } from 'express';

import Cart from '../models/cartModel';

// Route to create a new cart
export const createCart = async (req: Request, res: Response) => {
    try {
        const { productId, quantity } = req.body;
        const items = [{ productId, quantity }];
        const newCart = await Cart.create({ items });
        res.status(201).json(newCart);
    } catch (error) {
        console.error('Error creating cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Route to get all carts
export const getAllCarts = async (req: Request, res: Response) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        console.error('Error fetching carts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getCart = async (req: Request, res: Response) => {
    try {
        const { cartId } = req.params;
        const carts = await Cart.findById(cartId);
        res.status(200).json(carts);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Routes for CRUD on cart

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { cartId } = req.params;
        const { productId, quantity } = req.body;

        let cart = await Cart.findById(cartId);

        if (!cart) {
            cart = await Cart.create({ items: [{ productId, quantity }] });
            return res.status(201).json(cart);
        }

        // Add the product to the cart
        cart.items.push({ productId, quantity });
        await cart.save();

        // Respond with the updated cart
        res.json(cart);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Route to update quantity of a product in the cart
export const updateCartItem = async (req: Request, res: Response) => {
    try {
        const { cartId, itemId } = req.params;
        const { quantity } = req.body;
        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(item => item._id && item._id.toString() === itemId)

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        item.quantity = quantity;
        await cart.save();

        res.json(cart);
    } catch (error) {
        console.error('Error updating item in cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Route to remove a product from the cart
// Route to remove a product from the cart
// Route to remove a product from the cart
export const removeProductFromCart = async (req: Request, res: Response) => {
    try {
        const { cartId, itemId } = req.params;
        
        // Find the cart by its ID and update it to remove the specified item
        const cart = await Cart.findByIdAndUpdate(
            cartId,
            { $pull: { items: { _id: itemId } } },
            { new: true }
        );

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.json(cart);
    } catch (error) {
        console.error('Error removing product from cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getItemFromCart = async (req: Request, res: Response) => {
    try {
        const { cartId, itemId } = req.params;
        
        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const item = cart.items.find(item => item._id && item._id.toString() === itemId)

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json(item);
    } catch (error) {
        console.error('Error fetching item from cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete Empty Carts
export const deleteEmptyCarts = async (req: Request, res: Response) => {
    try {
      // Find carts with empty items array
      const emptyCarts = await Cart.find({ items: { $size: 0 } });
  
      if (emptyCarts.length === 0) {
        return res.status(404).json({ message: 'No empty carts found' });
      }
  
      // Delete empty carts
      await Cart.deleteMany({ items: { $size: 0 } });
  
      res.status(200).json({ message: 'Empty carts deleted successfully' });
    } catch (error) {
      console.error('Error deleting empty carts:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
