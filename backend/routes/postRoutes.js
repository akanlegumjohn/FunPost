const express = require('express');
const {
  updatePost,
  getPosts,
  getMyPosts,
  deletePost,
  createPost,
  incrementLikes,
  decrementLikes,
} = require('../controllers/postController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/me', protect, getMyPosts);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.post('/like/:id', protect, incrementLikes);
router.post('/dislike/:id', protect, decrementLikes);

module.exports = router;
