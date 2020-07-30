import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type RouteParams = {}; // for example id: string

const Dashboard: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <div>
      <h1>Hello, Admin Dashboard!</h1>
      <ul>
        <li>
          <Link to="/admin/hotreloadtest">Goto HotReloadTest</Link>
        </li>
      </ul>
    </div>
  );
};
export default Dashboard;
