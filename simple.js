const express=require('express');
const app=express();

app.get('/',(req,res) => {
    res.send('Welcome to the node.js API!');
});

app.get('/greet/:name',(req,res) => {
    res.send('hello,${req.params.name}!');
});

app.listen(4000,() =>{
    console.log('api server listening on port 4000');
});

