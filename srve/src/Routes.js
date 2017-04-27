import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { history } from './redux/store';
import { HomeView, ChefView, MovieView, PageNotFoundView } from './components';

export default () => (
  <Router history={history}>
    <div className="App">
      <div className="App-header">
        <h2>BO Listing</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chef">Chef</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/chef" component={ChefView} />
        <Route path="/movies/:movieId" component={MovieView} />
        <Route component={PageNotFoundView} />
      </Switch>
      
    </div>
  </Router>
);