import { RouteMeta } from "../../../types";
import parentMeta from "../../meta";

const routeMeta: RouteMeta = {
  title: "Login",
  slug: "authLogin",
  path: `${parentMeta.path}/login`,
  parent: parentMeta,
};
export default routeMeta;
