import express from "express";
import data from "./data.json" with {type:'json'};
const app=express();
const port=3000;

app.get("/",(req,res) =>{
    res.json(data);
    res.send(req,params);
});

app.listen(port,() =>{
    console.log('the server is running on port number ${PORT}');
    console.log("json data captured successfully");
});