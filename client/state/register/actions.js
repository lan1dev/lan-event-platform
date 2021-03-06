import Client from '../../libs/Client';
import types from './types';

export const userRegisterLoading = isLoading => ({
  type: types.REGISTER_LOADING,
  isLoading
});

export const userRegisterFailed = errors => ({
  type: types.REGISTER_FAILED,
  errors
});

export const userRegisterSuccess = messages => ({
  type: types.REGISTER_SUCCESS,
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
    dispatch(userRegisterFailed(result.errors));
  } else {
    dispatch(userRegisterLoading(false));
    dispatch(userRegisterSuccess('success'));
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
