import { Form, Formik } from "formik";
import qs from "query-string";
import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import CheckboxField from "../../../../molecules/CheckboxField";
import TextField from "../../../../molecules/TextField";
import { AuthState } from "../../../../state";
import { wait } from "../../../../util/wait";
import loginMeta from "../Login/meta";
import * as helpers from "./helpers";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { history, location } = props;
  const [auth, setAuth] = useRecoilState(AuthState);
  // TODO: Figure out why we get redirected to ?from=undefined when going directly to /auth/register (same as login)
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
            <TextField name="firstName" labelText="First Name" touched={touched.firstName} error={errors.firstName} />
            <TextField name="lastName" labelText="Last Name" touched={touched.lastName} error={errors.lastName} />
            <TextField
              name="email"
              labelText="Email"
              type="email"
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
            <CheckboxField
              name="terms"
              labelText="Do you agree to these terms?"
              touched={touched.terms}
              error={errors.terms}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <Link replace to={`${loginMeta.path}?${location.search}`}>
        Already have an account?
      </Link>
    </>
  );
};

export default Component;
