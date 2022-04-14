const express = require("express");
const router = express.Router();
const { Users } = require("../models/index");

//trae todos los usuarios
router.get("/", (req, res) => {
  Users.findAll().then((user) => {
    res.send(user);
  });
  /* console.log("GET DE USERS");
  res.sendStatus(200); */
});
//crea un usuario
router.post("/", (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send(user);
  });
  /* console.log("POST DE USERS");
  res.sendStatus(200); */
});
//Busca un usuario por id
router.get("/find/:id", (req, res) => {
  Users.findOne({ where: { id: req.params.id } }).then((user) => {
    res.status(200).send(user);
  });
});
router.put('/edit/:id',(req, res) => {
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(([user]) => {
      res.send(user[0]);
    })
})
//Borra un usuario
router.delete("/delete/:id", (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});

module.exports = router;
