import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Users",
  slug: "adminUsers",
  path: `${parentMeta.path}/users`,
  parent: parentMeta,
};
export default routeMeta;
