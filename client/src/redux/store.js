import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

/**
 * Create store
 */
const store = createStore(
  appReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
export { store };
