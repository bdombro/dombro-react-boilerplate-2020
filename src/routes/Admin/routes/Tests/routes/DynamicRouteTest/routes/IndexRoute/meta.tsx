import { RouteMeta } from "../../../../../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Dynamic Route Test Index",
  slug: "dynamicRouteIndex",
  path: `${parentMeta.path}`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta.parent,
};
