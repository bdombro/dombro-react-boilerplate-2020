import { RouteMeta } from "../../../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Dynamic Route",
  slug: "dynamicRouteId",
  path: `${parentMeta.path}/:id`,
  parent: parentMeta,
};
export default routeMeta;
