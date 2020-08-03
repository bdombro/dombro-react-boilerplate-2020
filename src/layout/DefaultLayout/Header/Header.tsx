import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

export const Header: Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="active">
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth" activeClassName="active">
            Auth
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export type HeaderProps = {};
export type Header = React.FC<HeaderProps>;
