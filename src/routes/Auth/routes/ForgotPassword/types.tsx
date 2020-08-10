import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type DefaultProps = RouteComponentProps<{} /* for example id: string */>;
export type DefaultComponent = React.FC<DefaultProps>;

export interface FormValues {
  email: string;
}
