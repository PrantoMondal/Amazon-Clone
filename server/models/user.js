const mongoose = require('mongoose');
//This is not a model, its a schena
//this is how a user look like
const userSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        trim: true,
    },
    email:{
        required:true,
        type: String,
        trim: true,
        validate:{
            validator:(value)=>{
                const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },message:'Please enter a valid email address',
        },
    },
    password:{
        required: true,
        type: String,
        validate:{
            validator:(value)=>{
                return value.length>6;
            },message:'Please Enter a long password',
        },
    },
    address:{
        type:String,
        default:'',
    },
    type:{
        type:String,
        default:'user',
    }
    //cart
});
//creating a model
const User = mongoose.model("User",userSchema);
module.exports= User;
