import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../../../../layout/DefaultLayout";
import { meta as AdminMeta } from "../../../Admin/meta";
import { HocAccessControl } from "../../../Auth/compounds/HocAccessControl";
import { meta as ProfileMeta } from "../../../Auth/routes/Profile/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const IndexRoute: DefaultComponent = (props) => {
  return (
    <DefaultLayout meta={meta} routeProps={props}>
      <div>Welcome to the dashboard!</div>
      <ul>
        <HocAccessControl permissions={AdminMeta.permissions}>
          <li>
            <Link to={AdminMeta.path}>Goto Admin Dashboard</Link>
          </li>
        </HocAccessControl>
        <li>
          <Link to={ProfileMeta.path}>Goto Profile</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default IndexRoute;
