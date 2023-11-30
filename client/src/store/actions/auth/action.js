import actionTypes from '../actionTypes';

const setUserRole = (userRole) => ({
  type: actionTypes.SET_USER_ROLE,
  data: userRole,
});

export { setUserRole };