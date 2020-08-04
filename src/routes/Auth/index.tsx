import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import Login from "./routes/Login";
import { meta as LoginMeta } from "./routes/Login/meta";
import Logout from "./routes/Logout/Logout";
import { meta as LogoutMeta } from "./routes/Logout/meta";
import Profile from "./routes/Profile";
import { meta as ProfileMeta } from "./routes/Profile/meta";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <Redirect to={ProfileMeta.path} />
      </Route>
      <Route path={LoginMeta.path} component={Login} />
      {/*<Route path={RegisterMeta.path} component={Register} />*/}
      <Route path={LogoutMeta.path} component={Logout} />
      <Route path={ProfileMeta.path} component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
