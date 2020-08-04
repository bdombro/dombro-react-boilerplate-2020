import React from "react";

import BlankLayoutLoading from "../../layout/BlankLayout/compounds/BlankLayoutLoading.tsx/BlankLayoutLoading";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./NotFound"));

const Component: DefaultComponent = (props) => (
  <React.Suspense fallback={() => <BlankLayoutLoading meta={meta} {...props} />}>
    <Loaded {...props} />
  </React.Suspense>
);
export default Component;
