import { FormikHelpers } from "formik";
import * as H from "history";
import { SetterOrUpdater } from "recoil/dist";
import * as Yup from "yup";

import { authStateValue } from "../../../state";

export const initialValues: FormValues = {
  email: "",
  password: "",
};

export const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string().required("Password is required."),
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
  email: string;
  password: string;
}

export type OnSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => Promise<void>;
export type OnSubmitFactoryProps = { history: H.History; setAuth: SetterOrUpdater<authStateValue> };
export type OnSubmitFactory = ({ history }: OnSubmitFactoryProps) => OnSubmit;
