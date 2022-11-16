const express = require('express');
const {
  updatePost,
  getPosts,
  getMyPosts,
  deletePost,
  createPost,
} = require('../controllers/postController');

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/me', getMyPosts);
router.put('/id', updatePost);
router.delete('/id', deletePost);

module.exports = router;
