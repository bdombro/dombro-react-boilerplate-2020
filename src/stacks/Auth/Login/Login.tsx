import { Form, Formik } from "formik";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { BlankLayout } from "../../../layout/BlankLayout";
import { TextField } from "../../../molecules/TextField";
import { authState } from "../../../state";
import * as helpers from "./Login.helpers";

const titleDefault = "Login";
const className = "auth login";

const Loaded: Login = (props) => {
  const { history } = props;
  const [auth, setAuth] = useRecoilState(authState);

  if (auth.username)
    return (
      <BlankLayout title={titleDefault} className={className}>
        <h1>You're already logged in as {auth.username}.</h1>
        <ul>
          <li>
            Click <Link to="/">here</Link> to go home.
          </li>
          <li>
            Click <Link to="/auth/logout">here</Link> to logout.
          </li>
        </ul>
      </BlankLayout>
    );

  return (
    <BlankLayout title={titleDefault} className={className}>
      <h1>{titleDefault}</h1>
      <Formik
        initialValues={helpers.initialValues}
        validationSchema={helpers.schema}
        onSubmit={helpers.onSubmitFactory({ history, setAuth })}
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

const Loading: Login = () => {
  return (
    <BlankLayout title={titleDefault} className={className}>
      <div>Loading...</div>
    </BlankLayout>
  );
};

const Login: Login = (props) => {
  return (
    <React.Suspense fallback={<Loading {...props} />}>
      <Loaded {...props} />
    </React.Suspense>
  );
};

export default Login;

export type LoginProps = RouteComponentProps<{} /* for example id: string */>;
export type Login = React.FC<LoginProps>;
