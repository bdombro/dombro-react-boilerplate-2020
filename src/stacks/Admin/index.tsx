import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import HotReloadTest from "./HotReloadTest";
import ScrollRestoreTest from "./ScrollRestoreTest";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}`} component={Dashboard} exact />
      <Route path={`${match.url}/hotreloadtest`} component={HotReloadTest} exact />
      <Route path={`${match.url}/scrollrestoretest`} component={ScrollRestoreTest} exact />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
