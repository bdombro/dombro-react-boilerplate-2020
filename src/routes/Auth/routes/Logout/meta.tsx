import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Logout",
  slug: "authLogout",
  path: `${parentMeta.path}/logout`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
