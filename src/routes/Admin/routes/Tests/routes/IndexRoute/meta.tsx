import { RouteMeta } from "../../../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Tests IndexRoute",
  slug: "adminTests",
  path: parentMeta.path,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta.parent,
};
