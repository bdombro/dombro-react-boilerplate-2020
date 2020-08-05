import { Form, Formik } from "formik";
import qs from "query-string";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import TextField from "../../../../molecules/TextField";
import { authState } from "../../../../state";
import { wait } from "../../../../util/wait";
import * as helpers from "./helpers";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { history, location } = props;
  const [auth, setAuth] = useRecoilState(authState);
  // TODO: Figure out why we get redirected to ?from=undefined when going directly to /auth/login
  const from = `${qs.parse(location.search).from}`.replace("undefined", "");
  console.debug(from);

  React.useEffect(() => {
    if (auth.username) wait(1000).then(() => (from ? history.goBack() : history.push("/")));
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
      <h1>{routeMeta.titleDefault}</h1>
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
      <Link replace to="/auth/register">
        Already have an account?
      </Link>
    </>
  );
};

// TODO: Implement registration
// TODO: Recoil persist
// TODO: Forgot password page
// TODO: Drop yap b/c it's too big

export default Component;
