import React from "react";
import { Link } from "react-router-dom";

import AdminMeta from "../../../Admin/meta";
import { HocAccessControl } from "../../../Auth/compounds/HocAccessControl";
import ProfileMeta from "../../../Auth/routes/Profile/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = () => {
  return (
    <>
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
    </>
  );
};

export default Component;
