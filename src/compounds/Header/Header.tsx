import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

type props = {};

export const Header: React.FC<props> = () => {
  const location = useLocation();
  return (
    <div className="header">
      <ul>
        <li className={getActiveClass("/dashboard")}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={getActiveClass("/admin")}>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );

  function getActiveClass(urlPart: string) {
    return location.pathname.includes(urlPart) ? "active " : " ";
  }
};
