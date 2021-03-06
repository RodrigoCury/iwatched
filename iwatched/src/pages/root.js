import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoreProvider from "components/Store/Provider";
import Index from "pages/Index/Index";
import Login from "pages/Login/Login";
import ViewAll from "pages/ViewAll/ViewAll";
// eslint-disable-next-line no-unused-vars
import RoutesPrivate from "components/Routes/Private/Private";

const Root = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/viewall/:list" component={ViewAll} />
        <Route path="/" component={Index} />
      </Switch>
    </StoreProvider>
  </Router>
);

export default Root;
