import express from 'express'
import bcrypt from 'bcryptjs'
import {User} from '../model/userSchema.js'
import '../db/dbconn.js'


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
        res.status(201).json({message:'user registered successfully'})
        console.log('signup successfull');
        
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
            res.status(422).json({error: 'fill all the fields'})
        }
        const userExist = await User.findOne({email:email})

        if(!userExist){
            return res.status(404).json({message:'user not found'})
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if(isMatch){
            res.json({message:'user loggedin successfully', loggedInUserName:userExist.name})
            console.log("signin success")
        } else{
            res.status(401).json({message:'invalid password'})
        }

    } catch(err){
        res.status(500).json({error:'server error',err})
        console.log(err)
    }

})

export default router;