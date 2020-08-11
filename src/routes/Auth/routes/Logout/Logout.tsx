import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authDefaultValue, AuthState } from "../../../../state";
import LoginMeta from "../Login/meta";

const Logout: Logout = () => {
  const [, setAuth] = useRecoilState(AuthState);
  React.useEffect(() => {
    setAuth(authDefaultValue);
  }, [setAuth]);
  return (
    <>
      <div>
        You have been logged out. <Link to={LoginMeta.path}>Log back in?</Link>
      </div>
    </>
  );
};
export default Logout;

export type LogoutProps = {};
export type Logout = React.FC<LogoutProps>;
