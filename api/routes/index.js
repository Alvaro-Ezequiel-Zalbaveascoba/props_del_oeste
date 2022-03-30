const express = require("express");
const housesRouter = require("./houses");
const usersRouter = require("./users");
const typesOfHousesRouter = require("./typesOfHouses");
const loginRouter = require("./login");

const router = express.Router();

router.use("/login", loginRouter);
router.use("/houses", housesRouter);
router.use("/users", usersRouter);
router.use("/types", typesOfHousesRouter);

module.exports = router;
