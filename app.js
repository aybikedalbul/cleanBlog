const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// MIDDLEWARE
const myLogger = (req, res, next) => {
  console.log("Middleware Log 1 is running..");
  next();
};

app.use(myLogger);
app.get("/", (req, res) => {
  res.render("index");
});
// Routes: 
app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

const port = 3002;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
