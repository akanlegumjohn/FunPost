import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside>
      <div className="logo">FunPost</div>
      <ul>
        <li>
          <Link>Feed</Link>
        </li>
        <li>
          <Link>Profile</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
