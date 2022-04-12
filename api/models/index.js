const Houses=require("./houses");
const Users=require("./users")
const Typesofhouses=require("./typesofhouses")

Houses.belongsTo(Users,{as:"tenant"})
Houses.belongsTo(Typesofhouses)



module.exports={Houses,Users,Typesofhouses}; 