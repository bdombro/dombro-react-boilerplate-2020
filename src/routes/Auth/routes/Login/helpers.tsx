import * as Yup from "yup";

import { authStateValue } from "../../../../state/authState/types";
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
  const adminPermissions = ["admin.dashboard"];
  const userPermissions = ["active.dashboard"];
  const adminUserAuth: authStateValue = {
    username: "admin",
    token: "faketoken",
    displayName: "Admin Foo",
    avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000", // Get sizes by adding ?s=200
    permissions: [...userPermissions, ...adminPermissions],
  };
  const normalUserAuth: authStateValue = {
    username: "nancyDrew",
    token: "faketoken",
    displayName: "Nancy Drew",
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50", // Get sizes by adding ?s=200
    permissions: userPermissions,
  };
  const authNext = values.email === "admin@example.com" ? adminUserAuth : normalUserAuth;
  setAuth(authNext);
  setSubmitting(false);
  console.info(`Login.onSubmitFactory: Success`);
};
