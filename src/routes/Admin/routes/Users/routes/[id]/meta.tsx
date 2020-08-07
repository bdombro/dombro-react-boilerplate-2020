import { RouteMeta } from "../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "User Profile",
  slug: "adminUser",
  path: `${parentMeta.path}/:id`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
