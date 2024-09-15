import authActions from "./authActions";
import appActions from "./appActions";
import shopActions from "./shopActions";
import addlibActions from "./addlibActions";

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
  handleLibsChange: addlibActions.handleLibsChange,
  addFood: addlibActions.addFood,
  makeSentence: addlibActions.makeSentence,
};

export default actions;
