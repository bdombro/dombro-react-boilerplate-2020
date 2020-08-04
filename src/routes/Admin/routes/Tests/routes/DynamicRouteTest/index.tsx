import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import NotFound from "../../../../../NotFound/NotFound";
import IdRoute from "./routes/[id]";
import { meta as IdRouteMeta } from "./routes/[id]/meta";
import IndexRoute from "./routes/IndexRoute";
import { meta as IndexRouteMeta } from "./routes/IndexRoute/meta";

const Stack: Stack = () => {
  return (
    <Switch>
      <Route path={IndexRouteMeta.path} component={IndexRoute} exact />
      <Route path={IdRouteMeta.path} component={IdRoute} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Stack;

export type StackProps = RouteComponentProps<{}>;
export type Stack = React.FC<StackProps>;
