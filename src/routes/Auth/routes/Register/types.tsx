import { FormikHelpers } from "formik";
import * as H from "history";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { SetterOrUpdater } from "recoil/dist";

import { AuthStateType } from "../../../../state/authState/types";

export type DefaultProps = RouteComponentProps<{} /* for example id: string */>;
export type DefaultComponent = React.FC<DefaultProps>;

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

export type OnSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => Promise<void>;
export type OnSubmitFactoryProps = {
  history: H.History;
  auth: AuthStateType;
  setAuth: SetterOrUpdater<AuthStateType>;
};
// TODO: Consier lodash instead of a factory like this
export type OnSubmitFactory = (props: OnSubmitFactoryProps) => OnSubmit;
