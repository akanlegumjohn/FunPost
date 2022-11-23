import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostContainer from '../components/PostContainer';

import { getMyPosts, reset } from '../features/posts/postSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const { myPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getMyPosts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
  return (
    <section>
      {myPosts.length > 0 ? (
        <PostContainer posts={myPosts} />
      ) : (
        <h4>There are no posts</h4>
      )}
    </section>
  );
};

export default Dashboard;
