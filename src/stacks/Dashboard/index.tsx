import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} component={Dashboard} exact />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
