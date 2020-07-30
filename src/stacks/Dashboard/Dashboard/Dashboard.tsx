import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { LayoutDefault } from "../../../layout/LayoutDefault";

type RouteParams = {}; // for example id: string

const Dashboard: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <LayoutDefault title="Dashboard">
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to="/admin">Goto Admin Dashboard</Link>
        </li>
      </ul>
    </LayoutDefault>
  );
};
export default Dashboard;
