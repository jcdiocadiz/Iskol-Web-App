import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import { Header } from "./components/header/header";
import { RightPanel } from "./components/right-panel/right-panel";
import Menu, { ILinkDetails } from "./components/menu/menu";
import { Footer } from "./components/footer/footer";
import "./App.css";
import { ThemeProvider } from "@fluentui/react";
import { GetObjectFromLocalStorage } from "./shared/helpers/local-storage-helper";
import { LocalStorageTheme } from "./shared/constants/theme-constants";
import React, { useEffect, useState } from "react";
import { InitializeApp } from "./processes/initialize-app";
import Main from "./components/main/main";
import { PageHeader } from "./shared/components/page-header/page-header";
InitializeApp();
const App = () => {
  const [theme, setTheme] = useState();
  const [headerName, setHeaderName] = useState("Dashboard");
  const [currentThemeChanged, setCurrentThemChanged] = useState(false);
  useEffect(() => {
    setTheme(GetObjectFromLocalStorage(LocalStorageTheme));
  }, [currentThemeChanged]);
  const onThemeChange = () => {
    setCurrentThemChanged(!currentThemeChanged);
  };

  const onMenuClick = (linkDetails: ILinkDetails) => {
    setHeaderName(linkDetails.headerName);
  };
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider
          applyTo={"body"}
          theme={theme ?? GetObjectFromLocalStorage(LocalStorageTheme)}
        >
          <Header onThemeChange={onThemeChange} />
          <PageHeader headerName={headerName}></PageHeader>
          <div className="row">
            <div className="col-2 col-s-2 menu">
              <Menu onMenuClick={onMenuClick} />
            </div>
            <div className={"col-8 col-s-7"}>
              <Main />
            </div>
            <div className={"col-2 col-s-12"}>
              <RightPanel />
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
export default withRouter(App);
