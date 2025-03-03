import mongoose from "mongoose";
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 },
  totalQuantity: { type: Number, default: 0 }
});

const Cart = mongoose.model('Cart', cartSchema);

export {Cart};

