import { FormikHelpers } from "formik";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type DefaultProps = RouteComponentProps<{} /* for example id: string */>;
export type DefaultComponent = React.FC<DefaultProps>;

export interface FormValues {
  email: string;
}

export type OnSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => Promise<void>;
export type OnSubmitFactoryProps = {
  setSuccess: (values: boolean) => void;
};
// TODO: Consier lodash instead of a factory like this
export type OnSubmitFactory = (props: OnSubmitFactoryProps) => OnSubmit;
