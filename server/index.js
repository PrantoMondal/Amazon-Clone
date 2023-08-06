console.log("Hello World");
const express = require('express');
//import express package
const PORT = 3000;

//Creating an API
const app = express();
app.listen(PORT,"0.0.0.0",function(){
console.log(`Connected at port${PORT}`)});
//localhost
//127.0.0.1


