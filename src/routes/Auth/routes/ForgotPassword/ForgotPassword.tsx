import React from "react";
import { Link } from "react-router-dom";

import DashboardMeta from "../../../Dashboard/meta";
import LogoutMeta from "../Logout/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  return (
    <>
      <div>Forgot password coming soon...</div>
      <ul>
        <li>
          <Link to={DashboardMeta.path}>Goto dashboard</Link>
        </li>
        <li>
          <Link to={LogoutMeta.path}>Logout</Link>
        </li>
      </ul>
    </>
  );
};

export default Component;
