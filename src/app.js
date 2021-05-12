const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine", 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.get("",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404',{
        errorMsg:"OOPs! Page Not Found"
    });
})

app.listen(3000,()=>{
    console.log("Running on Port 3000");
});