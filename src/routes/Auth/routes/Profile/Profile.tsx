import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authState } from "../../../../state";
import DashboardMeta from "../../../Dashboard/meta";
import LogoutMeta from "../Logout/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const [auth] = useRecoilState(authState);
  const [error, setError] = React.useState();
  if (error) throw error;
  return (
    <>
      <div>Welcome to your profile, {auth.username}!</div>
      <a
        href="error"
        onClick={(e) => {
          e.preventDefault();
          try {
            throw new Error("AhhH!");
          } catch (err) {
            setError(err);
          }
        }}
      >
        Error
      </a>
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
