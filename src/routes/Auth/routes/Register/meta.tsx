import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Register",
  slug: "authRegister",
  path: `${parentMeta.path}/register`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
