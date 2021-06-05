import { Component } from 'react';
import { getMovieCredits } from './../../services/movies-api';
import placeholderAvatar from '../../images/no_photo.png';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    console.log(movieId);
    const { cast } = await getMovieCredits(movieId);
    this.setState({ actors: [...cast] });
  }

  render() {
    const { actors } = this.state;
    return (
      <>
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
        </ul>
      </>
    );
  }
}

export default Cast;
