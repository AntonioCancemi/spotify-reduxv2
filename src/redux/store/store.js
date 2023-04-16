import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "../reducers/userReducer";
import SearchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  user: UserReducer,
  search: SearchReducer,
});
const store = configureStore({
  reducer: bigReducer,
});
export default store;
