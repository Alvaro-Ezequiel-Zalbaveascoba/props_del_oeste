const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
//const models=require("./models/index")
const routes = require("../api/routes/index");
const User= require("./models/users");
const db = require("./db");

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({ secret: "delOeste", resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", routes);

const PORT = 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://locahost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
