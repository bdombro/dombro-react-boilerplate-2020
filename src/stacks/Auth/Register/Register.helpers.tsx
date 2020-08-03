import { FormikHelpers } from "formik";
import * as H from "history";
import { SetterOrUpdater } from "recoil/dist";
import * as Yup from "yup";

import { authStateValue } from "../../../state";
import { isPasswordRegex } from "../../../util/isPassword";

export const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
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
});

export const onSubmitFactory: OnSubmitFactory = ({ history, setAuth }) => async (values, { setSubmitting }) => {
  setSubmitting(false);
  console.dir(values);
  const adminPermissions = ["adminDashboard:read", "scrollRestoreTest.read", "hotreloadTest.read"];
  const userPermissions = ["dashboard:read"];
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
  history.push("/");
};

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

export type OnSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => Promise<void>;
export type OnSubmitFactoryProps = { history: H.History; setAuth: SetterOrUpdater<authStateValue> };
export type OnSubmitFactory = ({ history }: OnSubmitFactoryProps) => OnSubmit;
