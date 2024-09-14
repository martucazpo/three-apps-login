import authActions from "./authActions";
import appActions from "./appActions";

const actions = {
  login: authActions.login,
  register: authActions.register,
  openLoginModal: authActions.openLoginModal,
  closeLoginModal: authActions.closeLoginModal,
  displayLogin: authActions.displayLogin,
  displayRegistration: authActions.displayRegistration,
  sendMessage: authActions.sendMessage,
  handleAuthChange: authActions.handleAuthChange,
  getAppUser: appActions.getAppUser,
  logout: authActions.logout,
};

export default actions;
