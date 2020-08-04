import React from "react";
import useMetaTags from "react-metatags-hook";

import { RouteMeta } from "../../routes/types";
import { useScrollRestore } from "../useScrollRestore";
import { Breadcrumbs } from "./compounds/Breadcrumbs";
import { Header } from "./compounds/Header";

export const DefaultLayout: DefaultLayout = (props) => {
  const { children, meta, title } = props;
  useMetaTags({ title: `${title ?? meta.titleDefault} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-default ${meta.slug}`}>
      <Header />
      <Breadcrumbs meta={meta} />
      <div id="scroll-div">
        {!!title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export type DefaultLayoutProps = {
  meta: RouteMeta;
  title?: string;
  children: React.ReactNode;
};
export type DefaultLayout = React.FC<DefaultLayoutProps>;
