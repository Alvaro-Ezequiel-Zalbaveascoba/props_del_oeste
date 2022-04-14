const express = require("express");
const passport = require("passport");
const router = express.Router();

router.post("/in", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});
router.post("/out", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  res.send(req.user)
})

module.exports = router;
