const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
<<<<<<< HEAD
// const {User, HoaAdmin, CommMgr, Pet, PetVac} = require('../models')
=======
>>>>>>> dev
const HoaAdmin = require('./HoaAdmin');
const CommMgr = require('./CommMgr');
const Pet = require('./Pet');
const PetVac = require('./PetVac');


<<<<<<< HEAD
=======
// const {User, HoaAdmin, CommMgr, Pet, PetVac} = require('../models')


>>>>>>> dev
User.hasMany(Pet)
Pet.belongsToMany(User, { through: 'UserPet'})


Pet.hasMany(PetVac);
PetVac.belongsTo(Pet);



<<<<<<< HEAD
module.exports = { User, HoaAdmin, CommMgr, Pet, PetVac, User, Comment, Post}
=======
module.exports = { User, HoaAdmin, CommMgr, Pet, PetVac, Post, Comment}
>>>>>>> dev
