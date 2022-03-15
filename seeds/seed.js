const sequelize = require("../config/connection");

const { User, Pet, UserPet, PetVac, Post, UserPost, PostComment, UserComment, Comment, Payment, UserPayment} = require('../models')



const seed = async ()=>{
    await sequelize.sync({force:true})

    const users = await User.bulkCreate([
        {
            id: 1,
            first_name: "joe",
            last_name: "joe",
            username: "joejoe",
            email:"joe@joe.joe",
            password:"password",
            address: "123 Joe St. Seattle, WA",
            isAdmin: true,
            profile_pic_url: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
        },
        {
            id: 2,
            first_name: "ben",
            last_name: "ben",
            username: "benben",
            email:"ben@ben.ben",
            password:"password",
            address: "123 Ben St. Seattle, WA",
            profile_pic_url: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
        },
        {
            id: 3,
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
            UserId: "3"
        },
        {
            name: "Nutmeg",
            type: "Cat",
            bread: "Domestic Shorthair",
            color: "Tabby",
            weight: "13",
            UserId: "2"
        },
        {
            name: "Shiva",
            type: "Cat",
            bread: "Domestic Shorthair",
            color: "Tabby",
            weight: "13",
            UserId: "1"
        },

    ],{individualHooks:true})

    const userpets = await UserPet.bulkCreate([
        {
            PetId: 1,
            UserId: 3,
        },
        {
            PetId: 2,
            UserId: 2,
        },
        {
            PetId: 3,
            UserId: 1,
        },

    ],{individualHooks:true})

    const petvac = await PetVac.bulkCreate([
        {
            type: "rabbies",
            date_received: "4/1/18",
            expiration_date: "4/1/22",
            PetId: "2"
        },
        {
            type: "FVRCP",
            date_received: "4/1/18",
            expiration_date: "4/1/22", 
            PetId: "2"
        },
               
    ],{individualHooks:true})

    const posts = await Post.bulkCreate([
        {
            category: "none",
            title: "Post",
            content: "lovely community",
            UserId: "1"
            // name: "Kelin",
            // location: "123 Joe St. Seattle, WA",
        },
        {
            category: "none",
            title: "Post",
            content: "Hello !",
            UserId: "2"
        },
        {
            category: "none",
            title: "Post",
            content: "Hey there",
            UserId: "3"
        },

    ],{individualHooks:true})


    // const postcomment = await PostComment.bulkCreate([
    //     {
    //         PostId: 1,
    //         CommentId: 1,
    //     },
    //     {
    //         PostId: 1,
    //         CommentId: 2,
    //     },

    // ],{individualHooks:true})


    const comments = await Comment.bulkCreate([
        {
            title: "Hello !!",
            body: "This is my first comment !!",
            UserId: "1",
            PostId: "1",
        },
        {
            title: "Huzzah !",
            body: "I am so happy with my HOA !",
            UserId: "1",
            PostId: "3",
        },
        {
            title: "Bye Seattle !",
            body: "I am moving to Denver !",
            UserId: "3",
            PostId: "2",
        },
        {
            title: "Hello HOA Friends",
            body: "I am Ben :) ",
            UserId: "2",
            PostId: "2",
        },

    ],{individualHooks:true})
    
    const payment = await Payment.bulkCreate([
        {
            payment_date: "03/01/2022",
            balance: "2000",
            payment_amount: "100",
            payment_type: "Utils",
            UserId: "2"
        },
        {
            payment_date: "02/10/2022",
            balance: "1200",
            payment_amount: "200",
            payment_type: "Fine",
            UserId: "3"
        },


    ],{individualHooks:true})

    const userpay = await UserPayment.bulkCreate([
        {
            PaymentId: 1,
            UserId: 3,
        },
        {
            PaymentId: 2,
            UserId: 2,
        },

    ],{individualHooks:true})


    process.exit(0)
}



seed();


//      OLD     seeds


//    const admins = await HoaAdmin.bulkCreate([
//         {
//             first_name: "joe",
//             last_name: "joe",
//             username: "joejoe",
//             email:"joe@joe.joe",
//             password:"password",
//         },
//         {
//             first_name: "david",
//             last_name: "david",
//             username: "daviddav",
//             email:"david@david.david",
//             password:"password",
//         },
//         {
//             first_name: "sam",
//             last_name: "sam",
//             username: "samsam",
//             email:"sam@gmail.com",
//             password:"password",
//         },
               
//     ],{individualHooks:true})

//     const commMgr = await CommMgr.bulkCreate([
//         {
//             first_name: "kelly",
//             last_name: "kelly",
//             username: "kellykelly",
//             email:"kelly@kelly.kelly",
//             password:"password",
//         },
//         {
//             first_name: "rob",
//             last_name: "rob",
//             username: "robrob",
//             email:"rob@rob.rob",
//             password:"password",
//         },
//         {
//             first_name: "ana",
//             last_name: "ana",
//             username: "ana_ana",
//             email:"ana@gmail.com",
//             password:"password",
//         },
               
//     ],{individualHooks:true})
