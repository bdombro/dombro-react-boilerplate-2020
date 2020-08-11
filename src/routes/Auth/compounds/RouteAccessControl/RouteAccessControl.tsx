import { difference } from "lodash-es";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil/dist";

import { AuthState } from "../../../../state";
import NotFound from "../../../NotFound";
import LoginMeta from "../../routes/Login/meta";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const {
    routeMeta: { permissions = [], hidden = false },
    children,
  } = props;
  const auth = useRecoilValue(AuthState);
  const location = useLocation();
  const missingPermissions = difference(permissions, auth.permissions);
  if (missingPermissions.length) {
    console.debug(`RouteAccessControl: Blocked by ${missingPermissions.join(",")}`);
    if (hidden || auth.username) return <NotFound />;
    return <Navigate to={`${LoginMeta.path}?from=${location.pathname}`} />;
  }
  return <>{children}</>;
};
export default Component;
