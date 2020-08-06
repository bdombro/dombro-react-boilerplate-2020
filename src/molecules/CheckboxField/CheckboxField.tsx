import { Field } from "formik";
import React from "react";

import { DefaultComponent } from "./types";

export const Component: DefaultComponent = (props) => {
  const { name, labelText, touched, type, error, ...inputProps } = props;
  const checkboxElement = React.useRef<HTMLInputElement>();
  function toggleBox() {
    // @ts-ignore: ignore unsure ref
    if ("checked" in checkboxElement.current) {
      checkboxElement.current.checked = !checkboxElement.current.checked;
    }
  }
  return (
    <div className={`checkboxField ${touched && error && "hasError"}`}>
      <Field type="checkbox" name={name} {...inputProps} innerRef={checkboxElement} />
      <label htmlFor={name} onClick={toggleBox}>
        {labelText}
      </label>
      <div className="error">{error}</div>
    </div>
  );
};
export default Component;
