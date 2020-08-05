import React from "react";
import { Link } from "react-router-dom";

import TestsMeta from "../Tests/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = () => {
  return (
    <>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to={TestsMeta.path}>Goto Tests</Link>
        </li>
      </ul>
    </>
  );
};

export default Component;
