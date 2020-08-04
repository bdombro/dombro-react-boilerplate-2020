import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../../../../../../layout/DefaultLayout";
import { meta as DynamicRouteTestMeta } from "../DynamicRouteTest/meta";
import { meta as HotReloadTestMeta } from "../HotReloadTest/meta";
import { meta as ScrollRestoreTestMeta } from "../ScrollRestoreTest/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const IndexRoute: DefaultComponent = (props) => {
  return (
    <DefaultLayout meta={meta}>
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
    </DefaultLayout>
  );
};

export default IndexRoute;
