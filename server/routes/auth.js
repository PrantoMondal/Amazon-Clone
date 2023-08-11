const express = require('express');
const User = require('../models/user');


const authRouter = express.Router();
// authRouter.get(
//     '/user',(req,res)=>{
//         res.json({msg:"Pranto"});
//     });

authRouter.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });//findOne is a promice
    if (existingUser) {
        return res.status(400).json({ msg: "User with same email already exists!" });

    }
    try {
        let user = new User({
            email, password, name,

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

module.exports = authRouter;