const express = require("express");
const housesRouter = require("./houses");
const usersRouter = require("./users");

const router = express.Router();

router.use("/houses", housesRouter);
router.use("/users", usersRouter);

module.exports = router;
