// console.log("Hello World");
//inports from packages

const express = require('express');
const mongoose = require('mongoose');
const DB = "mongodb+srv://pranto:Pranto265482@cluster0.xrxheuu.mongodb.net/?retryWrites=true&w=majority"

const authRouter = require("./routes/auth");
const PORT = 3000;
const app = express();



app.use(authRouter);
// const authRouter = require("./routes/auth");

//inports from other files

// app.get("/name",(req,res)=>{
//     res.send("hello-world");
// })

// app.get("/",(req,res)=>{
//     res.json({namae:"Pranto"})
// })

//connection
mongoose.connect(DB).then(()=>{
    console.log('Connection Successful');
}).catch(e => {
    console.log(e);
})

app.listen(PORT,()=>{
console.log(`Connected at port${PORT}`);
});



