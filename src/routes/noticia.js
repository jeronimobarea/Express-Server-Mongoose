//import express from "express";
//import noticiaController from "../controllers/noticia_controller";

var express = require("express");
var noticiaController = require("../controllers/noticia_controller");
var api = express.Router();

api.get("/noticia/:id", noticiaController.getNoticia);
api.get("/noticias", noticiaController.getNoticias);
api.post("/noticia", noticiaController.saveNoticia);
api.put("/noticia/:id", noticiaController.updateNoticia);
api.delete("/noticia/:id", noticiaController.deleteNoticia);

module.exports = api;
