const sequelize = require("../config/connection");

const {User, HoaAdmin, CommMgr, Pet, PetVac} = require('../models')



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

    const pets = await Pet.bulkCreate([
        {
            name: "Fergus",
            type: "Cat",
            bread: "Domestic Shorthair",
            color: "Torby",
            weight: "17",
            UserId: "2"
        },
        {
            name: "Nutmeg",
            type: "Cat",
            bread: "Domestic Shorthair",
            color: "Tabby",
            weight: "13",
            UserId: "2"
        },

    ],{individualHooks:true})
    
    process.exit(0)
}

seed();