import React from "react";
import { Link } from "react-router-dom";

import { testUsers } from "../../../../../../state/authState/testUsers";
import IdRouteMeta from "../[id]/meta";
import { DefaultComponent } from "./types";

const IndexRoute: DefaultComponent = (props) => {
  return (
    <>
      <div>Users</div>
      <ul>
        {testUsers.map((u, i) => (
          <li>
            <Link to={`${IdRouteMeta.path.replace(":id", "")}${i}`}>
              {u.givenName} {u.surname}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IndexRoute;
