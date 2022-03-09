const router = require('express').Router();
const Pet = require('../../models/Pet');

// const connection = require("../config/connection.js");

router.get("/", async (req, res) => {
  try {
    // Find all pets
    const petData = await Pet.findAll();
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

  // Create a new pet

  router.post('/', async (req, res) => {
    try {
      const petData = await Pet.create(req.body);
      res.status(200).json(petData);
    } catch (err) {
      res.status(400).json(err);
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
 

  // deletes pet based on id
  router.delete('/:id', (req, res) => {
    Pet.findByPk(req.params.petid).then(foundPet => {
      if (!foundPet) {
        return res.status(404).json({ msg: "no such pet!" });
      } else {
        foundPet.removeTag(req.params.id);
        res.json(foundPet);
      }
    });
  });
  
  module.exports = router;
  

