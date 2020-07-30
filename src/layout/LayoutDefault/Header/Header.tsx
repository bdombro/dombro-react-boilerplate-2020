import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

type props = {};

export const Header: React.FC<props> = () => {
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
      </ul>
    </div>
  );
};
