import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const Stacks: Stacks = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default Stacks;

export type StacksProps = {};
export type Stacks = React.FC<StacksProps>;
