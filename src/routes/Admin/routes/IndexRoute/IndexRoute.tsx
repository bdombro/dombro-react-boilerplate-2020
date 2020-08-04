import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../../../../layout/DefaultLayout";
import { meta as TestsMeta } from "../Tests/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const IndexRoute: DefaultComponent = (props) => {
  return (
    <DefaultLayout meta={meta} routeProps={props}>
      <div>Welcome to the dashboard!</div>
      <ul>
        <li>
          <Link to={TestsMeta.path}>Goto Tests</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default IndexRoute;
