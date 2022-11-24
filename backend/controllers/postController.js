const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

//@desc     create new post
//@access   private
//@route    /api/posts
//@method   post
const createPost = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400).json({ msg: 'Please add text' });
  }
  const post = await Post.create({
    text,
    user: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
  });
  res.status(200).json(post);
});

//@desc     get only a user's post
//@access   private
//@route    /api/posts/me
//@method   get
const getMyPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });

  res.status(200).json(posts);
});

//@desc     get all posts
//@access   public
//@route    /api/posts
//@method   get
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

//@desc     update a post
//@access   private
//@route    /api/posts/:id
//@method   put
const updatePost = asyncHandler(async (req, res) => {
  const { text } = req.body;
  const post = await Post.findById(req.params.id);
  if (!text) {
    return res.status(400).send('Please add text');
  }
  if (!req.user) {
    return res.status(400).json({ msg: 'User does not exist' });
  }
  if (!post) {
    return res.status(400).json({ msg: 'Post does not exist' });
  }
  if (post.user.toString() !== req.user.id) {
    return res.status(400).json({ msg: 'You are not authorized' });
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, text, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

//@desc     delete a post
//@access   private
//@route    /api/posts/:id
//@method   delete
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!req.user) {
    return res.status(400).json({ msg: 'User does not exist' });
  }
  if (!post) {
    return res.status(400).json({ msg: 'Post does not exist' });
  }
  if (post.user.toString() !== req.user.id) {
    return res.status(400).json({ msg: 'You are not authorized' });
  }

  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedPost);
});

//@desc     increment likes
//@access   private
//@route    /api/posts/like/:id
//@method   post
const incrementLikes = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true }
  );
  res.status(200).json(post);
});

//@desc     increment dislikes
//@access   private
//@route    /api/posts/dislike/:id
//@method   post
const incrementDislikes = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { $inc: { dislikes: 1 } },
    { new: true }
  );
  res.status(200).json(post);
});

module.exports = {
  getMyPosts,
  getPosts,
  deletePost,
  updatePost,
  createPost,
  incrementLikes,
  incrementDislikes,
};
