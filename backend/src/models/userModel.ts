import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
    fname: string
    lname: string
    email: string
    password: string
    cart: Schema.Types.ObjectId | null
    orders: Schema.Types.ObjectId[]
}

const userSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        default: null // Default value is null, indicating no cart associated with the user initially
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User