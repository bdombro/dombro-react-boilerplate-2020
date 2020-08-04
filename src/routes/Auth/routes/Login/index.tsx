import React from "react";

import BlankLayoutLoading from "../../../../layout/BlankLayout/compounds/BlankLayoutLoading.tsx/BlankLayoutLoading";
import { RouteAccessControl } from "../../compounds/RouteAccessControl";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./Login"));

const Component: DefaultComponent = (props) => (
  <RouteAccessControl meta={meta} {...props}>
    <React.Suspense fallback={() => <BlankLayoutLoading meta={meta} {...props} />}>
      <Loaded {...props} />
    </React.Suspense>
  </RouteAccessControl>
);
export default Component;
