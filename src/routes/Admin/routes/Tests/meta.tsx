import { RouteMeta } from "../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Tests Root",
  slug: "adminTests",
  path: `${parentMeta.path}/tests`,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta,
};
