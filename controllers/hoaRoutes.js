const router = require('express').Router();
const HoaAdmin= require('../models/HoaAdmin');

//Login

router.post("/login", (req, res) => {
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

  //Update a user 

  router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//   Signup

router.post('/signup', (req, res) => {

    console.log(req.body, "singup route");
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;
      
          res.json(dbUserData);
        });
      });
  });

  module.exports = router;