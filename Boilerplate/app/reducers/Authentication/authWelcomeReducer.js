/* eslint no-underscore-dangle: 0 */

import {
  AUTH_LOGIN,
  AUTH_SIGNUP,
  AUTH_FORGOT_PASSWORD,
  AUTH_WELCOME,
} from '../../actions/authentication';
import { AuthWelcomeView } from '../../utils/enum';

const initialState = {
  currentAuthWelcomeView: AuthWelcomeView.AUTH_WELCOME,
};

function authWelcomeReducer(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        currentAuthWelcomeView: AuthWelcomeView.AUTH_LOGIN,
      };

    case AUTH_SIGNUP:
      return {
        ...state,
        currentAuthWelcomeView: AuthWelcomeView.AUTH_SIGNUP,
      };

    case AUTH_FORGOT_PASSWORD:
      return {
        ...state,
        currentAuthWelcomeView: AuthWelcomeView.AUTH_FORGOT_PASSWORD,
      };

    case AUTH_WELCOME:
      return {
        ...state,
        currentAuthWelcomeView: AuthWelcomeView.AUTH_WELCOME,
      };

    default:
      return state;
  }
}

export default authWelcomeReducer;
