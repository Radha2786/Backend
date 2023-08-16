const express = require('express');
const router = express.Router();    // this router acts as a mini application and all the method that exists in app, exists in this also

const Product = require('../models/product');
router.use(express.urlencoded({ extended: true }));

// Display all the products 
router.get('/products', async (req,res)=>{
   const products= await Product.find({});
   // console.log(products);
   // res.send(products);
   res.render('index',{ products });
});


router.get('/product/new',async(req,res)=>{
   res.render('new');
})

router.post('/products',async (req,res)=>{
   const{name,desc,price}=req.body;
   await Product.create({name,desc,price});
   res.redirect('/products');
});

// show a particular product
router.get('/products/:productid', async (req,res)=>{
   const {productid} = req.params;
   const product=await Product.findById(productid);
   // console.log(product);
   res.render('show',{product});
})

// edit product 
router.get('/products/:productid/edit', async(req,res)=>{
   const {productid} = req.params;
   const product = await Product.findById(productid);
   res.render('edit',{product});
})

router.patch('/products/:productid',async(req,res)=>{
   const {productid} = req.params;

   const{name,price,desc}=req.body;
   await Product.findByIdAndUpdate(productid,{name,price,desc});
   res.redirect(`/products/${productid}`);

});
module.exports=router;