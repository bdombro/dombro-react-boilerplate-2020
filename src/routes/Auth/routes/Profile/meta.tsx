import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Profile",
  slug: "authProfile",
  path: `${parentMeta.path}/profile`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
