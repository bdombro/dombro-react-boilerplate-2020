import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type DashboardProps = RouteComponentProps<{} /* for example id: string */>;
export type DefaultComponent = React.FC<DashboardProps>;
