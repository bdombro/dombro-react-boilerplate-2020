import { difference } from "lodash-es";
import React from "react";
import { useRecoilValue } from "recoil/dist";

import { AuthState } from "../../../../state/authState";
import { DefaultComponent } from "./types";

export const HocAccessControl: DefaultComponent = (props) => {
  const { permissions = [], hidden = false, children } = props;
  const auth = useRecoilValue(AuthState);
  const missingPermissions = difference(permissions, auth.permissions);
  if (missingPermissions.length) {
    console.debug(`ComponentAccessControl: Blocked by ${missingPermissions.join(",")}`);
    if (hidden) return <></>;
    return <>Section Unavailable to Your User</>;
  }
  return <>{children}</>;
};
