import React from "react";

import { BlankLayout } from "../../../../layout/BlankLayout";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./Login"));

const Component: DefaultComponent = (props) => (
  <React.Suspense fallback={() => <BlankLayout meta={meta} routeProps={props} />}>
    <Loaded {...props} />
  </React.Suspense>
);
export default Component;
