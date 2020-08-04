import React from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../../../../../../../../layout/DefaultLayout";
import NotFound from "../../../../../../../NotFound/NotFound";
import { meta as ParentMeta } from "../../meta";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const DynamicRouteTestIdRoute: DefaultComponent = (props) => {
  const { match } = props;
  if (match.params.id === "2") return <NotFound {...props} />;
  return (
    <DefaultLayout title={`Dynamic Route #${match.params.id}`} meta={meta}>
      <div>
        Welcome to a Dynamic Route! <Link to={ParentMeta.path}>Go back</Link>
      </div>
    </DefaultLayout>
  );
};

export default DynamicRouteTestIdRoute;
