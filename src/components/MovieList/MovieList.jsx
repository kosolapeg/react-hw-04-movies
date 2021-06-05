import { NavLink, withRouter } from 'react-router-dom';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title, original_name }) => (
      <li key={id}>
        <NavLink
          to={{
            pathname: `/movies/${id}`,
            state: { from: location },
          }}
        >
          {title || original_name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default withRouter(MovieList);
