import React from "react";

import DefaultLayout from "../../../../../../layout/DefaultLayout";
import RouteAccessControl from "../../../../../Auth/compounds/RouteAccessControl";
import Loading from "./Loading";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./HotReloadTest"));

const Component: DefaultComponent = (props) => (
  <RouteAccessControl routeMeta={routeMeta} routeProps={props}>
    <DefaultLayout routeMeta={routeMeta}>
      <React.Suspense fallback={<Loading {...props} />}>
        <Loaded {...props} />
      </React.Suspense>
    </DefaultLayout>
  </RouteAccessControl>
);
export default Component;
