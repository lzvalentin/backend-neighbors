const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


const User = require('./User');
const Pet = require('./Pet');
const PetVac = require('./PetVac');
const Post = require('./Post');
const Comment = require('./Comment_new');
const Payment = require('./Payment');


// const HoaAdmin = require('./HoaAdmin');
// const CommMgr = require('./CommMgr');


const UserPet = sequelize.define('UserPet', {})
const UserPost = sequelize.define('UserPost', {})
const PostComment = sequelize.define('PostComment', {})
const UserComment = sequelize.define('UserComment', {})
const UserPayment = sequelize.define('UserPayment', {})


User.hasMany(Pet)
Pet.belongsToMany(User, { through: UserPet})


Pet.hasMany(PetVac);
PetVac.belongsTo(Pet);


User.hasMany(Post)
Post.belongsToMany(User, { through: UserPost})


Post.hasMany(Comment)
Comment.belongsToMany(Post, { through: PostComment})


User.hasMany(Comment)
Comment.belongsToMany(User, { through: UserComment})


User.hasMany(Payment)
Payment.belongsToMany(User, { through: UserPayment})





//       Duplicates     BELOW  
// User.hasMany(Comment)
// Comment.belongsTo(User)
// Comment.belongsToMany(User, { through: 'UserComment'})




module.exports = { User, Pet, UserPet, PetVac, Post, UserPost, PostComment, UserComment, Comment, Payment, UserPayment}

