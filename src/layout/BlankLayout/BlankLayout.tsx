import React from "react";
import useMetaTags from "react-metatags-hook";

import { RouteMeta } from "../../routes/types";
import { useScrollRestore } from "../useScrollRestore";

export const BlankLayout: BlankLayout = (props) => {
  const { title, meta, children } = props;
  useMetaTags({ title: `${title ?? meta.titleDefault} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-blank ${meta.slug}`}>
      <div id="scroll-div">
        <React.Suspense fallback={<div />}>{children}</React.Suspense>
      </div>
    </div>
  );
};

export type BlankLayoutProps = {
  meta: RouteMeta;
  title?: string;
  children: React.ReactNode;
};
export type BlankLayout = React.FC<BlankLayoutProps>;
