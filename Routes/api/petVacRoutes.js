const router = require('express').Router();
const PetVac = require('../../models/PetVac');

// update pet

router.put('/:id', async (req, res) => {
    try {
      const petData = await Pet.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!petData[0]) {
        res.status(404).json({ message: 'No pets with this id!' });
        return;
      }
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

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

   // Get pets by id
   router.get("/:id", (req, res) => {
    Pet.findByPk(req.params.id,{
      include: []
    })
      .then(dbPet => {
        res.json(dbPet);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "uh oh!", err });
      });
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

  modeule.exports = router;