const express = require("express");
const router = express.Router();
const { Typesofhouses } = require("../models/index");

//trae todas las casas
router.get("/", (req, res) => {
  Typesofhouses.findAll().then((type) => {
    res.send(type);
  });
});
//crea una casa
router.post("/", (req, res) => {
  Typesofhouses.create(req.body).then((type) => {
    res.status(201).send(type);
  });
});
//Busca una casa por id
router.get("/find/:id", (req, res) => {
  Typesofhouses.findOne({ where: { id: req.params.id } }).then((type) => {
    res.status(200).send(type);
  });
});
//editar casa por id
router.put('/edit/:id',(req, res) => {
  Typesofhouses.update(req.body, {
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
  Typesofhouses.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});


module.exports = router;
