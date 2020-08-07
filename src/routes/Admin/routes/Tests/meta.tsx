import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Tests",
  slug: "adminTests",
  path: `${parentMeta.path}/tests`,
  parent: parentMeta,
};
export default routeMeta;
