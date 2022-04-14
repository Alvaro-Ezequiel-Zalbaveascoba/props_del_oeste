const S = require("sequelize");
const db = require("../db");

class Messages extends S.Model {
   
  }
  
  Messages.init(
    {
      name: {
        type: S.STRING,
      },
      lastName: {
        type: S.STRING,
      },
      email: {
        type: S.STRING,
      },
      movil: {
        type: S.BIGINT,
      },
      message: {
        type: S.TEXT,
      },
     
      
    },
    {
      sequelize: db,
      timestamps: false,
      modelName: "messages",
    }
  );
  
  
  module.exports = Messages;