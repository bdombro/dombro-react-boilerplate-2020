import { RouteMeta } from "../../../../../types";
import { meta as ParentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Dynamic Route Test Root",
  slug: "dynamicRouteRoot",
  path: `${ParentMeta.path}/dynamic-route-test`,
  permissions: [],
  hidden: false,
};
