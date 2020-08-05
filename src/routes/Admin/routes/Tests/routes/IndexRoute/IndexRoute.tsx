import React from "react";
import { Link } from "react-router-dom";

import DynamicRouteTestMeta from "../DynamicRouteTest/meta";
import HotReloadTestMeta from "../HotReloadTest/meta";
import ScrollRestoreTestMeta from "../ScrollRestoreTest/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  return (
    <>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to={HotReloadTestMeta.path}>Goto HotReloadTest</Link>
        </li>
        <li>
          <Link to={ScrollRestoreTestMeta.path}>Goto ScrollRestoreTest</Link>
        </li>
        <li>
          <Link to={DynamicRouteTestMeta.path}>Goto Dynamic Route Test</Link>
        </li>
      </ul>
    </>
  );
};

export default Component;
