const express = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

// authRouter.get(
//     '/user',(req,res)=>{
//         res.json({msg:"Pranto"});
//     });

authRouter.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;
try {
    const existingUser = await User.findOne({ email });//findOne is a promice
    if (existingUser) {
        return res.status(400).json({
            msg: "User with same email already exists!"
        });

    }
    const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email, password: hashedPassword, name,

        });
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({error:e.message});
    }

    //Everything in javascript is an objects.
    //{
    // 'name': name,  'email':email,'password':password 
    //}
    //
    //
    //get the data form client
    //post that in database
    //return that data to user
});


authRouter.post('/api/signin',async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    try {
        if(!user){
            return res.status(400).json({msg: "User with this email does not exist!"});
        }
        const isMatched = await bcryptjs.compare(password,user.password);
        if(!isMatched){
            return res.status(400).json({msg: "Incorrect Password"});
        }
        const token = jwt.sign({id: user._id},"passwordKey");
        res.json({token, ...user._doc});
        
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
});

module.exports = authRouter;