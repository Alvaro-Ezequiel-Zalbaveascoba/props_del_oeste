const express = require("express");
const router = express.Router();
const { TypesOfHouses } = require("../models/index");

//trae todas las casas
router.get("/", (req, res) => {
  TypesOfHouses.findAll().then((type) => {
    res.send(type);
  });
  /* console.log("GET DE HOUSE");
  res.sendStatus(200) */
});
//crea una casa
router.post("/", (req, res) => {
  TypesOfHouses.create(req.body).then((type) => {
    res.status(201).send(type);
  });
  /* console.log("POST DE HOUSE");
  res.sendStatus(200) */
});
//Busca una casa por id
router.get("/find/:id", (req, res) => {
  TypesOfHouses.findOne({ where: { id: req.params.id } }).then((type) => {
    res.status(200).send(type);
  });
});
//editar casa por id
router.put('/edit/:id',(req, res) => {
  TypesOfHouses.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([type]) => {
      res.send(type[0]);
    })
})



//Borra una casa
router.delete("/delete/:id", (req, res) => {
  TypesOfHouses.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});


module.exports = router;
