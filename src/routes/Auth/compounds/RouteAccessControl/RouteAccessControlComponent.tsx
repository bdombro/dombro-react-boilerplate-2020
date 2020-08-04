import { difference } from "lodash-es";
import React from "react";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authState } from "../../../../state";
import NotFound from "../../../NotFound";
import { meta as AuthLoginMeta } from "../../routes/Login/meta";
import { RouteAccessControlComponent } from "./types";

export const RouteAccessControl: RouteAccessControlComponent = (props) => {
  const { meta, children, ...childProps } = props;
  const [auth] = useRecoilState(authState);
  const missingPermissions = difference(meta.permissions, auth.permissions);
  if (missingPermissions.length) {
    console.debug(`RouteAccessControl: Blocked by ${missingPermissions.join(",")}`);
    if (meta.hidden) return <NotFound {...childProps} />;
    return <Redirect push to={`${AuthLoginMeta.path}?from=${props.location.pathname}`} />;
  }
  return <>{children}</>;
};
