import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import store from "./redux/store";

/* Importar componentes */
import Header from "./components/Header";
import Users from "./components/Users";
/* Importar componentes */

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
          </>
          <Switch>
            <Route exact path="/" component={Users} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
