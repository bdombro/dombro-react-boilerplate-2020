export type RouteMeta = {
  title: string;
  slug: string;
  path: string;
  permissions: string[];
  hidden: boolean;
  parent?: RouteMeta;
  // icon?: string;
};
