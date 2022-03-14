const User = require('./User');
const Pet = require('./Pet');
const PetVac = require('./PetVac');
const Post = require('./Post');
const Comment = require('./Comment_new');
const Payment = require('./Payment');


// const HoaAdmin = require('./HoaAdmin');
// const CommMgr = require('./CommMgr');



User.hasMany(Pet)
Pet.belongsToMany(User, { through: 'UserPet'})


Pet.hasMany(PetVac);
PetVac.belongsTo(Pet);


User.hasMany(Post)
Post.belongsToMany(User, { through: 'UserPost'})


Post.hasMany(Comment)
Comment.belongsToMany(Post, { through: 'Post_has_Comment'})


User.hasMany(Comment)
Comment.belongsToMany(User, { through: 'User_has_Comment'})


User.hasMany(Payment)
Payment.belongsToMany(User, { through: 'UserPayment'})





//       Duplicates     BELOW  
// User.hasMany(Comment)
// Comment.belongsTo(User)
// Comment.belongsToMany(User, { through: 'UserComment'})




module.exports = { User, Pet, PetVac, Post, Comment, Payment}

