import "./CheckboxField.css";

import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import React from "react";

export const CheckboxField: CheckboxField = (props) => {
  const { name, labelText, touched, type, error, ...inputProps } = props;
  return (
    <div className={`textField ${touched && error && "hasError"}`}>
      <Field type="checkbox" name={name} {...inputProps} />
      <label htmlFor={name}>{labelText}</label>
      <div className="error">{error}</div>
    </div>
  );
};

export type CheckboxFieldProps = FieldAttributes<{
  name: string;
  labelText: string;
  touched: boolean | undefined;
  error: string | undefined;
}>;
export type CheckboxField = React.FC<CheckboxFieldProps>;
