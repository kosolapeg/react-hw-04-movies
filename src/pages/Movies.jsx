import { useState, useEffect } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import MovieList from '../components/MovieList/';
import Searchbar from '../components/Searchbar/';
import { searchMovies } from '../services/movies-api';

const Movies = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  console.log(queryParams);
  const [query, setQuery] = useState(queryParams.query || '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (queryParams.query) {
      setQuery(queryParams.query);
      fetchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    query && fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const fetchMovies = async () => {
    try {
      const searchedMovies = await searchMovies(query);
      if (searchedMovies.length === 0)
        throw new Error('No movies were found for your request. Try again');
      history.push({ search: `?query=${query}` });

      setMovies(searchedMovies);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = q => {
    setQuery(q);
  };

  return (
    <>
      <Searchbar onSearch={handleSubmit}></Searchbar>

      {error && <h3 className="Error">{error}</h3>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};
export default withRouter(Movies);
