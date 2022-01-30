import React, { Component, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getMovie } from './../services/movies-api';
import noPosterImg from './../images/no-poster.png';

const Cast = lazy(() =>
  import('./../components/Cast' /* webpackChunkName: "cast" */),
);

const Reviews = lazy(() =>
  import('./../components/Reviews' /* webpackChunkName: "reviews" */),
);

const WrappedComponent = props => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return (
    <MovieDetailsPage
      navigate={navigate}
      location={location}
      params={params}
      {...props}
    />
  );
};

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    release_date: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: null,
    tagline: null,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.params;
    try {
      const movieData = await getMovie(movieId);
      this.setState({
        ...movieData,
        genres: movieData?.genres?.map(genre => genre.name).join(' / ') || null,
        release_date: movieData.release_date
          ? movieData.release_date.split('-')[0]
          : null,
        poster_path: movieData.poster_path
          ? `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`
          : noPosterImg,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  handleGoBack = () => {
    this.props.navigate('/');
  };

  render() {
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
      tagline,
    } = this.state;

    return (
      <>
        <div className="MovieContainer">
          <div className="MoviePoster">
            <img
              className="MoviePoster__image"
              src={poster_path}
              alt={`Poster of movie "${title}"`}
            />
          </div>
          <div className="MovieInfo">
            <button
              type="button"
              className="btnGoBack"
              onClick={this.handleGoBack}
            >
              &lt;&lt; go back
            </button>
            <h2 className="MovieInfo__title">{`${title} (${release_date})`}</h2>
            <h3>Genres:</h3>
            <p className="MovieInfo__genres">{genres}</p>
            <h3>User Rating:</h3>
            <p className="MovieInfo__votes">{vote_average} / 10 point</p>
            <h3>Tagline:</h3>
            <i>"{tagline}"</i>

            <p>
              <strong>Plot: </strong>
              {overview}
            </p>
          </div>
        </div>
        <hr></hr>
        <h3>Aditional information:</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to={`review`}>Reviews</Link>
          </li>
        </ul>

        <Suspense fallback={<h3>loading...</h3>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}

export default WrappedComponent;
