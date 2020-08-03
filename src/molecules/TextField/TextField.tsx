import "./TextField.css";

import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import React from "react";

export const TextField: TextField = (props) => {
  const { name, labelText, touched, error, ...inputProps } = props;
  return (
    <div className={`textField ${touched && error && "hasError"}`}>
      <label htmlFor={name}>{labelText}</label>
      <Field type="text" name={name} {...inputProps} />
      <div className="error">{error}</div>
    </div>
  );
};

export type TextFieldProps = FieldAttributes<{
  name: string;
  labelText: string;
  touched: boolean | undefined;
  error: string | undefined;
}>;
export type TextField = React.FC<TextFieldProps>;
