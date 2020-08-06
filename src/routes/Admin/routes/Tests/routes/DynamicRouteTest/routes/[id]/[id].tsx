import React from "react";
import useMetaTags from "react-metatags-hook";
import { Link } from "react-router-dom";

import NotFound from "../../../../../../../NotFound";
import ParentMeta from "../../meta";
import routeMeta from "./meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const id = props.match.params.id;
  useMetaTags({ title: `${routeMeta.titleDefault} #${id} - Boilerplate` }, []);
  if (id === "2") return <NotFound {...props} />;
  return (
    <>
      <h1>Dynamic Route #${id}</h1>
      <div>
        Welcome to a Dynamic Route! <Link to={ParentMeta.path}>Go back</Link>
      </div>
    </>
  );
};

export default Component;
