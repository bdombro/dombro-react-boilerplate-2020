import { RouteMeta } from "../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Logout",
  slug: "authLogout",
  path: `${parentMeta.path}/logout`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
