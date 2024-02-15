import { Request, Response } from 'express';

const Cart = require('../models/CartModel');

// Route to create a new cart
export const createCart = async (req: Request, res: Response) => {
  try {
    const newCart = await Cart.create({ items: req.body.items });
    res.status(201).json(newCart);
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Route to get all carts
export const getCart = async (req: Request, res: Response) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    console.error('Error fetching carts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Routes for CRUD on cart

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { cartId } = req.params;
        const { productId, quantity } = req.body;

        // Find the cart by ID
        let cart = await Cart.findById(cartId);

        // If cart doesn't exist, create a new one
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


// Route to update a cart
// export const updateCart = async (req: Request, res: Response) => {
//     try {
//       const { cartId } = req.params;
//       const { productId, quantity } = req.body;
  
//       // Find the cart by ID
//       const cart = await Cart.findById(cartId);
  
//       if (!cart) {
//         return res.status(404).json({ message: 'Cart not found' });
//       }
  
//       // Update the quantity of the product in the cart
//       const item = cart.items.find((item: { productId: string; }) => item.productId === productId);
//       if (!item) {
//         return res.status(404).json({ message: 'Product not found in cart' });
//       }
//       item.quantity = quantity;
  
//       // Save the updated cart
//       await cart.save();
  
//       // Respond with the updated cart
//       res.json(cart);
//     } catch (error) {
//       console.error('Error updating cart:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  
// Route to delete a product from a cart
// export const deleteFromCart = async (req: Request, res: Response) => {
//     try {
//       const { cartId } = req.params;
//       const { productId } = req.body;
  
//       // Find the cart by ID
//       const cart = await Cart.findById(cartId);
  
//       if (!cart) {
//         return res.status(404).json({ message: 'Cart not found' });
//       }
  
//       // Filter out the product from the cart
//       cart.items = cart.items.filter((item: { productId: string; }) => item.productId !== productId);
  
//       // Save the updated cart
//       await cart.save();
  
//       // Respond with the updated cart
//       res.json(cart);
//     } catch (error) {
//       console.error('Error deleting product from cart:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
  
