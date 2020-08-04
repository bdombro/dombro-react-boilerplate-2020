import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { RouteMeta } from "../../../../routes/types";

export type DefaultProps = RouteComponentProps<{} /* for example id: string */> & {
  meta: RouteMeta;
};
export type DefaultComponent = React.FC<DefaultProps>;
