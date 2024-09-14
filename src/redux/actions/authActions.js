import types from "../types";

const authActions = {
  login: () => ({ type: types.LOGIN }),
  register: () => ({ type: types.REGISTER }),
  displayLogin: () => ({ type: types.DISPLAY_LOGIN }),
  displayRegistration: () => ({ type: types.DISPLAY_REGISTRATION }),
  openLoginModal: () => ({ type: types.OPEN_LOGIN_MODAL }),
  closeLoginModal: () => ({ type: types.CLOSE_LOGIN_MODAL }),
  sendMessage: (message) => ({ type: types.SEND_MESSAGE, payload: message }),
  handleAuthChange: (target) => ({
    type: types.HANDLE_AUTH_CHANGE,
    payload: target,
  }),
  logout: () => ({ type: types.LOGOUT }),
};

export default authActions;
