import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 },
      name: String,
      image: String,
      price: Number
    }]
  });
  
  const Cart = mongoose.model('Cart', cartSchema);
  
export default Cart