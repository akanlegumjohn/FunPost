import axios from 'axios';

const API_URL = 'api/posts/';

const createPost = async (postData, token) => {
  //The config is sent to the backend for authorization using the bearer token
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};
const getMyPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}me`, config);
  return response.data;
};

const getAllPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deletePost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(`${API_URL}like/${id}`);

  const response = await axios.delete(`${API_URL}${id}`, config);
  return response.data;
};

const postLike = async (id) => {
  console.log(id);
  const response = await axios.patch(`${API_URL}like/${id}`);
  return response.data;
};

const postService = {
  createPost,
  getAllPosts,
  getMyPosts,
  deletePost,
  postLike,
};
export default postService;
