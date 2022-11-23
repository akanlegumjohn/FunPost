import { useDispatch, useSelector } from 'react-redux';

import { deletePost, postLike } from '../features/posts/postSlice';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="post">
      <h2>{post.text}</h2>
      <div>{new Date(post.createdAt).toLocaleString('en-US')}</div>
      <button onClick={() => dispatch(postLike(post._id))}>
        Likes:{post.likes}
      </button>
      {user.id === post.user && (
        <button
          onClick={() => dispatch(deletePost(post._id))}
          className="close"
        >
          X
        </button>
      )}
    </div>
  );
};

export default Post;
