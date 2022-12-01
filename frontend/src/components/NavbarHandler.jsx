import { useState } from 'react';
import CompressedNavbar from './CompressedNavbar';
import OpenNavbar from './OpenNavbar';

const NavbarHandler = ({ handleLogout }) => {
  const [isNavOpen, setNavBody] = useState(false);
  const handleClick = () => setNavBody((prevState) => !prevState);
  return isNavOpen ? (
    <OpenNavbar handleLogout={handleLogout} handleClick={handleClick} />
  ) : (
    <CompressedNavbar handleLogout={handleLogout} handleClick={handleClick} />
  );
};

export default NavbarHandler;
