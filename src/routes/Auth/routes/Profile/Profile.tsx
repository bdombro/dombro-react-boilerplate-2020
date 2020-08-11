import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil/dist";

import { AuthState } from "../../../../state";
import DashboardMeta from "../../../Dashboard/meta";
import LogoutMeta from "../Logout/meta";

const Component: React.FC = () => {
  const auth = useRecoilValue(AuthState);
  return (
    <>
      <h1>Welcome to your profile, {auth.username}!</h1>
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
