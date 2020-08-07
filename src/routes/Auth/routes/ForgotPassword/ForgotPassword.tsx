import { Form, Formik } from "formik";
import React from "react";

import TextField from "../../../../molecules/TextField";
import * as helpers from "./helpers";
import { onSubmitFactory } from "./helpers";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { history } = props;
  const [success, setSuccess] = React.useState(false);

  const goBack = React.useCallback(
    (e) => {
      e.preventDefault();
      history.goBack();
    },
    [history]
  );

  if (success) {
    return (
      <>
        <h1>Success!</h1>
        <div>If that email matches a user, we'll send an email with instructions to reset your password.</div>
        <a href="goBack" onClick={goBack}>
          Go back to login?
        </a>
      </>
    );
  }

  return (
    <>
      <h1>{routeMeta.title}</h1>
      <Formik
        initialValues={helpers.initialValues}
        validationSchema={helpers.schema}
        onSubmit={onSubmitFactory({ setSuccess })}
      >
        {({ touched, errors }) => (
          <Form>
            <TextField
              name="email"
              labelText="Email"
              type="email"
              autoFocus
              placeholder="john@acme.com"
              touched={touched.email}
              error={errors.email}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <a href="goBack" onClick={goBack}>
        Go back to login?
      </a>
    </>
  );
};

export default Component;
