import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { reset, logout } from '../features/auth/authSlice';
import Avatar from './Avatar';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };
  return (
    user && (
      <nav className="nav">
        <div className="logo">FunPost</div>
        <>
          <div className="profile--details">
            <div>
              <Avatar />
            </div>
            <p>15K Followers 950 Following</p>
          </div>
          <div>
            <Link to="/">Feed</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          <button className="btn" onClick={handleLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        </>
      </nav>
    )
  );
};

export default Navbar;
