export type RouteMeta = {
  titleDefault: string;
  slug: string;
  path: string;
  permissions: string[];
  hidden: boolean;
  parent?: RouteMeta;
  // icon?: string;
};
