import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

import { meta as AdminMeta } from "../../../../routes/Admin/meta";
import { HocAccessControl } from "../../../../routes/Auth/compounds/HocAccessControl";
import { meta as ProfileMeta } from "../../../../routes/Auth/routes/Profile/meta";
import { meta as DashboardMeta } from "../../../../routes/Dashboard/meta";

// TODO: Code split
export const Header: HeaderComponent = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to={DashboardMeta.path} activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <HocAccessControl permissions={AdminMeta.permissions}>
          <li>
            <NavLink to={AdminMeta.path} activeClassName="active">
              Admin
            </NavLink>
          </li>
        </HocAccessControl>
        <li>
          <NavLink to={ProfileMeta.path} activeClassName="active">
            User Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export type HeaderProps = {};
export type HeaderComponent = React.FC<HeaderProps>;
