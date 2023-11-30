import actionTypes from "../actionTypes";
import * as apis from "../../../apis";
// authActions.js
const loginSuccess = (userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  data: userData,
});

const setUserRole = (userRole) => ({
  type: actionTypes.SET_USER_ROLE,
  data: userRole,
});

const login = (username, password) => async (dispatch) => {
  try {
    const response = await apis.login(username, password);
    if (response?.status === 200) {
      dispatch(loginSuccess(response?.data));
      dispatch(setUserRole(response.user.id_role));
    } else {
      // Handle login failure
    }
  } catch (error) {
    // Handle login error
  }
};
const register = (name, email, password, id_role) => async (dispatch) => {
  try {
    const response = await apis.register(name, email, password, id_role);
    if (response?.status === 200) {
      // Registration successful
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        storyIdData: response?.data,
      });
    } else {
      // Handle registration failure
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        storyIdData: null,
      });
    }
  } catch (error) {
    // Handle registration error
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      storyIdData: null,
    });
  }
};

export { login, setUserRole, register };
