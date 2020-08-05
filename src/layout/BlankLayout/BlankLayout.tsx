import React from "react";
import useMetaTags from "react-metatags-hook";

import { useScrollRestore } from "../useScrollRestore";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { routeMeta, children } = props;
  useMetaTags({ title: `${routeMeta.titleDefault} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-blank ${routeMeta.slug}`}>
      <div id="scroll-div">{children}</div>
    </div>
  );
};
export default Component;
