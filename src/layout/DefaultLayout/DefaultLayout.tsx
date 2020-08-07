import React from "react";
import useMetaTags from "react-metatags-hook";

import { ErrorBoundary } from "../compounds/ErrorBoundary";
import { useScrollRestore } from "../useScrollRestore";
import Breadcrumbs from "./compounds/Breadcrumbs";
import Header from "./compounds/Header";
import { DefaultComponent } from "./types";

export const Component: DefaultComponent = (props) => {
  const { children = "", routeMeta } = props;
  useMetaTags({ title: `${routeMeta.title} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-default ${routeMeta.slug}`}>
      <Header routeMeta={routeMeta} />
      <Breadcrumbs routeMeta={routeMeta} />
      <div id="scroll-div">
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  );
};
export default Component;
