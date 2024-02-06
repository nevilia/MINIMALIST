import { Request, Response } from 'express';
import Product from '../models/productModel';

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        return res.json(products)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal server Error' })
    }
}

const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params
    try {
        const product = await Product.findById(productId)
        if (!product) {
            return res.status(404).json({ error: 'Product not found' })
        }
        return res.json(product)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal server Error' })
    }
}

const postProduct = async (req: Request, res: Response) => {
    const { name, rating, reviews, price, type, images, coverPhoto } = req.body

    try {
        const existingProduct = await Product.findOne({ name })
        if (existingProduct) {
            return res.status(400).json({ message: 'Product already exixts' })
        }
        const newProduct = new Product({ name, rating, reviews, price, type, images, coverPhoto })
        await newProduct.save()

        return res.status(201).json(newProduct)


    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: 'Internal server Error' })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    try {
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Use Object.assign to copy properties from req.body to existingProduct
        Object.assign(existingProduct, req.body);

        const updatedProduct = await existingProduct.save();

        return res.status(200).json(updatedProduct);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server Error' });
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await Product.deleteOne({ _id: productId });
        return res.status(200).json({ message: 'Product removed' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server Error' });
    }
};



export { getAllProducts, getProductById, postProduct, updateProduct, deleteProduct }