import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Profile",
  slug: "authProfile",
  path: `${parentMeta.path}/profile`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
