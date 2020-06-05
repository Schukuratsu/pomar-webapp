/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import Home from "./components/pages/Home";
import Relatorio from "./components/pages/Relatorio";
import "./index.css";
import "./components/templates/global.scss";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/relatorio" component={Relatorio} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-left"
      getState={(state) => state.toastrState}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
