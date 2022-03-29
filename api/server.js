const express = require("express");
const app = express();
const db = require("./db");
const morgan = require("morgan");
const cors = require("cors");
//const models=require("./models/index")
const routes = require("../api/routes/index");

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const PORT = 3001;

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://locahost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
