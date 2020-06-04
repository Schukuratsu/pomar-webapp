import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducers from "../reducers";

export default createStore(
  Reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);
