const S = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Users.init(
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
    password: {
      type: S.STRING,
    },
    salt: {
      type: S.STRING,
    },
    admin: {
      type: S.BOOLEAN,
    },
    fullname: {
      type: S.VIRTUAL,
      get() {
        return `${this.name} ${this.lastName}`;
      },
    },
  },
  {
    sequelize: db,
    timestamps: false,
    modelName: "users",
  }
);

Users.beforeCreate(async (users) => {
  const salt = await bcrypt.genSalt(16);
  users.salt = salt;
  const hash = await users.hash(users.password, salt);
  users.password = hash;
});

module.exports = Users;
