const express = require('express');
const app = express();
const port=3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.listen(3000,(req,res)=>{
    console.log('listening at port 3000');
})

app.get('/' ,(req,res) => {
    res.render('index');
})

app.get('/user',(req,res) => {
    const {username,age} = req.query;
    console.log(req.query);
    // res.send(`requested for ${req.query.username}`);
    res.send(username);
    res.send(age);
})

app.use(express.json()) // for parsing application/json


// Middleware (it is basically just a function)
app.use(express.urlencoded({ extended: true }))  
// for parsing application/x-www-form-urlencoded  

app.post('/user',(req,res)=>{
    
    res.send('Post requests ');
    // Contains key-value pairs of data submitted in the request body.By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
    console.log(req.body);
})

