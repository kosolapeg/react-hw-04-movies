import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);

const Movies = lazy(() =>
  import('./pages/Movies' /* webpackChunkName: "movies" */),
);

const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-info" */),
);

class App extends Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <>
        <Navbar />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default App;
