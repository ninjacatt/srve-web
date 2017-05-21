import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { history } from './redux/store';
import { HomeView, MovieView, PageNotFoundView, LoginView, SignUpView } from './components';

export default () => (
  <Router history={history}>
    <div className="App">
      <div className="App-header">
        <h2>Listing</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/movies/:movieId" component={MovieView} />
        <Route path="/login" component={LoginView} />
        <Route path="/signup" component={SignUpView} />
        <Route component={PageNotFoundView} />
      </Switch>
      
    </div>
  </Router>
);