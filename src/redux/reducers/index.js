import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import shopReducer from "./shopReducer";
import addlibReducer from "./addlibReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  shop: shopReducer,
  addlib: addlibReducer,
});

export default rootReducer;
