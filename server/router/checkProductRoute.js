import express from 'express'
import Product from '../model/productSchema.js'


const router = express.Router();

router.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      res.json(product);
      console.log(productId);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
export default router;