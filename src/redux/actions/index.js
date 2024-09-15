import authActions from "./authActions";
import appActions from "./appActions";
import shopActions from "./shopActions";

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
  handleListChange: shopActions.handleListChange,
  addItemToList: shopActions.addItemToList,
  removeItemFromList: shopActions.removeItemFromList,
  prepareToExchangeItem: shopActions.prepareToExchangeItem,
  exchangeItem: shopActions.exchangeItem,
};

export default actions;
