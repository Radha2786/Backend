
const mongoose = require('mongoose');
// setting schema 

const productSchema= new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    price:{
        type:Number,
        min:0
    }
  });

  const Product = mongoose.model('Product', productSchema);
  module.exports=Product;