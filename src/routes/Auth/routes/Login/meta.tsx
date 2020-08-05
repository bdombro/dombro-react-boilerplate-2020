import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Login",
  slug: "authLogin",
  path: `${parentMeta.path}/login`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
