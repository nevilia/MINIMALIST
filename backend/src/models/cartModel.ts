import mongoose, { Document, Schema } from 'mongoose';

export interface CartDocument extends Document {
  user: mongoose.Types.ObjectId;
  items: {
    quantity: number;
    productId?: mongoose.Types.ObjectId | null | undefined;
    _id: Schema.Types.ObjectId
}[];
}



const cartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
          productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
          quantity: { type: Number, default: 1 }
        }]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
