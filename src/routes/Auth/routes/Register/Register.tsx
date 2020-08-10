import qs from "query-string";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import CheckboxField from "../../../../molecules/CheckboxField";
import TextField from "../../../../molecules/TextField";
import { AuthState } from "../../../../state";
import { adminUserAuth, normalUserAuth } from "../../../../state/authState/testUsers";
import { isPasswordRegex, isPasswordRequirements } from "../../../../util/isPassword";
import { wait } from "../../../../util/wait";
import loginMeta from "../Login/meta";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";
import { FormValues } from "./types";

const Component: DefaultComponent = (props) => {
  const { history, location } = props;
  const [auth, setAuth] = useRecoilState(AuthState);
  const { handleSubmit, register, errors } = useForm<FormValues>();
  // TODO: Figure out why we get redirected to ?from=undefined when going directly to /auth/register (same as login)
  const from = `${qs.parse(location.search).from}`.replace("undefined", "");

  const onSubmit = React.useCallback(
    (values) => {
      // setError("email", { type: "manual", message: "email already taken" });
      const authNext = values.email === adminUserAuth.email ? adminUserAuth : normalUserAuth;
      setAuth(authNext);
      console.info("Login Success");
    },
    [setAuth]
  );

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
      <h1>{routeMeta.title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="firstName"
          labelText="First Name"
          defaultValue="Jane"
          error={errors?.firstName?.message}
          inputRef={register({ required: "Required" })}
        />
        <TextField
          name="lastName"
          labelText="Last Name"
          defaultValue="Smith"
          error={errors?.lastName?.message}
          inputRef={register({ required: "Required" })}
        />
        <TextField
          name="email"
          labelText="Email"
          type="email"
          autoFocus
          defaultValue="admin@example.com"
          placeholder="john@acme.com"
          error={errors?.email?.message}
          inputRef={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <TextField
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
        <CheckboxField
          name="terms"
          labelText="Do you agree to these terms?"
          error={errors?.terms?.message}
          inputRef={register({ required: "Required" })}
        />
        <button type="submit">Submit</button>
      </form>
      <Link replace to={`${loginMeta.path}?${location.search}`}>
        Already have an account?
      </Link>
    </>
  );
};

export default Component;
