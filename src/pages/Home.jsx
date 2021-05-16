import { Switch, Route, Link } from 'react-router-dom';

const Home = ({ location, match }) => {
  console.log('Match:', match);

  return (
    <>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to={`${match.url}3`}>Third</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:id`} />
      </Switch>
    </>
  );
};

export default Home;
