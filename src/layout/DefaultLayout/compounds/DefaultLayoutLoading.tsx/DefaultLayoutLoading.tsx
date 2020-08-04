import React from "react";

import { RouteAccessControl } from "../../../../routes/Auth/compounds/RouteAccessControl";
import { DefaultLayout } from "../../DefaultLayout";
import { DefaultComponent } from "./types";

const DefaultLayoutLoading: DefaultComponent = (props) => {
  const { meta, ...routeProps } = props;
  return (
    <RouteAccessControl meta={meta} {...routeProps}>
      <DefaultLayout meta={meta}>
        <div>Loading...</div>
      </DefaultLayout>
    </RouteAccessControl>
  );
};

export default DefaultLayoutLoading;
