import Post from './Post';

const PostContainer = ({ posts }) => {
  return (
    <section className="posts--content">
      {posts.map((post) => (
        <div className="posts">
          <Post key={posts._id} post={post} />
        </div>
      ))}
    </section>
  );
};

export default PostContainer;
