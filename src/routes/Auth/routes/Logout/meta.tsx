import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Logout",
  slug: "authLogout",
  path: `${parentMeta.path}/logout`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
