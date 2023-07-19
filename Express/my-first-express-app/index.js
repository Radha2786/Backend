const express = require('express') // this will return a function and that function gets stored in express variable so basically express is a function.
const app = express()  // calling this express function will return a large object
const port = 3000


// to start the server so that it can listen up to requests we use 

app.listen(3000,()=>{
    console.log("server running at port 3000");
})

// to connect the browser with the server we need 2 things :
// --->1  localhost (it conatins the reference of our own machine)
// --->2 port  

// for each incoming requests this app.use functions runs the callback 

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);
//     console.log("requets has been made");

//         // to send back the reponse from server to browser
//     res.send('<h1>This is the html heading tag as response</h1>');

// })


// ----------ROUTING
// different responses for different requests

 /* The app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. Basically, it is intended for binding the middleware to your application.

Syntax: 

app.get( path, callback )
*/

app.get('/cat',(req,res)=>{
   res.send('meowww');
})


app.get('/dog',(req,res)=>{
    res.send('bhauuu');
 })

 app.get('/',(req,res)=>{
    res.send('you are on home page');
 })

 app.get('/animal',(req,res)=>{
    res.send('this is animal page');
 })

 app.get('/user',(req,res)=>{
    res.send('wlcm to the server');
 })


//  app.get('*',(req,res)=>{
//     res.send('no page like this u are looking for');
//  })

// -------nodemon package--------
// automatically starts the Server 
// npm start (to run start script)