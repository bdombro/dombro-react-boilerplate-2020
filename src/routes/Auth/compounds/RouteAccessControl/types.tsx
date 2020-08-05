import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RouteMeta } from "../../../types";

export type DefaultProps = {
  routeMeta: RouteMeta;
  children: React.ReactNode;
  routeProps: RouteComponentProps<{}>;
};
export type DefaultComponent = React.FC<DefaultProps>;
