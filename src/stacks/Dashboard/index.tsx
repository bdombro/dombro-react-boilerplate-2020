import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";

const stack: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} component={Dashboard} exact />
    </Switch>
  );
};
export default stack;
