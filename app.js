const express = require("express");
const ejs = require("ejs");
const path = require("path");
const mongoose = require("mongoose");
const Photo = require('./models/Photo');

const app = express();
 
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes:
app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render('index', {
    photos,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/add", (req, res) => {
  res.render("add");
});
app.get("/post", (req, res) => {
  res.render("post");
});

app.post('/photos', async  (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});
const port = 3002;

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
