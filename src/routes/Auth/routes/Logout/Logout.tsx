import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { BlankLayout } from "../../../../layout/BlankLayout";
import { authDefaultValue, authState } from "../../../../state";
import { meta as LoginMeta } from "../Login/meta";
import { meta } from "./meta";

const Logout: Logout = (props) => {
  const [, setAuth] = useRecoilState(authState);
  React.useEffect(() => {
    setAuth(authDefaultValue);
  }, [setAuth]);
  return (
    <BlankLayout meta={meta} routeProps={props}>
      <div>
        You have been logged out. <Link to={LoginMeta.path}>Log back in?</Link>
      </div>
    </BlankLayout>
  );
};
export default Logout;

export type LogoutProps = RouteComponentProps<{}>;
export type Logout = React.FC<LogoutProps>;
