import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom"; // react-router v4/v5
import { ConnectedRouter } from "react-router-redux";

import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {" "}
      {/* place ConnectedRouter under Provider */}
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root")
);
