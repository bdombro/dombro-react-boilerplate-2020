import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import Dashboard from "./Dashboard";

const stacks: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
    </>
  );
};
export default stacks;
