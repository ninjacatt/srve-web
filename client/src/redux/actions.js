import axios from 'axios';

// actions, describe the fact that something happened

/*
 * action types
 */

export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_CLEAR_ERROR = 'SIGNUP_CLEAR_ERROR';
export const CREATING_ACCOUNT = 'CREATING_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


/*
 * action creators
 */

export function signUpError(err) {
  return { type: SIGNUP_ERROR, err };
}

export function signUpClearError(err) {
  return { type: SIGNUP_CLEAR_ERROR, err };
}

export function createAccount(data) {
  return (dispatch) => {
    return axios.post('/api/users', data);
  };
}

export function loginError(err) {
  return { type: LOGIN_ERROR, err };
}

export function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, user };
}

export function login(data) {
  //return { type: LOGIN, account };
  return (dispatch) => {
    // make service call to auth and get token
    return axios.get('https://api.github.com/users/' + data).then(res => {
      dispatch(setCurrentUser(res.data));
    });
  };
}
