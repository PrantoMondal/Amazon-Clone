console.log("Hello World");
const express = require('express');
//import express package
const PORT = 3000;
const app = express();
//Creating an API
// http://<yourIpAddress>/helloWorld
app.get('/hello-world',(req, res)=>{
    res.json({hi:"hello world"});
})

app.get("/",(req, res)=>{
res.json({name:"Peanto Mondal"})
})


//GET, PUT, POST, DELETE, UPDATE -> CRUD

app.listen(PORT,function(){
console.log(`Connected at port${PORT}`)});
//localhost
//127.0.0.1


