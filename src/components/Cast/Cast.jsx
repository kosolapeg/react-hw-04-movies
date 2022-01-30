import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from './../../services/movies-api';
import placeholderAvatar from '../../images/no_photo.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchActors() {
      const { cast } = await getMovieCredits(movieId);
      setActors(cast);
    }

    fetchActors();
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      <ul>
        {actors.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            {name} as <i>{character}</i>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : placeholderAvatar
              }
              alt={`Actor ${name}`}
              width={100}
            />
          </li>
        ))}
      </ul>{' '}
    </>
  );
};

export default Cast;
