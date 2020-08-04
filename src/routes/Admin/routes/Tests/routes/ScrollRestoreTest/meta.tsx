import { RouteMeta } from "../../../../../types";
import { meta as ParentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Scroll Restore Test",
  slug: "adminScrollRestoreTest",
  path: `${ParentMeta.path}/scroll-restore-test`,
  permissions: ["admin.scrollRestoreTest"],
  hidden: true,
};
