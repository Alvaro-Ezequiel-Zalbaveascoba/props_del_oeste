const Houses = require("./houses");
const Users = require("./users")
const Typesofhouses = require("./typesofhouses")
const Messages = require("./messages")

Houses.belongsTo(Typesofhouses)
Messages.belongsTo(Houses, { as: "house" })
Messages.belongsTo(Users, { as: "interested" })




module.exports = { Houses, Users, Typesofhouses, Messages }; 