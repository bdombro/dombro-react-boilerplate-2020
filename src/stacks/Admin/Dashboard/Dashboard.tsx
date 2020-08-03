import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { DefaultLayout } from "../../../layout/DefaultLayout";
import { authState } from "../../../state";
import NotFound from "../../NotFound";

const titleDefault = "Dashboard";
const className = "admin dashboard";

const Dashboard: Dashboard = (props) => {
  const [auth] = useRecoilState(authState);
  if (!auth.permissions.includes("admin.dashboard")) return <NotFound {...props} />;
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to="/admin/hotreloadtest">Goto HotReloadTest</Link>
        </li>
        <li>
          <Link to="/admin/scrollrestoretest">Goto ScrollRestoreTest</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default Dashboard;

export type DashboardProps = RouteComponentProps<{} /* for example id: string */>;
export type Dashboard = React.FC<DashboardProps>;
