import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import Dashboard from "./Dashboard";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
