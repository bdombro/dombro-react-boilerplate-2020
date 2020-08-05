import React from "react";

import { ErrorBoundary } from "../compounds/ErrorBoundary";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { children = "", routeMeta } = props;
  return (
    <div className={`layout-default ${routeMeta.slug}`}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};
export default Component;
