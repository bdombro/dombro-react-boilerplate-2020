import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import Register from "./Register";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <Redirect to={`${match.url}/profile`} />
      </Route>
      <Route path={`${match.url}/login`} component={Login} exact />
      <Route path={`${match.url}/register`} component={Register} exact />
      <Route path={`${match.url}/logout`} component={Logout} exact />
      <Route path={`${match.url}/profile`} component={Profile} exact />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
