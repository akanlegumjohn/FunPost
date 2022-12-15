import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { openNavbar, closeNavbar } from '../features/toggleNavbar/toggleSlice';
import CompressedNavbar from './compressedNavbar/CompressedNavbar';
import OpenNavbar from './OpenNavbar';

const NavbarHandler = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const [isNavOpen, setNavBody] = useState(false);
  const handleOpen = () =>
    setNavBody((prevState) => {
      dispatch(closeNavbar());
      return !prevState;
    });

  const handleClose = () =>
    setNavBody((prevState) => {
      dispatch(openNavbar());
      return !prevState;
    });
  return isNavOpen ? (
    <OpenNavbar handleLogout={handleLogout} handleClick={handleOpen} />
  ) : (
    <CompressedNavbar handleLogout={handleLogout} handleClick={handleClose} />
  );
};

export default NavbarHandler;
