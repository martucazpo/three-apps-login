import { combineReducers } from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  shop: shopReducer,
});

export default rootReducer;
