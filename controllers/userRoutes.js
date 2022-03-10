const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// GET all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(err);
  }
});



// GET one user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});





// POST Login
router.post("/login", (req, res) => {
<<<<<<< HEAD
<<<<<<< HEAD:controllers/user.js
    // User.findOne({where:{email:req.body.email}}).then(dbUser=>{
    //     if(!dbUser){
    //         return res.status(403).send("invalid credentials")
    //     } 
    //     if (bcrypt.compareSync(req.body.password,dbUser.password)) {
    //         const token = jwt.sign(
    //           {
    //             email: dbUser.email,
    //             id: dbUser.id
    //           },
    //           process.env.JWT_SECRET,
    //           {
    //             expiresIn: "2h"
    //           }
    //         );
    //         res.json({ 
    //             token: token, 
    //             user: dbUser
    //         });
    //       } else {
    //         return res.status(403).send("invalid credentials");
    //       }
    // }).catch(err=>{
    //     console.log(err)
    //     res.status(500).json({msg:"an error occured",err})
    // })
});


=======
  User.findOne({
    where:{
        email:req.body.email
    }
}).then(foundUser=>{
    if(!foundUser){
        return res.status(401).json({msg:"wrong username/password buddy"})
    }
    if(bcrypt.compareSync(req.body.password,foundUser.password)){
        req.session.user = {
            id:foundUser.id,
            email:foundUser.email,
            username:foundUser.username
        }
        return res.json(foundUser);
    } else {
        return res.status(401).json({msg:"wrong username/password buddy"})
    }
})
})

   
>>>>>>> dev:controllers/userRoutes.js
router.get("/gettokendata", (req, res) => {
  // console.log(req.headers);
  // const token = req.headers?.authorization?.split(" ").pop();
  // console.log(token);
  // //  res.json(req.headers);
  // jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(403).json({ msg: "invalid credentials", err });
  //   } else {
  //     User.findByPk(data.id).then(userData=>{
  //         res.json(userData);
  //     })
  //   }
  // });
=======
  User.findOne({where:{email:req.body.email}}).then(dbUser=>{
      if(!dbUser){
          return res.status(403).send("invalid credentials")
      } 
      if (bcrypt.compareSync(req.body.password,dbUser.password)) {
          const token = jwt.sign(
            {
              email: dbUser.email,
              id: dbUser.id
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
>>>>>>> dev
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



// GET token
router.get("/gettokendata", (req, res) => {
  console.log(req.headers);
  const token = req.headers?.authorization?.split(" ").pop();
  console.log(token);
  //  res.json(req.headers);
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) {
      console.log(err);
      res.status(403).json({ msg: "invalid credentials", err });
    } else {
      User.findByPk(data.id).then(userData=>{
          res.json(userData);
      })
    }
  });
});


module.exports = router;