const express = require("express");
const app = express();
const port = 2525;

const fun = (res) => {
  res.send("Inside fun function");
};

const verify =(req,res,next)=>{
    const {password} = req.query 
    if(password!=='orange'){
       return res.send('Invalid password');
    }
    next();
}

app.use((req, res, next) => {
  // res.send('Inside app.use');
  // console.log('Inside App.Use()'); // yha par requset hang kar jayegi kyuki req res cycle puri nahi ho paayi hai
  req.username = "Radha";   // doing changes in the request/response body
  // res.send("Request Response cycle completed");
  next();
  console.log('first middleware after calling the next()');
});

// app.use((req, res, next) => {
//     fun(res); // Call the 'fun' function
//     next();
//   });

app.use((req,res,next)=>{
    console.log('Second middleware');
    next();
    // console.log('Second middleware after calling the next()');
})

app.get("/", (req, res) => {
  const {username}=req;
  console.log(username);
  res.send("Home Route");
});

app.get("/cat",verify,(req,res)=>{
    res.send("meowwww");
})

app.listen(2323, () => {
  console.log("listening at port 2323");
});
