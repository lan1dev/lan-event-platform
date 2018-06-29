import Client from '../../libs/Client';
import types from './types';

export const userRegisterLoading = isLoading => ({
  type: types.USER_REGISTER_LOADING,
  isLoading
});

export const userRegisterFailed = errors => ({
  type: types.USER_REGISTER_FAILED,
  errors
});

export const userRegisterSuccess = messages => ({
  type: types.USER_REGISTER_SUCCESS,
  messages
});

export const userRegisterClear = () => dispatch => {
  dispatch(userRegisterFailed(false, ''));
  dispatch(userRegisterLoading(false));
  dispatch(userRegisterSuccess(false, ''));
};

export const userRegisterRequest = (url, fields) => async dispatch => {
  dispatch(userRegisterLoading(true));
  const result = await Client.POST(url, fields);

  if (!result.success) {
    dispatch(userRegisterFailed(true, result.errors));
  } else {
    dispatch(userRegisterLoading(false));
    dispatch(userRegisterSuccess(true, 'success'));
  }
  return result;
};

export default {
  userRegisterLoading,
  userRegisterFailed,
  userRegisterSuccess,
  userRegisterRequest,
  userRegisterClear
};
