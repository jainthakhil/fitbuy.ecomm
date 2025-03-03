import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {User} from '../model/userSchema.js'
import '../db/dbconn.js'
import {Cart} from '../model/cartSchema.js'


const router = express.Router();

router.post('/signup', async(req, res)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error:"empty field recognised"})
    }

    try{
        const userExist = await User.findOne({
            email:email
        })
        if(userExist){
            return res.status(422).json({message:'email is associated with another account'})
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User ({
            name:name,
            email:email,
            password:hashedPassword,
        })
        await user.save();
        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const token = await user.generateAuthToken();

        const cart = new Cart({
            userId: user._id, // Use the generated user ID
            items: [],
            totalPrice: 0,
            totalQuantity: 0,
        });
        await cart.save();

        res.status(201).json({message:'user registered successfully'})
        console.log('signup successfull');
        console.log("token is: ", token );
        
    }
    catch(err){
        res.json({error:err})
        console.log(err)
    }
})

router.post('/signin', async(req, res)=>{
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(422).json({ error: 'fill all the fields' });
        }
        const userExist = await User.findOne({email:email})

        if(!userExist){
            return res.status(404).json({message:'user not found'})
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        console.log("Password Provided: ", password);
        console.log("Stored Hash: ", userExist.password);

        if(!isMatch){
            console.log("signin unsuccessfull")
            return res.status(401).json({ message: 'Invalid password' });
        }  
        const token = await userExist.generateAuthToken();
        console.log("token is: ", token );
        return res.status(200).json({ 
            message: 'User logged in successfully', 
            loggedInUserName: userExist.name, 
            token 
        });
        // const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    } catch(err){
        res.status(500).json({error:'server error',err})
        console.log(err)
    }

})

export default router;