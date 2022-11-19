import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { reset, logout } from '../features/auth/authSlice';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header className="header">
      <div className="logo">FunPost</div>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/">Feed</Link>
            </li>
            <li>
              <Link to="/dasboard">dashboard</Link>
            </li>
            <p>
              <FaUser /> Welcome {user.firstName}
            </p>
            <button className="btn" onClick={handleLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
