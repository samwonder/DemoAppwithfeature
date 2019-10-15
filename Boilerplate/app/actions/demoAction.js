export const DEMO_REQUEST = 'DEMO_REQUEST';
export const DEMO_SUCCESS = 'DEMO_SUCCESS';
export const DEMO_FAILURE = 'DEMO_FAILURE';

export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS';

export const getDemoRequest = () => ({
    type: DEMO_REQUEST,
  });
  
  export const getDemoSuccess = data => ({
    type: DEMO_SUCCESS,
    data,
  });
  
  export const getDemoFailure = () => ({
    type: DEMO_FAILURE,
  });
  