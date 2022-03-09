const router = require('express').Router();
const User = require('../models/User');
const {
  getSinglePost,
  getPosts,
  createPost,
} = require('../../controllers/postController');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost);

module.exports = router;
