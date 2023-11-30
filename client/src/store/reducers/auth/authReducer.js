// authReducer.js
import actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  isAuthenticated: false,
  userRole: null, // Thêm userRole vào state
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        isAuthenticated: true,
        error: null,
      };

    case actionTypes.SET_USER_ROLE:
      return {
        ...state,
        userRole: action.payload,
      };

    // Các case khác

    default:
      return state;
  }
};

export default authReducer;
