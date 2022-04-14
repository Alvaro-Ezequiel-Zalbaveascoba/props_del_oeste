const express = require("express");
const housesRouter = require("./houses");
const usersRouter = require("./users");
const typesOfHousesRouter = require("./typesOfHouses");
const logRouter = require("./log");
const messagesRouter = require("./messages")

const router = express.Router();

router.use("/log", logRouter);
router.use("/houses", housesRouter);
router.use("/users", usersRouter);
router.use("/types", typesOfHousesRouter);
router.use("/messages", messagesRouter)

module.exports = router;
    