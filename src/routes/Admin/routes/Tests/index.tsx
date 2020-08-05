import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import RouteAccessControl from "../../../Auth/compounds/RouteAccessControl";
import NotFound from "../../../NotFound";
import routeMeta from "./meta";
import DynamicRouteTest from "./routes/DynamicRouteTest";
import DynamicRouteTestMeta from "./routes/DynamicRouteTest/meta";
import HotReloadTest from "./routes/HotReloadTest";
import HotReloadTestMeta from "./routes/HotReloadTest/meta";
import IndexRoute from "./routes/IndexRoute";
import IndexRouteMeta from "./routes/IndexRoute/meta";
import ScrollRestoreTest from "./routes/ScrollRestoreTest";
import ScrollRestoreTestMeta from "./routes/ScrollRestoreTest/meta";

const Stack: Stack = (props) => {
  return (
    <RouteAccessControl routeMeta={routeMeta} routeProps={props}>
      <Switch>
        <Route path={IndexRouteMeta.path} component={IndexRoute} exact />
        <Route path={HotReloadTestMeta.path} component={HotReloadTest} />
        <Route path={ScrollRestoreTestMeta.path} component={ScrollRestoreTest} />
        <Route path={DynamicRouteTestMeta.path} component={DynamicRouteTest} />
        <Route component={NotFound} />
      </Switch>
    </RouteAccessControl>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;