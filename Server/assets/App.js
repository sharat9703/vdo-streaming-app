const express = require("express");
const fs= require("fs");

const path = require("path");

const app = express();

app.get('/video',(req,res)=>{
    res.sendFile('assets/sample01.mp4',{root: __dirname});
})

app.listen(8000,()=>{
    console.log("listening on port 8000!");
})