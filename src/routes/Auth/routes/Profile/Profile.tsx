import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { DefaultLayout } from "../../../../layout/DefaultLayout";
import { authState } from "../../../../state";
import { meta as DashboardMeta } from "../../../Dashboard/meta";
import { meta as LogoutMeta } from "../Logout/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const Profile: DefaultComponent = (props) => {
  const [auth] = useRecoilState(authState);
  return (
    <DefaultLayout meta={meta}>
      <div>Welcome to your profile, {auth.username}!</div>
      <ul>
        <li>
          <Link to={DashboardMeta.path}>Goto dashboard</Link>
        </li>
        <li>
          <Link to={LogoutMeta.path}>Logout</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default Profile;
