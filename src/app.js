const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");


app.set("view engine", 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.get("",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("*",(req,res)=>{
    res.render('404');
})

app.listen(3000,()=>{
    console.log("Running on Port 3000");
});