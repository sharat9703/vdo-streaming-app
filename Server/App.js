const express = require("express");
const fs= require("fs");
const app = express();
const path = require("path");
const cors = require("cors");


let videos = [{
    id:0,
    name:"Sample 01",
    poster:'/video/0/poster',
    duration:'37 secs'
},
{
    id:1,
    name:"Sample 02",
    poster:'/video/1/poster',
    duration:'1 min'
},
{
    id:2,
    name:"Sample 03",
    poster:'/video/2/poster',
    duration:'3 min'
}];

app.get('/video',(req,res)=>{
    res.sendFile('assets/sample01.mp4',{root: __dirname});
})
app.use(cors());

app.get('/videos',(req,res)=> res.json(videos));

app.listen(8000,()=>{
    console.log("listening on port 8000!");
})