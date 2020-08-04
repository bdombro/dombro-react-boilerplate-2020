import React from "react";
import useMetaTags from "react-metatags-hook";
import { RouteComponentProps } from "react-router";

import { RouteAccessControl } from "../../routes/Auth/compounds/RouteAccessControl";
import { RouteMeta } from "../../routes/types";
import { useScrollRestore } from "../useScrollRestore";

export const BlankLayout: BlankLayout = (props) => {
  const { title, meta, routeProps, children } = props;
  useMetaTags({ title: `${title ?? meta.titleDefault} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <RouteAccessControl meta={meta} routeProps={routeProps}>
      <div className={`layout-blank ${meta.slug}`}>
        <div id="scroll-div">{children}</div>
      </div>
    </RouteAccessControl>
  );
};

export type BlankLayoutProps = {
  meta: RouteMeta;
  routeProps: RouteComponentProps<{}>;
  title?: string;
  children?: React.ReactNode;
};
export type BlankLayout = React.FC<BlankLayoutProps>;
