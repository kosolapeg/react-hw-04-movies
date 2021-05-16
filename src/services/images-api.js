import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios.defaults.headers.common['Authorization'] =
//   '20634365-1f280baa9861a1cbb9baba7ac';

const authKey = '20634365-1f280baa9861a1cbb9baba7ac';

const fetchImages = ({ query, currentPage, perPage }) => {
  return axios
    .get(
      `?q=${query}&page=${currentPage}&key=${authKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(({ data }) => {
      if (data.hits.length === 0) {
        throw new Error('No images were found for your request. Try again');
      }
      return data.hits;
    });
};

const imgApi = { fetchImages };

export default imgApi;
