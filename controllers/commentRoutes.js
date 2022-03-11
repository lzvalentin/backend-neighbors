const router = require('express').Router();
// const Comment = require ('../models/Comment')
const { User, Comment } = require("../models");



// Get comments
router.get('/', (req, res) => {
  Comment.findAll({
    include: [User]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 


//create a comment
router.post('/', async (req, res) => {
<<<<<<< HEAD
    try {
      const petData = await Pet.create(req.body);
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



// GET single comment by id
router.get('/:id', async (req, res) => {
=======
>>>>>>> dev
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// GET single comment by id
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    if (!commentData) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});



// GET ALL comments from a user
router.get('/usercomment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{
        model: User,
        where: {id:req.params.id}
      }]

    })
    if (!commentData) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;