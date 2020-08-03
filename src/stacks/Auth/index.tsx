import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <Redirect to={`${match.url}/login`} />
      </Route>
      <Route path={`${match.url}/login`} component={Login} exact />
      <Route path={`${match.url}/register`} component={Register} exact />
      <Route path={`${match.url}/logout`} component={Logout} exact />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
