const express = require('express');
const {
  updatePost,
  getPosts,
  getMyPosts,
  deletePost,
  createPost,
  incrementLikes,
  incrementDislikes,
} = require('../controllers/postController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/me', protect, getMyPosts);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.patch('/like/:id', incrementLikes);
router.patch('/dislike/:id', incrementDislikes);

module.exports = router;
