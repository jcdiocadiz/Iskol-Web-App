import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { BrowserRouter } from "react-router-dom";
import "./web.config";
initializeIcons();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
