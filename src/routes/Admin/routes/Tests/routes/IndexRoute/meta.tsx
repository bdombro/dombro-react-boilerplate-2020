import { RouteMeta } from "../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Tests IndexRoute",
  slug: "adminTests",
  path: parentMeta.path,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta.parent,
};
export default routeMeta;
