import { trendingMovies } from './../services/movies-api';
import MovieList from './../components/MovieList';
import React, { Component } from 'react';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const fetchedMovies = await trendingMovies();
      this.setState({ movies: [...fetchedMovies] });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  render() {
    const { movies, error } = this.state;

    return (
      <>
        <h2>Trending movies today:</h2>
        {error && <h3 className="Error">{error}</h3>}
        {movies.length > 0 && <MovieList movies={movies} />}{' '}
      </>
    );
  }
}

export default HomePage;
