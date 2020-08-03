import { Form, Formik } from "formik";
import qs from "query-string";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { BlankLayout } from "../../../layout/BlankLayout";
import { TextField } from "../../../molecules/TextField";
import { authState } from "../../../state";
import { wait } from "../../../util/wait";
import * as helpers from "./Login.helpers";

const titleDefault = "Login";
const className = "auth login";

const Login: Login = (props) => {
  const { history, location } = props;
  const [auth, setAuth] = useRecoilState(authState);
  const from = `${qs.parse(location.search).from}`;

  React.useEffect(() => {
    if (auth.username) wait(3000).then(() => (from ? history.goBack() : history.push("/")));
  }, [auth.username, from, history]);

  if (auth.username) {
    return (
      <BlankLayout title={titleDefault} className={className}>
        <h1>Success!</h1>
        <div>You're logged in, sending you {from ? "back" : "home"}...</div>
      </BlankLayout>
    );
  }

  return (
    <BlankLayout title={titleDefault} className={className}>
      <h1>{titleDefault}</h1>
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
    </BlankLayout>
  );
};

// TODO: Apply redirect logic to register.
// TODO: dynmaic import pages code splitting
// TODO: Test 404
// TODO: Recoil persist
// TODO: Forgot password page
// TODO: Test 404
// TODO: Error boundaries

export default Login;

export type LoginProps = RouteComponentProps<{} /* for example id: string */>;
export type Login = React.FC<LoginProps>;
