//import Noticia from "../models/noticia";

var Noticia = require("../models/noticia");

function saveNoticia(req, res) {
  var noticia = new Noticia();

  var params = req.body;

  noticia.image = params.image;
  noticia.title = params.title;
  noticia.subtitle = params.subtitle;
  noticia.author = params.author;
  noticia.date = params.date;
  noticia.content = params.content;

  noticia.save((err, noticiaStored) => {
    if (err) {
      res.status(500).send({ message: "Error al guardar" });
    } else {
      res.status(200).send({ noticia: noticiaStored });
    }
  });
}

function getNoticia(req, res) {
  var noticiaID = req.params.id;

  Noticia.findById(noticiaID, (err, noticia) => {
    if (err) {
      res.status(500).send({ message: "Error al devolver el marcador" });
    } else {
      if (!noticia) {
        res.status(404).send({ message: "No hay marcador" });
      } else {
        res.status(200).send({ noticia });
      }
    }
  });
}

function getNoticias(req, res) {
  Noticia.find({})
    .sort("-_id")
    .exec((err, noticias) => {
      if (err) {
        res.status(500).send({ message: "Error al devolver los marcadores" });
      } else {
        if (!noticias) {
          res.status(404).send({ message: "No hay marcadores" });
        } else {
          res.status(200).send({ noticias });
        }
      }
    });
}

function updateNoticia(req, res) {
  var noticiaID = req.params.id;
  var update = req.body;

  Noticia.findByIdAndUpdate(noticiaID, update, (err, noticiaUpdated) => {
    if (err) {
      res.status(500).send({ message: "Error al actualizar el marcador" });
    } else {
      res.status(200).send({ noticia: noticiaUpdated });
    }
  });
}

function deleteNoticia(req, res) {
  var noticiaID = req.params.id;

  Noticia.findById(noticiaID, (err, noticia) => {
    if (err) {
      res.status(500).send({ message: "Error al devolver el marcador" });
    }

    if (!noticia) {
      res.status(404).send({ message: "No hay marcador" });
    } else {
      noticia.remove(err => {
        if (err) {
          res.status(500).send({ message: "Error al borrar." });
        } else {
          res.status(200).send({ message: "El marcador se ha eliminado!!" });
        }
      });
    }
  });
}

module.exports = {
  saveNoticia,
  getNoticia,
  getNoticias,
  updateNoticia,
  deleteNoticia
};
