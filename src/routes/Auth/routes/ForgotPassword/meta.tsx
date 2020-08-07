import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Forgot Password",
  slug: "authForgotPassword",
  path: `${parentMeta.path}/forgot-password`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
