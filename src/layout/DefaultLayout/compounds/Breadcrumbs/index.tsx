import React from "react";

import { ErrorBoundary } from "../../../compounds/ErrorBoundary";
import Loading from "./Loading";
import { DefaultComponent } from "./types";

const DefaultInner = React.lazy(() => import("./Breadcrumbs"));

const Default: DefaultComponent = (props) => (
  <ErrorBoundary>
    <React.Suspense fallback={Loading}>
      <DefaultInner {...props} />
    </React.Suspense>
  </ErrorBoundary>
);
export default Default;
