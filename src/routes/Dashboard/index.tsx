import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../NotFound";
import IndexRoute from "./routes/IndexRoute";
import { meta as IndexRouteMeta } from "./routes/IndexRoute/meta";

const Stack: Stack = (props) => {
  return (
    <Switch>
      <Route path={IndexRouteMeta.path} component={IndexRoute} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
