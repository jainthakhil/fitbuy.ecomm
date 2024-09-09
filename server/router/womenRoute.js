import express from 'express';
import Product from '../model/productSchema.js';

const router = express.Router();

router.get('/women', async (req, res) => {
    try {
    
        const data = await Product.find({ gender: 'Female' });
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
