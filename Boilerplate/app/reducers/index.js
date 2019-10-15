// @flow
import { combineReducers } from 'redux';

// // constants
import { LOGOUT_REQUEST_SUCCESS } from '../actions/authentication';
// change path after proper setup of login

// reducers
import getDemoData from './demoReducer';
import authWelcomeReducer from './Authentication/authWelcomeReducer';
import forgotPasswordReducer from './Authentication/forgotPasswordReducer';
import loaderReducers from './loaderReducers';

const appReducer = combineReducers({
  getDemoData,
  authWelcomeReducer,
  forgotPasswordReducer,
  loaderReducers,
});

const initialState = appReducer(undefined, {});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_REQUEST_SUCCESS) {
    return initialState;
  }
  return appReducer(state, action); // update after login flow setup
};

export default rootReducer;
