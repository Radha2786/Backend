const express = require("express");
const app = express();
const path = require("path");

const todos = [
  "learn backend",
  "do trees questions",
  "complete stack assignment",
  "complete remaining questions",
];

app.listen(8000, () => {
  console.log("server running at port 8000");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);
  res.render("random", { randomNum });
});

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs"); // this simply tells that we want to use ejs engine

app.get("/todos", (req, res) => {
  console.log(req);
  res.render("todos", { todos });
});

app.use(express.static(path.join(__dirname, "public"))); // here we are telling exprsss that we r using static files from some folder that is public

// default path of views
// process.cwd() + '/views'
// (to jab hum kisi aur path se render karayenge to dikkat aayegi)
// hence we use path and join it to __dirname which is template which will be constant

// console.log(__dirname);

