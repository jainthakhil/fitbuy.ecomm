import express from 'express';
const PORT = process.env.PORT;
import authRoute from './router/auth.js'
import featuredRoute from './router/featuredProducts.js'
import checkProductRoute from './router/checkProductRoute.js'
import menRoute from './router/menRoute.js'
import womenRoute from './router/womenRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express();
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type'] // Allowed headers
}));

app.use(authRoute)
app.use(featuredRoute)
app.use(checkProductRoute)
app.use(menRoute)
app.use(womenRoute)

app.get('/', (req, res)=>{
    res.send('server is running')
})

app.listen(PORT, (req,res)=>{
    console.log(`server has started at port ${PORT}`);
})