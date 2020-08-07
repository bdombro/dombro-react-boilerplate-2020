import { Form, Formik } from "formik";
import qs from "query-string";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import TextField from "../../../../molecules/TextField";
import { AuthState } from "../../../../state";
import { wait } from "../../../../util/wait";
import forgotMeta from "../ForgotPassword/meta";
import registerMeta from "../Register/meta";
import * as helpers from "./helpers";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { history, location } = props;
  const [auth, setAuth] = useRecoilState(AuthState);
  const from = `${qs.parse(location.search).from}`.replace("undefined", "");

  React.useEffect(() => {
    if (auth.username) wait(500).then(() => (from ? history.goBack() : history.push("/")));
  }, [auth.username, from, history]);

  if (auth.username) {
    return (
      <>
        <h1>Success!</h1>
        <div>You're logged in, sending you {from ? "back" : "home"}...</div>
      </>
    );
  }

  return (
    <>
      <h1>{routeMeta.title}</h1>
      <Formik
        initialValues={helpers.initialValues}
        validationSchema={helpers.schema}
        onSubmit={helpers.onSubmitFactory({ history, auth, setAuth })}
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
            <TextField
              name="password"
              labelText="Password"
              type="password"
              placeholder="********"
              touched={touched.password}
              error={errors.password}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link replace to={`${registerMeta.path}?${location.search}`}>
        Need an account?
      </Link>
      <Link to={forgotMeta.path}>Forgot your password?</Link>
    </>
  );
};

export default Component;
