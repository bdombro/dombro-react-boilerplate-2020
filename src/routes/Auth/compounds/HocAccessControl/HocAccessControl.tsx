import { difference } from "lodash-es";
import React from "react";
import { useRecoilState } from "recoil/dist";

import { authState } from "../../../../state/authState";
import { ComponentAccessControlComponent } from "./types";

export const HocAccessControl: ComponentAccessControlComponent = (props) => {
  const { permissions, children, hidden = true } = props;
  const [auth] = useRecoilState(authState);
  const missingPermissions = difference(permissions, auth.permissions);
  if (missingPermissions.length) {
    console.debug(`ComponentAccessControl: Blocked by ${missingPermissions.join(",")}`);
    if (hidden) return <></>;
    return <>Section Unavailable to Your User</>;
  }
  return <>{children}</>;
};
