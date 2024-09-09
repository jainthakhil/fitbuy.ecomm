import express from 'express';
import Product from '../model/productSchema.js';

const router = express.Router();

router.get('/men', async (req, res) => {
    try {
    
        const data = await Product.find({ gender: 'Male' });
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
