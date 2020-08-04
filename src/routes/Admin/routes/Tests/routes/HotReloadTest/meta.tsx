import { RouteMeta } from "../../../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Scroll Restore Test",
  slug: "scrollRestoreTest",
  path: `${parentMeta.path}/hot-reload-test`,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta,
};
