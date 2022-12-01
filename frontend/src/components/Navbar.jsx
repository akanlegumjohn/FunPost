import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { reset, logout } from '../features/auth/authSlice';
import NavbarHandler from './NavbarHandler';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };
  return user && <NavbarHandler handleLogout={handleLogout} />;
};

export default Navbar;
