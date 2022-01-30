import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="Navigation">
      <li>
        <Link to="/">Top</Link>
      </li>
      <li>
        <Link to="/movies">Search movies</Link>
      </li>
    </ul>
  );
};

export default Navbar;
