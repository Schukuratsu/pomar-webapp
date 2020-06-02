import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import trainerReducer from "./trainerReducer";
import appReducer from "./appReducer";

export default combineReducers({
  trainerState: trainerReducer,
  appState: appReducer,
  toastrState: toastrReducer,
});
