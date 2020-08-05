import React from "react";
import useMetaTags from "react-metatags-hook";

import { useScrollRestore } from "../useScrollRestore";
import Breadcrumbs from "./compounds/Breadcrumbs";
import Header from "./compounds/Header";
import { DefaultComponent } from "./types";

export const Component: DefaultComponent = (props) => {
  const { children = "", routeMeta } = props;
  useMetaTags({ title: `${routeMeta.titleDefault} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-default ${routeMeta.slug}`}>
      <Header routeMeta={routeMeta} />
      <Breadcrumbs routeMeta={routeMeta} />
      <div id="scroll-div">{children}</div>
    </div>
  );
};
export default Component;
