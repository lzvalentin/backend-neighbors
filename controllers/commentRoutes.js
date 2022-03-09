const router = require('express').Router();
const comment = require ('../models/Comment')



// Get comments
router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}); 

//create a comment




// GET single comment by id
router.get('/:id', async (req, res) => {
  try {
    const commentData = await comment.findByPk(req.params.id);
    if (!commentData) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;