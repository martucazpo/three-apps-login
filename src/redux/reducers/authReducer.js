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
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      let theOne = state.users.filter((user) => user.email === state.email)[0];
      return {
        ...state,
        isAuth: true,
        isModalOpen: false,
        user: Object.assign(state.user, theOne),
        isLogin: true,
        email: "",
        password: "",
        message: "",
      };
    case types.REGISTER:
      let newUser = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        id: crypto.randomUUID(),
      };
      return {
        ...state,
        isAuth: true,
        isModalOpen: false,
        user: Object.assign(state.user, newUser),
        users: [newUser, ...state.users],
        isLogin: true,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        message: "",
      };
    case types.OPEN_LOGIN_MODAL:
      return {
        ...state,
        isAuth: false,
        isModalOpen: true,
        isLogin: true,
        message: "",
      };
    case types.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isModalOpen: false,
        isLogin: true,
        message: "",
      };
    case types.DISPLAY_LOGIN:
      return {
        ...state,
        isAuth: false,
        isLogin: true,
        isModalOpen: true,
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        message: "",
      };
    case types.DISPLAY_REGISTRATION:
      return {
        ...state,
        isAuth: false,
        isLogin: false,
        isModalOpen: true,
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        message: "",
      };
    case types.SEND_MESSAGE:
      return {
        ...state,
        isModalOpen: true,
        message: action.payload,
        isAuth: false,
      };
    case types.HANDLE_AUTH_CHANGE:
      let { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuth: false,
        isModalOpen: false,
        user: {},
        isLogin: true,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: "",
        message: "",
      };
    default:
      return state;
  }
};

export default authReducer;
