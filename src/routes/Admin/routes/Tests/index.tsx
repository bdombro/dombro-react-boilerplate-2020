import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { RouteAccessControl } from "../../../Auth/compounds/RouteAccessControl";
import NotFound from "../../../NotFound";
import { meta } from "./meta";
import DynamicRouteTest from "./routes/DynamicRouteTest";
import { meta as DynamicRouteTestMeta } from "./routes/DynamicRouteTest/meta";
import HotReloadTest from "./routes/HotReloadTest";
import { meta as HotReloadTestMeta } from "./routes/HotReloadTest/meta";
import IndexRoute from "./routes/IndexRoute";
import { meta as IndexRouteMeta } from "./routes/IndexRoute/meta";
import ScrollRestoreTest from "./routes/ScrollRestoreTest";
import { meta as ScrollRestoreTestMeta } from "./routes/ScrollRestoreTest/meta";

const Stack: Stack = (props) => {
  return (
    <RouteAccessControl meta={meta} routeProps={props}>
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
