import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Avatar from '../avatar/Avatar';
import './compressedNavbar.css';
const CompressedNavbar = ({ handleLogout, handleClick }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="compressed--nav">
      <nav className="nav">
        <div className="bars">
          <FaBars onClick={handleClick} />
        </div>
        <div className="logo">FunPost</div>
        <>
          <Avatar firstName={user.firstName} lastName={user.lastName} />
          <div>
            <Link to="/">
              <AiOutlineHome />
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <AiOutlineUser />
            </Link>
          </div>
          <Link>
            <FaSignOutAlt onClick={handleLogout} />
          </Link>
        </>
      </nav>
    </div>
  );
};

export default CompressedNavbar;
