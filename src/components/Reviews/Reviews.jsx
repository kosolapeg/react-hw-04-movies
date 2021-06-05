import React, { Component } from 'react';
import { getMovieReviews } from './../../services/movies-api';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);

    const reviews = await getMovieReviews(movieId);
    this.setState({ reviews: reviews });
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews.length);
    return (
      <>
        <ul>
          {reviews.map(
            ({ id, author, content, author_details: { avatar_path } }) => {
              let avatarSrc;

              if (avatar_path.substring(1, 6) === 'https') {
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
        {reviews.length < 1 && (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </>
    );
  }
}

export default Reviews;
