const express = require("express");
const passport = require("passport");
const router = express.Router();



router.post("/", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});
router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});
module.exports = router;
