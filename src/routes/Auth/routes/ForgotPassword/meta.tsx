import { RouteMeta } from "../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Forgot Password",
  slug: "authForgotPassword",
  path: `${parentMeta.path}/forgot-password`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
