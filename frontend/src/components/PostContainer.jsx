import Post from './Post';

const PostContainer = ({ posts }) => {
  return (
    <section className="posts--content">
      {posts.map((post) => (
        <div className="posts" key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </section>
  );
};

export default PostContainer;
