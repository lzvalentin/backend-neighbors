// const {User, HoaAdmin, CommMgr, Pet, PetVac} = require('../models')

const User = require('./User');
const HoaAdmin = require('./HoaAdmin');
const CommMgr = require('./CommMgr');
const Pet = require('./Pet');
const PetVac = require('./PetVac');




User.hasMany(Pet)
Pet.belongsToMany(User, { through: 'UserPet'})


Pet.hasMany(PetVac);
PetVac.belongsTo(Pet);



module.exports = { User, HoaAdmin, CommMgr, Pet, PetVac}
