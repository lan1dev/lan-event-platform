export const getRegisterErrors = state => state.register.errors;

export const getRegisterSuccessMsgs = state => state.register.messages;

export const isLoginSuccessful = state => state.register.success;

export default {
  getRegisterErrors,
  getRegisterSuccessMsgs,
  isLoginSuccessful
};
