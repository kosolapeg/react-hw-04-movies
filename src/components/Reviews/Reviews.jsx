import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from './../../services/movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
      console.log('REvies', reviews);
    }

    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(
          ({ id, author, content, author_details: { avatar_path } }) => {
            let avatarSrc;

            if (avatar_path?.substring(1, 6) === 'https') {
              avatarSrc = avatar_path.substring(1);
            } else {
              avatarSrc = `https://image.tmdb.org/t/p/w200/${avatar_path}`;
            }

            return (
              <li key={id} className="reviewContent">
                <img src={avatarSrc} alt={author} width={100} />
                <p>
                  <b>{author}: </b>
                  {content}
                </p>
              </li>
            );
          },
        )}
      </ul>
      {reviews.length < 1 && <h3>We don't have any reviews for this movie</h3>}
    </>
  );
};

export default Reviews;
