import * as Yup from "yup";

import { AuthStateType } from "../../../../state/authState/types";
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
  const adminPermissions = ["admin.dashboard"];
  const userPermissions = ["active.dashboard"];
  const adminUserAuth: AuthStateType = {
    username: "admin",
    token: "faketoken",
    displayName: "Admin Foo",
    avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000", // Get sizes by adding ?s=200
    permissions: [...userPermissions, ...adminPermissions],
  };
  const normalUserAuth: AuthStateType = {
    username: "nancyDrew",
    token: "faketoken",
    displayName: "Nancy Drew",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50", // Get sizes by adding ?s=200
    permissions: userPermissions,
  };
  const authNext = values.email === "admin@example.com" ? adminUserAuth : normalUserAuth;
  setAuth(authNext);
  setSubmitting(false);
  console.info(`Register.onSubmitFactory: Success`);
};
