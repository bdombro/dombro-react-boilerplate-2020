import React from "react";

import BlankLayout from "../../../../layout/BlankLayout";
import RouteAccessControl from "../../../Auth/compounds/RouteAccessControl";
import Loading from "./Loading";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Loaded = React.lazy(() => import("./Logout"));

const Component: DefaultComponent = (props) => (
  <RouteAccessControl routeMeta={routeMeta} routeProps={props}>
    <BlankLayout routeMeta={routeMeta}>
      <React.Suspense fallback={<Loading {...props} />}>
        <Loaded {...props} />
      </React.Suspense>
    </BlankLayout>
  </RouteAccessControl>
);
export default Component;
