//import mongoose from "mongoose";
//import app from "./src/app";

var mongoose = require("mongoose");
var app = require("./src/app");

var port = process.env.port || 3678;

mongoose.connect("mongodb://localhost:27017/servidor-noticias", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Conexión existosa.");
    app.listen(port, () => {
      console.log("API escuchando en el http://localhost:" + port);
    });
  }
});
