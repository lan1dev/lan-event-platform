import types from './types';

const initalState = {
  isLoggedIn: false,
  username: '',
  jwt: ''
};

const sessionReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.USER_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        username: action.username,
        jwt: action.jwt
      };
    default:
      return state;
  }
};

export default sessionReducer;
