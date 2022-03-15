const router = require('express').Router();
const { User, PetVac, UserPet } = require('../models');
const Pet = require('../models/Pet');

// const connection = require("../config/connection.js");

router.get("/", async (req, res) => {
  try {
    // Find all pets
    const petData = await Pet.findAll({
      include: [PetVac, User]
    });
    if (!petData) {
      res.status(404).json({ message: 'No pets with this id!' });
      return;
    }
    res.status(200).json(petData);
  } catch (error) {
    res.status(500).json(err);
  }
});

  // Get pets by id
  router.get("/:id", async (req, res) => {
    try {
      const petData = await Pet.findByPk(req.params.id);
      if (!petData) {
        res.status(404).json({ message: 'No pet with this id!' });
        return;
      }
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // Create a new pet
  router.post('/', async (req, res) => {
    try {
      const petData = await Pet.create(req.body);
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
 

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
 

  // TODO FIX delete pet based on id


  // router.delete('/:id', (req, res) => {
  //   Pet.findByPk(req.params.id).then(foundPet => {
  //     if (!foundPet) {
  //       return res.status(404).json({ msg: "no such pet!" });
  //     } else {
  //       foundPet.removeTag(req.params.id);
  //       res.json(foundPet);
  //     }
  //   });
  // });
  
  module.exports = router;
  

