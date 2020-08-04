import { RouteMeta } from "../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Profile",
  slug: "authProfile",
  path: `${parentMeta.path}/profile`,
  permissions: ["active.dashboard"],
  hidden: false,
  parent: parentMeta,
};
