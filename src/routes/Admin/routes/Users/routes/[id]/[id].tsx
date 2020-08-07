import React from "react";
import useMetaTags from "react-metatags-hook";
import { Link } from "react-router-dom";

import { testUsers } from "../../../../../../state/authState/testUsers";
import NotFound from "../../../../../NotFound";
import ParentMeta from "../../meta";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const id = parseInt(props.match.params.id, 10);
  const user = testUsers?.[id];
  useMetaTags({ title: `${routeMeta.title} ${user?.givenName} ${user?.surname} - Boilerplate` }, []);
  if (!user) return <NotFound {...props} />;
  return (
    <>
      <h1>User #{id}</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div>
        <Link to={ParentMeta.path}>
          <button>Go back</button>
        </Link>
      </div>
    </>
  );
};

export default Component;
