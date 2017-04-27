import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import srveReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const middleware = [
  createLogger()
];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

/**
 * Create store
 */
const store = createStore(
  srveReducer,
  {},/*preloadedState*/
  enhancer);

export const history = syncHistoryWithStore(createBrowserHistory(), store);
export { store };
