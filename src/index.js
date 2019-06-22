import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import store from "./store/store";

import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css";
import "font-awesome/css/font-awesome.css";

import "./css/index.css";
import "./css/navbar.css";
import "./css/sidebar.css";
import "./css/login.css";
import "./css/footer.css";
import "./css/404.css";

import NotFound from "./components/notFound";
import Dashboard from "./components/admin/dashboard";
import Login from "./components/login";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" component={App} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
