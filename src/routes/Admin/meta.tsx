import { RouteMeta } from "../types";

const routeMeta: RouteMeta = {
  title: "Admin Dashboard",
  slug: "adminDashboard",
  path: "/admin",
  permissions: ["admin.dashboard"],
  hidden: true,
};
export default routeMeta;
