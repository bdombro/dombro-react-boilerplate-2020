import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Logout",
  slug: "authLogout",
  path: `${parentMeta.path}/logout`,
  parent: parentMeta,
};
export default routeMeta;
