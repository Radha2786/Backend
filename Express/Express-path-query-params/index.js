const express = require('express');
const app = express();
const port = 8000;

app.listen(8000,()=>{
    console.log(`listening at port ${port}` );
})

app.get('/',(req,res)=>{
    res.send('Root Path');

})

/*
app.get('/r/:subredit',(req,res)=>{
    res.send('SUBREDITT PAGE');
})

after this /r thing we can give anything and it will display 'SUBREDITT PAGE'

*/

/*

app.get('/r/:subredit',(req,res)=>{
    console.log(req.params);  // this params is an object

    // this req.params object will give =
    // { subredit: 'gla' }
    // whatever we have passed in the request

    // http://localhost:8000/r/dog

    // subredit becomes the key and dog has become value 

    const { subredit } = req.params;
    res.send(`<h1>This is ${subredit} </h1>`);
})



app.get('/user/:userid/comments/:commentsid',(req,res)=>{
    console.log(req.params);
    res.send('USER ROUTE');
    // { userid: '2786', commentsid: 'uckof' }
})

*/



// --------------QUERY PARAMETER-------------------
//  After the question marks on the URLs, the query string of a URL contains key-value pairs that are known as query parameters.
// Express query params are in the form of key value pairs after the question mark in the query string and are separated by = 

// app.get('/search',(req,res)=>{
//     const {q}=req.query;
//     res.send(`You are trying to search for ${q}`);
// })

app.get('/products/:productid', (req, res) => {
    
    console.log(req.params);
    console.log(req.query);

    res.send('PRODUCT PAGE');
});

// http://localhost:8000/products/iphone/?version=3
// { productid: 'iphone' }
// { version: '3' }