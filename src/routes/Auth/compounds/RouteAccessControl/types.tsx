import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RouteMeta } from "../../../types";

export type RouteAccessControlProps = RouteComponentProps<{}> & {
  meta: RouteMeta;
  children: React.ReactNode;
};
export type RouteAccessControlComponent = React.FC<RouteAccessControlProps>;
