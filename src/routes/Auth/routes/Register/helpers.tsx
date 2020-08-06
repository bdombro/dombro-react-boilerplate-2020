import * as Yup from "yup";

import { adminUserAuth, normalUserAuth } from "../../../../state/authState/testUsers";
import { isPasswordRegex } from "../../../../util/isPassword";
import { FormValues, OnSubmitFactory } from "./types";

export const initialValues: FormValues = {
  firstName: "Nancy",
  lastName: "Drew",
  email: "nancy@drew.com",
  password: "S0mePassword*",
  terms: false,
};

export const schema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("First name is required."),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Last name is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .matches(
      isPasswordRegex,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character."
    ),
  terms: Yup.boolean().equals([true], "You must accept the terms."),
});

export const onSubmitFactory: OnSubmitFactory = (factoryProps) => async (...submitProps) => {
  const { setAuth } = factoryProps;
  const [values, { setSubmitting }] = submitProps;
  const authNext = values.email === adminUserAuth.email ? adminUserAuth : normalUserAuth;
  setAuth(authNext);
  setSubmitting(false);
  console.info(`Register.onSubmitFactory: Success`);
};
