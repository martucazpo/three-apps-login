import types from "../types";

const appActions = {
  getAppUser: (user) => ({ type: types.GET_APP_USER, payload: user }),
};

export default appActions;
