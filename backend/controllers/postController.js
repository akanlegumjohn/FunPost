const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

//@desc     create new post
//@access   private
//@route    /api/posts
//@method   post
const createPost = asyncHandler(async (req, res) => {
  const {text} = req.body
  if(!text){
    res.status(400).json({msg:'Please add text'})
  }
  const post = await Post.create({text})
  res.status(200).json({ msg: 'Created a post' });
});

//@desc     get all posts
//@access   public
//@route    /api/posts
//@method   get
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get all posts' });
});

//@desc     get all posts
//@access   private
//@route    /api/posts/:me
//@method   get
const getMyPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get all private posts' });
});

//@desc     update a post
//@access   private
//@route    /api/posts/:id
//@method   put
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update a post with an id of ${req.params.id}` });
});

//@desc     delete a post
//@access   private
//@route    /api/posts/:id
//@method   delete
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete a post with an id of ${req.params.id}` });
});

module.exports = { getMyPosts, getPosts, deletePost, updatePost, createPost };
