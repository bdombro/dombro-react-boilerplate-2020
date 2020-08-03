import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { DefaultLayout } from "../../../layout/DefaultLayout";

const titleDefault = "Dashboard";
const className = "dashboard";

const Loaded: Dashboard = () => {
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to="/admin">Goto Admin Dashboard</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

const Loading: Dashboard = () => {
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Loading...</div>
    </DefaultLayout>
  );
};

const Dashboard: Dashboard = (props) => {
  return (
    <React.Suspense fallback={<Loading {...props} />}>
      <Loaded {...props} />
    </React.Suspense>
  );
};

export default Dashboard;

export type DashboardProps = RouteComponentProps<{} /* for example id: string */>;
export type Dashboard = React.FC<DashboardProps>;
