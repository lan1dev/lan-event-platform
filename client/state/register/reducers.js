import types from './types';

const initalState = {
  isLoading: false,
  success: false,
  errors: [],
  messages: []
};

const registerReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.REGISTER_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.REGISTER_FAILED:
      return {
        ...state,
        errors: [...state.errors, ...action.errors]
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, ...action.messages],
        success: true
      };
    default:
      return state;
  }
};

export default registerReducer;
