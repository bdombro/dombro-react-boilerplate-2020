import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { BlankLayout } from "../../layout/BlankLayout";
import { authDefaultValue, authState } from "../../state";

const titleDefault = "Logout";
const className = "auth logout";

const Logout: Logout = () => {
  const [, setAuth] = useRecoilState(authState);
  React.useEffect(() => {
    setAuth(authDefaultValue);
  }, [setAuth]);
  return (
    <BlankLayout className={className} title={titleDefault}>
      <div>
        You have been logged out. <Link to="/auth/login">Log back in?</Link>
      </div>
    </BlankLayout>
  );
};
export default Logout;

export type LogoutProps = RouteComponentProps<{}>;
export type Logout = React.FC<LogoutProps>;
