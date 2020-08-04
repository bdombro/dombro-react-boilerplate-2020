import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import { RouteAccessControl } from "../Auth/compounds/RouteAccessControl";
import NotFound from "../NotFound";
import { meta } from "./meta";
import IndexRoute from "./routes/IndexRoute";
import { meta as IndexRouteMeta } from "./routes/IndexRoute/meta";
import Tests from "./routes/Tests";
import { meta as TestsMeta } from "./routes/Tests/meta";

const Stack: Stack = (props) => {
  return (
    <RouteAccessControl meta={meta} routeProps={props}>
      <Switch>
        <Route path={IndexRouteMeta.path} component={IndexRoute} exact />
        <Route path={TestsMeta.path} component={Tests} />
        <Route component={NotFound} />
      </Switch>
    </RouteAccessControl>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
