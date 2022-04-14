const S = require("sequelize");
const db = require("../db");

class Houses extends S.Model {}

Houses.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
    },
    price: {
      type: S.INTEGER,
    },
    ubication: {
      type: S.STRING,
    },
    img: {
      type: S.TEXT,
    },
    available: {
      type: S.BOOLEAN,
    },
    truncate:{
      type: S.VIRTUAL,
      get(){
          return `${this.description.slice(0,35)}...`
      }
  }
  },
  {
    sequelize: db,
    timestamps: false,
    modelName: "houses",
  }
);

module.exports = Houses;
