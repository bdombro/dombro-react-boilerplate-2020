import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../../../../../../../../layout/DefaultLayout";
import { meta as IdRouteMeta } from "../[id]/meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const IndexRoute: DefaultComponent = (props) => {
  return (
    <DefaultLayout meta={meta}>
      <div>Welcome to Dynamic Route Test!</div>
      <ul>
        <li>
          <Link to={`${IdRouteMeta.path.replace(":id", "")}1`}>Goto Entry 1</Link>
        </li>
        <li>
          <Link to={`${IdRouteMeta.path.replace(":id", "")}2`}>Goto Entry 2 (hidden)</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default IndexRoute;
