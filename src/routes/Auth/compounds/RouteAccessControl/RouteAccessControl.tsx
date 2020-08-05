import { difference } from "lodash-es";
import React from "react";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authState } from "../../../../state";
import NotFound from "../../../NotFound";
import LoginMeta from "../../routes/Login/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const { routeMeta, children, routeProps } = props;
  const [auth] = useRecoilState(authState);
  const missingPermissions = difference(routeMeta.permissions, auth.permissions);
  if (missingPermissions.length) {
    console.debug(`RouteAccessControl: Blocked by ${missingPermissions.join(",")}`);
    if (routeMeta.hidden) return <NotFound {...routeProps} />;
    return <Redirect push to={`${LoginMeta.path}?from=${routeProps.location.pathname}`} />;
  }
  return <>{children}</>;
};
export default Component;
