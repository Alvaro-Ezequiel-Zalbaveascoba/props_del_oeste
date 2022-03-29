const Houses=require("./Houses");
const Users=require("./users")

Houses.belongsTo(Users,{as:"tenant"})

module.exports={Houses,Users}; 