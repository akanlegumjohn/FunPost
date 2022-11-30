import { useDispatch, useSelector } from 'react-redux';

import { deletePost, postLike } from '../features/posts/postSlice';
import { postTime } from '../utils/postTime';
import Avatar from './Avatar';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="post">
      <Avatar firstName={post.firstName} lastName={post.lastName} />
      <div>
        <span className="name">
          {`${post.firstName} ${post.lastName}`}.
          <span>{postTime(new Date(post.createdAt))}</span>
        </span>
        <p className="post--text">{post.text}</p>

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
    </div>
  );
};

export default Post;
