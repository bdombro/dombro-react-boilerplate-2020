import qs from "query-string";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import TextFieldset from "../../../../molecules/TextFieldset";
import { AuthState } from "../../../../state";
import { adminUserAuth, normalUserAuth } from "../../../../state/authState/testUsers";
import { isPasswordRegex, isPasswordRequirements } from "../../../../util/isPassword";
import { wait } from "../../../../util/wait";
import forgotMeta from "../ForgotPassword/meta";
import registerMeta from "../Register/meta";
import routeMeta from "./meta";

export interface FormValues {
  email: string;
  password: string;
}

const Component: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(AuthState);
  const { handleSubmit, register, errors } = useForm<FormValues>();
  const from = `${qs.parse(location.search).from}`.replace("undefined", "");

  const onSubmit = React.useCallback(
    (values) => {
      const authNext = values.email === adminUserAuth.email ? adminUserAuth : normalUserAuth;
      setAuth(authNext);
      console.info("Login Success");
    },
    [setAuth]
  );

  React.useEffect(() => {
    if (auth.username) wait(1000).then(() => (from ? navigate(-1) : navigate("/")));
  }, [auth.username, from, navigate]);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldset
          name="email"
          labelText="Email"
          type="email"
          autoFocus
          placeholder="john@acme.com"
          defaultValue="admin@example.com"
          error={errors?.email?.message}
          inputRef={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <TextFieldset
          name="password"
          labelText="Password"
          type="password"
          placeholder="********"
          defaultValue="CoolPassword8"
          error={errors?.password?.message}
          inputRef={register({
            required: "Required",
            pattern: {
              value: isPasswordRegex,
              message: isPasswordRequirements,
            },
          })}
        />
        <button type="submit">Submit</button>
      </form>
      <Link replace to={`${registerMeta.path}?${location.search}`}>
        Need an account?
      </Link>
      <Link to={forgotMeta.path}>Forgot your password?</Link>
    </>
  );
};

export default Component;
