import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createPost } from '../features/posts/postSlice';

const PostForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

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
    <section className="post--form">
      <form onSubmit={handleSubmit}>
        <div className="form--group">
          <textarea
            cols="30"
            rows="5"
            onChange={(e) => setText(e.target.value)}
          >
            What are you thinking about...
          </textarea>
        </div>
        <button className="btn post--btn">post</button>
      </form>
    </section>
  );
};

export default PostForm;
