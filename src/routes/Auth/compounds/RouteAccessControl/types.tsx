import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RouteMeta } from "../../../types";

export type RouteAccessControlProps = {
  meta: RouteMeta;
  children: React.ReactNode;
  routeProps: RouteComponentProps<{}>;
};
export type RouteAccessControlComponent = React.FC<RouteAccessControlProps>;
