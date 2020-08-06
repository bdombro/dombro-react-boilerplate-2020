import * as Yup from "yup";

import { adminUserAuth, normalUserAuth } from "../../../../state/authState/testUsers";
import { FormValues, OnSubmitFactory } from "./types";

export const initialValues: FormValues = {
  email: "admin@example.com",
  password: "Da!8****",
};

export const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string().required("Password is required."),
});

export const onSubmitFactory: OnSubmitFactory = (factoryProps) => async (...submitProps) => {
  const { setAuth } = factoryProps;
  const [values, { setSubmitting }] = submitProps;
  const authNext = values.email === adminUserAuth.email ? adminUserAuth : normalUserAuth;
  setAuth(authNext);
  setSubmitting(false);
  console.info(`Login.onSubmitFactory: Success`);
};
