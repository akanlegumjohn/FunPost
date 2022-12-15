import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import Avatar from './avatar/Avatar';
import FollowersDisplay from './FollowersDisplay';

const OpenNavbar = ({ handleLogout, handleClick }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="expanded--nav">
      <div className="nav--close--btn">
        <AiOutlineClose onClick={handleClick} />
      </div>
      <nav className="nav">
        <div className="logo">FunPost</div>

        <>
          <div className="profile--details">
            <Avatar firstName={user.firstName} lastName={user.lastName} />
            <FollowersDisplay />
          </div>
          <div>
            <Link to="/">Feed</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <button className="logout--btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      </nav>
    </div>
  );
};

export default OpenNavbar;
