import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Register",
  slug: "authRegister",
  path: `${parentMeta.path}/register`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
