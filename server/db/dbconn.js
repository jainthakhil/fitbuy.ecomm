import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const db = process.env.DATABASE
// import Product from '../model/productSchema.js'
// import { products } from '../data/productData.js'

mongoose.connect(db,{
    
}).then(()=>{
    console.log('connection successfull');
       
}).catch((err)=>{
    console.log('no connection', err)
})

// const importData = async()=>{
//     try{
//         await Product.deleteMany();
//         await Product.insertMany(products);
//         console.log('Data imported successfully');
//         process.exit();
//     } catch(error){
//         console.log('error in importing data', error);
//         process.exit(1)
        
//     }
// }
// importData();
