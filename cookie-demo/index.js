/*
cookies are basically just the key value pair and it is a part of client side storage
res.cookie() this is how we can set a cookie and browser is going to store it and with all the subsequent requests at that url browser is going to send all those cookies that we have set and we can simply use cookies parser middleware 

read about stateful and stateless 


signed cookies = not for encryption purpose and not for hiding just maintains integrity like if the cookie is changed it will display false if u access that signed cookie otherwise it will display that signed cookie


disadvantage : if we change the browser then cookies gets lost (bcz it uses basically client side storage) , information can hamper/change
so we don't store crucial data inside cookie
*/

const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
// app.use(cookieParser());
app.use(cookieParser("This is my secret key"));

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("server listening at port 3000");
});

app.get("/setCookie", (req, res) => {
  res.cookie("username", "Radha");
  res.cookie("Theme", "Dark");
  const { Theme } = req.cookies;
  console.log(Theme);
  res.send(`Theme is ${Theme} !!`);
});

// app.get('/clear-cookie', (req, res) => {
//     res.clearCookie('username');
//     res.send('Cookie has been cleared.');
//   });

app.get("/get-signed-cookie", (req, res) => {
  res.cookie("Movie", "Ironman", { signed: true });
  res.send("Sent you a signed cookie");
});
