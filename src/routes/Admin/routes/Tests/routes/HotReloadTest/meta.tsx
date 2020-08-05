import { RouteMeta } from "../../../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  titleDefault: "Scroll Restore Test",
  slug: "scrollRestoreTest",
  path: `${parentMeta.path}/hot-reload-test`,
  permissions: ["admin.dashboard"],
  hidden: true,
  parent: parentMeta,
};
export default routeMeta;
