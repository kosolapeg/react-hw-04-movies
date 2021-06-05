import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '60d3eb3665993fae2174e10ed23701eb';

export const trendingMovies = () => {
  return axios.get(`trending/movie/week?api_key=${apiKey}`).then(({ data }) => {
    if (data.results.length === 0) {
      throw new Error('No movies were found for your request. Try again');
    }
    return data.results;
  });
};

export const getMovie = movie_id => {
  return axios.get(`movie/${movie_id}?api_key=${apiKey}`).then(response => {
    return response.data;
  });
};

export const getMovieCredits = movie_id => {
  return axios
    .get(`movie/${movie_id}/credits?api_key=${apiKey}`)
    .then(response => {
      return response.data;
    });
};

export const getMovieReviews = movie_id => {
  return axios
    .get(`movie/${movie_id}/reviews?api_key=${apiKey}`)
    .then(response => {
      return response.data.results;
    });
};

export const searchMovies = query => {
  return axios
    .get(`search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => {
      return response.data.results;
    });
};
