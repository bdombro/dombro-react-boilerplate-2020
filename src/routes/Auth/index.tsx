import React from "react";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import RouteAccessControl from "./compounds/RouteAccessControl";
import routeMeta from "./meta";
import ForgotPassword from "./routes/ForgotPassword";
import ForgotPasswordMeta from "./routes/ForgotPassword/meta";
import Login from "./routes/Login";
import LoginMeta from "./routes/Login/meta";
import Logout from "./routes/Logout/Logout";
import LogoutMeta from "./routes/Logout/meta";
import Profile from "./routes/Profile";
import ProfileMeta from "./routes/Profile/meta";
import Register from "./routes/Register";
import RegisterMeta from "./routes/Register/meta";

const Stack: Stack = (props) => {
  const { match } = props;
  return (
    <RouteAccessControl routeMeta={routeMeta} routeProps={props}>
      <Switch>
        <Route exact path={`${match.url}`}>
          <Redirect to={ProfileMeta.path} />
        </Route>
        <Route path={ForgotPasswordMeta.path} component={ForgotPassword} />
        <Route path={LoginMeta.path} component={Login} />
        <Route path={LogoutMeta.path} component={Logout} />
        <Route path={ProfileMeta.path} component={Profile} />
        <Route path={RegisterMeta.path} component={Register} />
        <Route component={NotFound} />
      </Switch>
    </RouteAccessControl>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
