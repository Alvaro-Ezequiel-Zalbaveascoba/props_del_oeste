const express = require("express");
const housesRouter = require("./houses");
const usersRouter = require("./users");
const typesOfHouses= require("./typesOfHouses")

const router = express.Router();

router.use("/houses", housesRouter);
router.use("/users", usersRouter);
router.use("/types",typesOfHouses)

module.exports = router;
