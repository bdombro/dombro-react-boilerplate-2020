import { RouteMeta } from "../../../../../types";
import ParentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Scroll Restore Test",
  slug: "adminScrollRestoreTest",
  path: `${ParentMeta.path}/scroll-restore-test`,
  permissions: ["admin.scrollRestoreTest"],
  hidden: true,
};
export default routeMeta;
