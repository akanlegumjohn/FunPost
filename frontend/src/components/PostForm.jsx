import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createPost } from '../features/posts/postSlice';
import Avatar from './avatar/Avatar';

const PostForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || text === '') {
      toast.warning('Please add text');
    } else {
      dispatch(createPost({ text }));
      setText('');
    }
  };
  return (
    <section className="post--form--container">
      <form onSubmit={handleSubmit}>
        <div className="post--form">
          <div className="post--form--avatar">
            <Avatar firstName={user.firstName} lastName={user.lastName} />
          </div>
          <div>
            <textarea
              type="text"
              onChange={(e) => setText(e.target.value)}
              placeholder="Post what is on your mind..."
            />
          </div>
        </div>
        <div>
          <button className="btn post--btn">post</button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;
