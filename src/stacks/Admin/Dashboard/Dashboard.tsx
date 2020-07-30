import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { LayoutDefault } from "../../../layout/LayoutDefault";

type RouteParams = {}; // for example id: string

const Dashboard: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <LayoutDefault title="Admin Dashboard">
      <ul>
        <li>
          <Link to="/admin/hotreloadtest">Goto HotReloadTest</Link>
        </li>
        <li>
          <Link to="/admin/scrollrestoretest">Goto ScrollRestoreTest</Link>
        </li>
      </ul>
    </LayoutDefault>
  );
};
export default Dashboard;
