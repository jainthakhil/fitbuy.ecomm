import express from 'express'
import Product from '../model/productSchema.js'
import '../db/dbconn.js'

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const featuredProduct = await Product.find({featured:true});
        res.json(featuredProduct)
    } catch(error){
        res.status(500).json({error:"server error"})
    }
})
export default router;