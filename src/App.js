import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </>
    );
  }
}

export default App;
