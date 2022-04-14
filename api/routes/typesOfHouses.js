const express = require("express");
const router = express.Router();
const { Typesofhouses } = require("../models/index");

//trae todas los tipos de casas
router.get("/", (req, res) => {
  Typesofhouses.findAll().then((type) => {
    res.send(type);
  });
});
//crea un tipo casa
router.post("/", (req, res) => {
  Typesofhouses.create(req.body).then((type) => {
    res.status(201).send(type);
  });
});
//Busca un tipo casa por id
router.get("/find/:id", (req, res) => {
  Typesofhouses.findOne({ where: { id: req.params.id } }).then((type) => {
    res.status(200).send(type);
  });
});
//editar tipo de casa por id
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



//Borra un tipo de casa
router.delete("/delete/:id", (req, res) => {
  Typesofhouses.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});


module.exports = router;
