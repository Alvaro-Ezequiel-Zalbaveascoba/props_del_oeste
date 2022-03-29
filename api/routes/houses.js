const express = require("express");
const router = express.Router();
const { Houses } = require("../models/index");

//trae todas las casas
router.get("/", (req, res) => {
  Houses.findAll().then((house) => {
    res.send(house);
  });
  /* console.log("GET DE HOUSE");
  res.sendStatus(200) */
});
//crea una casa
router.post("/", (req, res) => {
  Houses.create(req.body).then((house) => {
    res.status(201).send(house);
  });
  /* console.log("POST DE HOUSE");
  res.sendStatus(200) */
});
//Busca una casa por nombre
router.get("/find/:id", (req, res) => {
  Houses.findOne({ where: { id: req.params.id } }).then((house) => {
    res.status(200).send(house);
  });
});
//Borra una casa
router.delete("/delete/:id", (req, res) => {
  Houses.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});
//Borra todas las casas
router.delete("/delete", (req, res) => {
  Houses.destroy({ where: {} }).then(() => {
    res.sendStatus(202);
  });
});

module.exports = router;
