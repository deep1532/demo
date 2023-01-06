const { append } = require("express/lib/response");

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req,res)=>{
    res.send("Hello " + Math.random());
})

app.listen(port,()=>{
    console.log("Server Running on Port " + port);
})