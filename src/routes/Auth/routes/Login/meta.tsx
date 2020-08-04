import { RouteMeta } from "../../../types";
import { meta as parentMeta } from "../../meta";

export const meta: RouteMeta = {
  titleDefault: "Login",
  slug: "authLogin",
  path: `${parentMeta.path}/login`,
  permissions: [],
  hidden: false,
  parent: parentMeta,
};
