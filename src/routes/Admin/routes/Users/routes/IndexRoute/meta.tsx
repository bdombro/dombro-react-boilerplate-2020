import { RouteMeta } from "../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Users",
  slug: "adminUsers",
  path: `${parentMeta.path}`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta.parent,
};
export default routeMeta;
