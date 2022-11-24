import { useSelector } from 'react-redux';

const FollowersDisplay = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="followers">
      <p>{`${user.followers} ${
        user.followers === 1 ? ` Follower ` : `Followers `
      }${user.following}  ${
        user.follow === 1 ? ` Follower ` : `Followers `
      }`}</p>
    </div>
  );
};

export default FollowersDisplay;
