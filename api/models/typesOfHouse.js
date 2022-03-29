const S = require("sequelize");
const db = require("../db");

class TypesOfHouses extends S.Model {}

TypesOfHouses.init(
  {
    name: {
      type: S.STRING,
    },
    
  },
  {
    sequelize: db,
    timestamps: false,
    modelName: "typesOfHouses",
  }
);

module.exports = TypesOfHouses;