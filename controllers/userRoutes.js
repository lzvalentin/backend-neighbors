const express = require('express');
const router = express.Router();
const {User, Pet, Comment, Post, Payment} = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtAuthMid = require("../utlis/tokenAuth.js");


// GET all users  AND  their comments
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Comment, Pet, Post, Payment]
    });
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(err);
  }
});





// POST Login
router.post("/login", (req, res) => {
  User.findOne({
    where:{
      email:req.body.email
    }
  
  
  }).then(dbUser=>{
      if(!dbUser){
          return res.status(403).send("invalid credentials")
      } 
      if (bcrypt.compareSync(req.body.password,dbUser.password)) {
          const token = jwt.sign(
            {
              userId: dbUser.id
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "2h"
            }
          );
          res.json({ 
              token: token, 
              user: dbUser
          });
        } else {
          return res.status(403).send("invalid credentials");
        }
  }).catch(err=>{
      console.log(err)
      res.status(500).json({msg:"an error occured",err})
  })
});




// POST New User
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/profile",jwtAuthMid,async (req,res)=>{
  try {
      const me = await User.findOne({
          where:{
              id:req.user
          },
          include:[Comment, Pet, Post, Payment]
      })
      res.json(me);
      // console.log(me)
  } catch(err){
      console.log(err);
      res.status(500).json({err})
  }
})




module.exports = router;