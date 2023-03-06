const express = require("express");
const ejs = require("ejs");
const path = require('path');

const fs = require("fs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();


const postController = require("./controllers/postController");
const pageController = require("./controllers/pageController");

mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db");

app.set("view engine", "ejs");
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// Routes:
app.get("/", postController.getAllPosts);
app.get("/post/:id", postController.getPost);

app.get("/about", pageController.getAboutPage);
app.get("/index", postController.getAllPosts);

app.get("/add", pageController.getAddPage);
app.get("/post", pageController.getPostPage);

app.get("/photos/edit/:id", pageController.getEditPage);
app.put("/photos/:id", postController.updatePost);

app.delete("/photos/:id", postController.deletePost);
app.post("/photos", postController.createPost);

const port = 3002;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
