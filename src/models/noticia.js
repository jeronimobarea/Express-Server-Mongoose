//import mongoose from "mongoose";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noticia = Schema({
  id: String,
  image: String,
  title: String,
  subtitle: String,
  author: String,
  date: String,
  content: String
});

module.exports = mongoose.model("Noticia", noticia);
