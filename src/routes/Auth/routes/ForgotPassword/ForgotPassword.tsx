import React from "react";
import { Link } from "react-router-dom";

import { BlankLayout } from "../../../../layout/BlankLayout";
import { meta as DashboardMeta } from "../../../Dashboard/meta";
import { meta as LogoutMeta } from "../Logout/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const ForgotPassword: DefaultComponent = (props) => {
  return (
    <BlankLayout meta={meta} routeProps={props}>
      <div>Forgot password coming soon...</div>
      <ul>
        <li>
          <Link to={DashboardMeta.path}>Goto dashboard</Link>
        </li>
        <li>
          <Link to={LogoutMeta.path}>Logout</Link>
        </li>
      </ul>
    </BlankLayout>
  );
};

export default ForgotPassword;
