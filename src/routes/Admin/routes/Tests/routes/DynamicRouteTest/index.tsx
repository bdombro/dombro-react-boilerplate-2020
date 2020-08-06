import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import RouteAccessControl from "../../../../../Auth/compounds/RouteAccessControl";
import NotFound from "../../../../../NotFound/NotFound";
import routeMeta from "./meta";
import IdRoute from "./routes/[id]";
import IdRouteMeta from "./routes/[id]/meta";
import IndexRoute from "./routes/IndexRoute";

const Stack: Stack = (props) => {
  return (
    <RouteAccessControl routeMeta={routeMeta} routeProps={props}>
      <Switch>
        <Route path={routeMeta.path} component={IndexRoute} exact />
        <Route path={IdRouteMeta.path} component={IdRoute} />
        <Route component={NotFound} />
      </Switch>
    </RouteAccessControl>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
