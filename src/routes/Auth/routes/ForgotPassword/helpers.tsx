import * as Yup from "yup";

import { FormValues, OnSubmitFactory } from "./types";

export const initialValues: FormValues = {
  email: "admin@example.com",
};

export const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
});

export const onSubmitFactory: OnSubmitFactory = (factoryProps) => async (...submitProps) => {
  const { setSuccess } = factoryProps;
  const [, { setSubmitting }] = submitProps;
  setSuccess(true);
  setSubmitting(false);
};
