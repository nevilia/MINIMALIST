import mongoose, { Schema, Document} from "mongoose";

interface Order extends Document {
    user: Schema.Types.ObjectId
    cart: Schema.Types.ObjectId
    totalPrice: number
    paymentStatus: string
    fulfillmentStatus: string
}

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
        required: true
    },
    totalPrice: {
        type: Number,
        required: false
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid']
    },
    fulfillmentStatus: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered'],
        default: 'Pending'
    }

}, {timestamps: true})

const Order = mongoose.model<Order>('Order', orderSchema)

export default Order