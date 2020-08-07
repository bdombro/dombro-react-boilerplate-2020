import { RouteMeta } from "../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Scroll Restore Test",
  slug: "scrollRestoreTest",
  path: `${parentMeta.path}/hot-reload-test`,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta,
};
export default routeMeta;
