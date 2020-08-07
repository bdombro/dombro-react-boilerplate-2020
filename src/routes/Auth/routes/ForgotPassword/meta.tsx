import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Forgot Password",
  slug: "authForgotPassword",
  path: `${parentMeta.path}/forgot-password`,
  parent: parentMeta,
};
export default routeMeta;
