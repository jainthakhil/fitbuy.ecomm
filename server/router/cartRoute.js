import express from 'express'
import {Cart} from '../model/userSchema.js'
import '../db/dbconn.js'

const router = express.Router();

router.post('/cart', async (req, res) => {
    const { productId, name, price, imageUrl, quantity } = req.body;
  
    try {
      // Assume userId comes from authentication middleware
      const userId = req.user.id;
  
      // Find or create cart for the user
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId, items: [], totalPrice: 0, totalQuantity: 0 });
      }
  
      // Check if item already exists in the cart
      const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
      if (existingItemIndex > -1) {
        // If item exists, update quantity
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        // If item doesn't exist, add new item
        cart.items.push({ productId, name, price, imageUrl, quantity, description, size, color });
      }
  
      // Recalculate total price and quantity
      cart.totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
      cart.totalQuantity = cart.items.reduce((total, item) => total + item.quantity, 0);
  
      // Save updated cart
      await cart.save();
  
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error from server, adding item to cart:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;