import React from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../../molecules/TextField";
import routeMeta from "./meta";
import { DefaultComponent, FormValues } from "./types";

const Component: DefaultComponent = (props) => {
  const { history } = props;
  const [success, setSuccess] = React.useState(false);
  const { handleSubmit, register, errors } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setSuccess(true);
  };

  if (success) {
    return (
      <>
        <h1>Success!</h1>
        <div>If that email matches a user, we'll send an email with instructions to reset your password.</div>
        <button onClick={history.goBack}>Go back to login?</button>
      </>
    );
  }

  return (
    <>
      <h1>{routeMeta.title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          labelText="Email"
          type="email"
          autoFocus
          defaultValue="john@acme.com"
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
        <button type="submit">Submit</button>
      </form>
      <button onClick={history.goBack}>Go back to login?</button>
    </>
  );
};

export default Component;
