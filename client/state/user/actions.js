import types from './types';

export const userIsLoggedIn = (isLoggedIn, username = '', jwt = '') => ({
  type: types.USER_IS_LOGGED_IN,
  isLoggedIn,
  username,
  jwt
});

export default {
  userIsLoggedIn
};
