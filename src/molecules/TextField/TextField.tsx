import "./TextField.css";

import { Field } from "formik";
import React from "react";

import { DefaultComponent } from "./types";

export const Component: DefaultComponent = (props) => {
  const { name, labelText, touched, error, ...inputProps } = props;
  return (
    <div className={`textField ${touched && error && "hasError"}`}>
      <label htmlFor={name}>{labelText}</label>
      <Field type="text" name={name} {...inputProps} />
      <div className="error">{error}</div>
    </div>
  );
};
export default Component;
