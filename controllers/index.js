const router = require('express').Router();

const jwtAuthMid = require("../utlis/tokenAuth");
const {User} = require('../models');


const userRoutes = require('./userRoutes');
const petRoutes = require('./petRoutes');
const petVacRoutes = require('./petVacRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const paymentRoutes = require('./paymentRoutes');
// const hoaRoutes = require('./hoaRoutes');
// const commMgrRoutes = require('./commMgrRoutes');


router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/petVac', petVacRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/payments', paymentRoutes);
// router.use('/hoa', hoaRoutes);
// router.use('/commMgr', commMgrRoutes);




//    secret   club 
router.get("/secretclub", jwtAuthMid, (req, res) => {

    User.findOne({
      where: {
        id:req.user
        // email:req.user.email
      }
    })
      .then(user => {
        return res.json({ msg: `Welcome to the club, ${user.email}!` });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  });
  


module.exports = router;
