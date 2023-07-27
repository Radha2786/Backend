const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const { v4: uuid } = require("uuid");
let methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, (res, req) => {
  console.log("listening at port 8000");
});

app.get("/", (req, res) => {
  res.send("connected");
});

let comments = [
  {
    id: uuid(),
    username: "Radha",
    comment: "Very nice product",
    // id: 0
  },
  {
    id: uuid(),
    username: "Harhita",
    comment: "worst product ",
    // id: 1
  },
  {
    // username : "Harsh",
    id: uuid(),
    comment: "good , just go for it !",
    // id: 2
  },
];

// list all the comments
app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

// get the form for new comment
app.get("/comments/new", (req, res) => {
  res.render("new");
});

// creating a new comment
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

// display a  particular comment
app.get("/comments/:commentid", (req, res) => {
  const { commentid } = req.params;
  // console.log(commentid);
  // res.send('show route');
  const foundComment = comments.find((comment) => comment.id === commentid);
  // console.log(foundComment);
  res.render("show", { foundComment });
});

// edit comment
// get the edit form prefilled with the current data
app.get("/comments/:commentid/edit", (req, res) => {
  const { commentid } = req.params;

  const foundComment = comments.find((comment) => comment.id === commentid);

  // console.log(foundComment);
  res.render("edit", { comment: foundComment });
});
// updating the comment text
app.patch("/comments/:commentid", (req, res) => {
  // console.log("enter 1");
  // console.log(req.params);
  const { commentid } = req.params;
  const foundComment = comments.find((comment) => comment.id === commentid);
  //   res.send("patch");
  // console.log(foundComment);
  // console.log(req.body);
  const { text } = req.body;
  foundComment.comment = text;
  res.redirect("/comments");
});

// deleting a particular comment
app.delete('/comments/:commentid',(req,res)=>{
  const {commentid}=req.params;
  let newcommentarray = comments.filter((comment)=> commentid!=comment.id);
  comments=newcommentarray;
  res.render('/comments');
})
