import { RouteMeta } from "../../../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Dynamic Route Test Index",
  slug: "dynamicRouteIndex",
  path: `${parentMeta.path}`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta.parent,
};
export default routeMeta;
