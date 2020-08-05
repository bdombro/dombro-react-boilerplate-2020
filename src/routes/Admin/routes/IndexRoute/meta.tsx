import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Admin IndexRoute",
  slug: "adminIndexRoute",
  path: parentMeta.path,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta.parent,
};
export default routeMeta;
