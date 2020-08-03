import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authState } from "../../state";
import NotFound from "../NotFound";
import Dashboard from "./Dashboard";
import HotReloadTest from "./HotReloadTest";
import ScrollRestoreTest from "./ScrollRestoreTest";

const Stack: Stack = (props) => {
  const { match } = props;
  const [auth] = useRecoilState(authState);
  if (!auth.permissions.includes("admin")) return <NotFound {...props} />;
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <Redirect to={`${match.url}/dashboard`} />
      </Route>
      <Route path={`${match.url}/dashboard`} component={Dashboard} exact />
      <Route path={`${match.url}/hotreloadtest`} component={HotReloadTest} exact />
      <Route path={`${match.url}/scrollrestoretest`} component={ScrollRestoreTest} exact />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
