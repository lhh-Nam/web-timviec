import { combineReducers } from "redux";
import LoginReducer from "../reducer/LoginReducer";
import GetAllReducer from "../reducer/GetAllReducer";

const myReducer = combineReducers({
  LoginReducer,
  GetAllReducer,
});

export default myReducer;
