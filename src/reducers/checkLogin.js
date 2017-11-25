function checkLogin(state = {}, action) {
  switch (action.type) {
    case 'LOGOUT_DONE':
      return {};
    case 'LOGIN_DONE':
      return action.user;

    default:
      return state;
  }
}

export default checkLogin;