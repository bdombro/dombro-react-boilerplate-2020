import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

type RouteParams = {}; // for example id: string

const Dashboard: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <div>
      <h1>Hello, Dashboard!</h1>
      <ul>
        <li>
          <Link to="/admin">Goto Admin Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
export default Dashboard;
