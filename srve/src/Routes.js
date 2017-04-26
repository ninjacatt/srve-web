import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { history } from './redux/store';
import { HomeView, ChefView } from './components';

export default () => (
  <Router history={history}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chef">Chef</Link></li>
      </ul>
      <Route exact path="/" component={HomeView} />
      <Route path="/chef" component={ChefView} />
    </div>
  </Router>
);