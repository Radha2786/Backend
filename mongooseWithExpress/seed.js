// for storing sample/dummy data we have created this seed file
const mongoose = require('mongoose');

const Product = require('./models/product')

 const Dummy_products =[
    {
        name:'Iphone',
        desc:'Advanced camera system for better photos in any light',
        price:100
    },
    {
        name:'Samsung S22',
        desc:'Advanced camera system for better photos in any light',
        price:90
    },
    {
        name:'Macbook Air',
        desc:'Advanced camera system for better photos in any light',
        price:120
    },
    {
        name:'Adidas Shoes',
        desc:'Advanced camera system for better photos in any light',
        price:60
    },
    {
        name:'Shirt',
        desc:'Advanced camera system for better photos in any light',
        price:20
    }
]

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(Dummy_products);
    console.log('DB Seeded');
}

module.exports=seedDB;

