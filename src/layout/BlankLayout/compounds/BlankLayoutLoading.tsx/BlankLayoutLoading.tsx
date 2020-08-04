import React from "react";

import { BlankLayout } from "../../";
import { RouteAccessControl } from "../../../../routes/Auth/compounds/RouteAccessControl";
import { DefaultComponent } from "./types";

const BlankLayoutLoading: DefaultComponent = (props) => {
  const { meta, ...routeProps } = props;
  return (
    <RouteAccessControl meta={meta} {...routeProps}>
      <BlankLayout meta={meta}>
        <div>Loading...</div>
      </BlankLayout>
    </RouteAccessControl>
  );
};

export default BlankLayoutLoading;
