const sequelize = require("../config/connection");

const {User, HoaAdmin, CommMgr, Pet, PetVac, Post, Comment} = require('../models')



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
            profile_pic_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
        },
        {
            first_name: "ben",
            last_name: "ben",
            username: "benben",
            email:"ben@ben.ben",
            password:"password",
            address: "123 Ben St. Seattle, WA",
            profile_pic_url: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        },
        {
            first_name: "Rusell",
            last_name: "Wilson",
            username: "Bye_Russ",
            email:"russ@wilson.com",
            password:"password",
            address: "Denver, CO",
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

    const comments = await Comment.bulkCreate([
        {
            title: "Hello !!",
            body: "This is my first comment !!",
            UserId: "1"
        },
        {
            title: "Huzzah !",
            body: "I am so happy with my HOA !",
            UserId: "1"
        },
        {
            title: "Bye Seattle !",
            body: "I am moving to Denver !",
            UserId: "3"
        },
        {
            title: "Hello HOA Friends",
            body: "I am Ben :) ",
            UserId: "2"
        },

    ],{individualHooks:true})


    // const posts = await Post.bulkCreate([
    //     {
    //         userId: "Fergus",
    //         name: "Cat",
    //         title: "Domestic Shorthair",
    //         content: "Torby",
    //         weight: "17",
    //         UserId: "2"
    //     },
    //     {
    //         name: "Nutmeg",
    //         type: "Cat",
    //         bread: "Domestic Shorthair",
    //         color: "Tabby",
    //         weight: "13",
    //         UserId: "2"
    //     },

    // ],{individualHooks:true})
    



    
    process.exit(0)
}

seed();