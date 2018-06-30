import Client from '../../libs/Client';
import Auth from '../../libs/Auth';
import Jwt from '../../libs/JWT';
import types from './types';
import { userIsLoggedIn } from '../user/actions';

export const sessionLoginLoading = isLoading => ({
  type: types.SESSION_LOGIN_LOADING,
  isLoading
});

export const sessionLoginFailed = errors => ({
  type: types.SESSION_LOGIN_FAILED,
  errors
});

export const sessionLoginRequest = (url, fields) => async dispatch => {
  dispatch(sessionLoginFailed([]));
  dispatch(sessionLoginLoading(true));

  const result = await Client.POST(url, fields);

  if (result.status !== 200) {
    dispatch(sessionLoginFailed(result.errors));
  } else {
    Auth.authenticateUser(result.token);
    dispatch(sessionLoginLoading(false));

    const username = Jwt.getUsername(result.token);
    const jwt = result.token;

    dispatch(userIsLoggedIn(true, username, jwt));
  }
};

export const sessionLogoutRequest = () => dispatch => {
  Auth.deauthenticateUser();
  dispatch(userIsLoggedIn(false));
};

export const sessionClear = () => dispatch => {
  dispatch(sessionLoginFailed([]));
  dispatch(sessionLoginLoading(false));
};

export default {
  sessionLoginLoading,
  sessionLoginFailed,
  sessionLoginRequest,
  sessionLogoutRequest,
  sessionClear
};
