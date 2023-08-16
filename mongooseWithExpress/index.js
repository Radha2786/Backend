const express = require('express');
const app = express() ;
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');

const methodOverride = require('method-override');   // Configure the method-override middleware in your Express app.

seedDB();

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

// Configure method-override middleware
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/ShopApp').then(()=>{
    console.log('DB Connected');
}).catch(()=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server started at port 3000');
})

app.get('/',(req,res)=>{
    res.send('Connected');
})


const productRoutes= require('./Routes/ProductRoutes');
app.use(productRoutes);  // koi bhi request aayegi to app.use chalega for each incoming request



// firstly require all module and dependencies 
// create server and start it
// connect mongoose----create schema and then create model and export it (creating it in a separate model file)