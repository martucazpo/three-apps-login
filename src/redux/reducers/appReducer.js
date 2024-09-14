import types from "../types";

let initialState = {
  user: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_APP_USER:
      return {
        ...state,
        user: Object.assign(state.user, action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
