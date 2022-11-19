import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">FunPost</div>
      <ul>
        <li>
          <Link to="/">Feed</Link>
        </li>
        <li>
          <Link to="/dasboard">dasboard</Link>
        </li>
        <button className="btn">
          <FaSignOutAlt />
          Logout
        </button>

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
      </ul>
    </header>
  );
};

export default Navbar;
