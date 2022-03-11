const sequelize = require("../config/connection");

const {User, Post, HoaAdmin, CommMgr, Pet, PetVac, Comment} = require('../models')



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
            email:"russ@gmail.com",
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
            title: "Hello",
            body: "Comment here",
            UserId: "2"
        },
        {
            title: "Hi",
            body: "Really good",
            UserId: "3"
        },

    ],{individualHooks:true})

   const admins = await HoaAdmin.bulkCreate([
        {
            first_name: "joe",
            last_name: "joe",
            username: "joejoe",
            email:"joe@joe.joe",
            password:"password",
        },
        {
            first_name: "david",
            last_name: "david",
            username: "daviddav",
            email:"david@david.david",
            password:"password",
        },
        {
            first_name: "sam",
            last_name: "sam",
            username: "samsam",
            email:"sam@gmail.com",
            password:"password",
        },
               
    ],{individualHooks:true})

    const commMgr = await CommMgr.bulkCreate([
        {
            first_name: "kelly",
            last_name: "kelly",
            username: "kellykelly",
            email:"kelly@kelly.kelly",
            password:"password",
        },
        {
            first_name: "rob",
            last_name: "rob",
            username: "robrob",
            email:"rob@rob.rob",
            password:"password",
        },
        {
            first_name: "ana",
            last_name: "ana",
            username: "ana_ana",
            email:"ana@gmail.com",
            password:"password",
        },
               
    ],{individualHooks:true})

    const posts = await Post.bulkCreate([
        {
            name: "Kelin",
            title: "Post",
            content: "lovely community",
            location: "123 Joe St. Seattle, WA",
            category: "none",
            UserId: "1"
        },
        {
            name: "Raddy",
            title: "Post",
            content: "lovely community",
            location: "123 Joe St. Seattle, WA",
            category: "none",
            UserId: "2"
        },

    ],{individualHooks:true})

    // const petvac = await PetVac.bulkCreate([
    //     {
    //         type: "cat",
    //         date_received: "",
    //         expiration_date: "",
    //     },
    //     {
    //         type: "dog",
    //         date_received: "",
    //         expiration_date: "", 
    //     },
               
    // ],{individualHooks:true})



    
    process.exit(0)
}

seed();