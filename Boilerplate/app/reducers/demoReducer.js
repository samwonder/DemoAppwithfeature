/* eslint no-underscore-dangle: 0 */

import {
  DEMO_REQUEST,
  DEMO_SUCCESS,
  DEMO_FAILURE,
} from '../actions/demoAction';

const initialState = {
  isLoading: false,
  demoData: {},
};

function demoResponse(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case DEMO_REQUEST:
      return {
        ...state,
        isLoading: true,
        demoData: {},
      };

    case DEMO_SUCCESS:
    case DEMO_FAILURE:
      return {
        ...state,
        isLoading: false,
        demoData: action.data,
      };

    default:
      return state;
  }
}

export default demoResponse;
