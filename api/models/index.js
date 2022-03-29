const Houses=require("./houses");
const Users=require("./users")
const TypesOfHouses=require("./typesOfHouse")

Houses.belongsTo(Users,{as:"tenant"})
Houses.belongsTo(TypesOfHouses)



module.exports={Houses,Users,TypesOfHouses}; 