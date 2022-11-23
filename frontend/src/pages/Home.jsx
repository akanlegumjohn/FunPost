import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PostForm from '../components/PostForm';
import Spinner from '../components/Spinner';
import { getAllPosts, reset } from '../features/posts/postSlice';
import PostContainer from '../components/PostContainer';
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getAllPosts());
    return () => dispatch(reset());
  }, [dispatch, navigate, user]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      {user && <PostForm />}
      <main className="main">
        {posts.length > 0 ? (
          <PostContainer posts={posts} />
        ) : (
          <h4>There are no posts</h4>
        )}
        <hr />
      </main>
    </>
  );
};

export default Home;
