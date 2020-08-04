import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type DashboardProps = RouteComponentProps<{ id: string } /* for example id: string */>;
export type DefaultComponent = React.FC<DashboardProps>;
