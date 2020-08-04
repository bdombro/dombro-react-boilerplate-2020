import React from "react";

import { DefaultLayout } from "../../../../../../layout/DefaultLayout";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./IndexRoute"));

const Component: DefaultComponent = (props) => (
  <React.Suspense fallback={() => <DefaultLayout meta={meta} routeProps={props} />}>
    <Loaded {...props} />
  </React.Suspense>
);
export default Component;
