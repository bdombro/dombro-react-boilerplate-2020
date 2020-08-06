import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Users",
  slug: "adminUsers",
  path: `${parentMeta.path}/users`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
