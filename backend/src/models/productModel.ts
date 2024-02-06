// productModel.ts

import mongoose, { Document, Schema } from 'mongoose'

interface Product extends Document {
    name: string
    rating: number
    price: number
    reviews: number
    type: 'hair' | 'skin' | 'bath&body'
    images: string[]
    coverPhoto: string
}

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['hair', 'skin', 'bath&body'],
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    coverPhoto: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

export default Product