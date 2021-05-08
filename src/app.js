const express = require('express');
const path = require('path');
const app = express();

const static_path = path.join(__dirname,"../public/");
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.send("Welcome to RK Tech");
});

app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
});

app.get("*",(req,res)=>{
    res.send("404 Page");
})

app.listen(3000,()=>{
    console.log("Running on Port 3000");
});