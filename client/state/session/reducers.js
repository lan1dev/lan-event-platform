import types from './types';

const initalState = {
  isLoading: false,
  errors: []
};

const sessionReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.SESSION_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.SESSION_LOGIN_FAILED:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

export default sessionReducer;
