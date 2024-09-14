import types from "../types";

let initialState = {
  isAuth: false,
  isModalOpen: false,
  user: {},
  users: [],
  isLogin: true,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
