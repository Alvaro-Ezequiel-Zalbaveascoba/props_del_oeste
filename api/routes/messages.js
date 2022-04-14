const express = require("express");
const router = express.Router();
const { Messages } = require("../models/index");

//trae todos los usuarios
router.get("/", (req, res) => {
  Messages.findAll().then((message) => {
    res.send(message);
  });
});
//crea un usuario
router.post("/", (req, res) => {
  Messages.create(req.body).then((message) => {
    res.status(201).send(message);
  });
});
//Busca un usuario por id
router.get("/find/:id", (req, res) => {
  Messages.findOne({ where: { id: req.params.id } }).then((message) => {
    res.status(200).send(message);
  });
});
//Borra un usuario
router.delete("/delete/:id", (req, res) => {
  Messages.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});

module.exports = router;