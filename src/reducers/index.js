import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import especieReducer from "./especieReducer";
import arvoreReducer from "./arvoreReducer";
import grupoReducer from "./grupoReducer";
import colheitaReducer from "./colheitaReducer";

export default combineReducers({
  especieState: especieReducer,
  arvoreState: arvoreReducer,
  grupoState: grupoReducer,
  colheitaState: colheitaReducer,
  toastrState: toastrReducer,
});
