import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="Navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/movies">Movies</Link>
      </li>
    </ul>
  );
};

export default Navbar;
