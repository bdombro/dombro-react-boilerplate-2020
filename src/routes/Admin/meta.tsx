import { RouteMeta } from "../types";

export const meta: RouteMeta = {
  titleDefault: "Admin Root",
  slug: "admin",
  path: "/admin",
  permissions: ["admin.dashboard"],
  hidden: true,
};
