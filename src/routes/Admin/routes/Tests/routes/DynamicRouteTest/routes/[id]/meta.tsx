import { RouteMeta } from "../../../../../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Dynamic Route",
  slug: "dynamicRouteId",
  path: `${parentMeta.path}/:id`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
