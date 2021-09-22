import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login } from "./components/login/login";
import { Session } from "inspector";
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={"/Login"} component={Login}></Route>
        <Route path={"/"} component={App}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
