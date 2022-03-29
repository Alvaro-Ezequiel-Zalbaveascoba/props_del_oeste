const Sequelize = require("sequelize");
const db = new Sequelize("props_del_oeste", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
