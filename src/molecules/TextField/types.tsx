import { FieldAttributes } from "formik/dist/Field";
import React from "react";

export type DefaultProps = FieldAttributes<{
  name: string;
  labelText: string;
  touched: boolean | undefined;
  error: string | undefined;
}>;
export type DefaultComponent = React.FC<DefaultProps>;
