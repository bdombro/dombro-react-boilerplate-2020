import "./CheckboxField.css";

import { Field } from "formik";
import React from "react";

import { DefaultComponent } from "./types";

export const Component: DefaultComponent = (props) => {
  const { name, labelText, touched, type, error, ...inputProps } = props;
  return (
    <div className={`checkboxField ${touched && error && "hasError"}`}>
      <Field type="checkbox" name={name} {...inputProps} />
      <label htmlFor={name}>{labelText}</label>
      <div className="error">{error}</div>
    </div>
  );
};
export default Component;
