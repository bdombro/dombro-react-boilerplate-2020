import React from "react";

import DefaultLayoutLoading from "../../../../../../layout/DefaultLayout/compounds/DefaultLayoutLoading.tsx/DefaultLayoutLoading";
import { RouteAccessControl } from "../../../../../Auth/compounds/RouteAccessControl";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./ScrollRestoreTest"));

const Component: DefaultComponent = (props) => (
  <RouteAccessControl meta={meta} {...props}>
    <React.Suspense fallback={() => <DefaultLayoutLoading meta={meta} {...props} />}>
      <Loaded {...props} />
    </React.Suspense>
  </RouteAccessControl>
);
export default Component;
