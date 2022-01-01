import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Provider from "store/Provider";
import routes from "routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
