// const router = require('express').Router();
// const User = require('../models/User');
// const {
//   getSinglePost,
//   getPosts,
//   createPost,
// } = require('../../controllers/postController');

// router.route('/').get(getPosts).post(createPost);

// router.route('/:postId').get(getSinglePost);

// module.exports = router;


const router = require('express').Router();
const Post = require('../models/Post');


// get single post
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    if (!postData) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(err);
  }
});


// create post
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true
    });
    if (!postData[0]) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
