const sequelize = require("../config/connection");

const User = require("../models/User")

// const {User,Tank,Fish} = require("../models")



const seed = async ()=>{
    await sequelize.sync({force:true})
    const users = await User.bulkCreate([
        {
            first_name: "joe",
            last_name: "joe",
            username: "joejoe",
            email:"joe@joe.joe",
            password:"password",
            address: "123 Joe St. Seattle, WA",
        },
        {
            first_name: "ben",
            last_name: "ben",
            username: "benben",
            email:"ben@ben.ben",
            password:"password",
            address: "123 Ben St. Seattle, WA",
        },
 
       
    ],{individualHooks:true})
    console.log(users);
    




    process.exit(0)
}

seed();