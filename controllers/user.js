const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.get("/", async (req, res) => {
  try {
    // Find all users
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





// Need to implement routes below 

router.post("/login", (req, res) => {
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
});


// Need to implement routes Above 



module.exports = router;