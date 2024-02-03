import { Request, Response } from 'express';
import Product from '../models/productModel';

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Internal server Error'})
    }
}

const getProductById = async (req: Request, res: Response) => {
    const { productId } = req.params
    try{
        const product = await Product.findById(productId)
        if(!product) {
            res.send(404).json({error: 'Product not found'})
        }
        res.json(product)

    } catch(error) {
        console.error(error)
        res.status(500).json({error: 'Internal server Error'})
    }
}

const postProduct = async (req: Request, res: Response) => {
    const {name, rating, reviews, price, type, images, coverPhoto} = req.body

    try{
        const existingProduct = await Product.findOne({ name })
        if(existingProduct){
            res.status(400).json({message: 'Product already exixts'})
        }
        const newProduct = new Product({name, rating, reviews, price, type, images, coverPhoto})
        await newProduct.save()

        res.status(201).json(newProduct)


    } catch(error) {
        console.error(error)
        res.status(500).json({error: 'Internal server Error'})
    }
}

export {getAllProducts, getProductById, postProduct}