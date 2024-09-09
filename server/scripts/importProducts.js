import '../db/dbconn.js'
import Product from '../model/productSchema.js'
import { products } from '../data/productData.js'

const importData = async()=>{
    try{
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log('Data imported successfully');
        process.exit();
    } catch(error){
        console.log('error in importing data', error);
        process.exit(1)
        
    }
}
importData();