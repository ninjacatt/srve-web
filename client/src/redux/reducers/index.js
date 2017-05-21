import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { auth } from './auth';

const mainApp = combineReducers({
  auth,
  routing: routerReducer,
});
export default mainApp;
