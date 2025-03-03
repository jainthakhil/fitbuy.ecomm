import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

// Generate an auth token for the user
userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET);

        // Add this token to the user's tokens array
        this.tokens = this.tokens.concat({token:token });
        await this.save();
        console.log("Token saved successfully in database.");
        return token;
    }
    catch(err){
        console.log("Error generating token:",err);
        throw new Error('Token generation failed');
    }

};

const User = mongoose.model('User', userSchema);

export  {User}