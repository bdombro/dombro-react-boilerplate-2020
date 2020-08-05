import { RouteMeta } from "../../../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Dynamic Route",
  slug: "dynamicRouteId",
  path: `${parentMeta.path}/:id`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
export default routeMeta;
