import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
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
          <Switch>
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={Movies} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
