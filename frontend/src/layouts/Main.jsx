import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <div className="main--layout">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
