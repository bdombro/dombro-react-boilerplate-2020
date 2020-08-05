import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { authDefaultValue, AuthState } from "../../state";
import loginMeta from "../Auth/routes/Login/meta";
import { DefaultComponent } from "./types";

const NotFound: DefaultComponent = (props) => {
  const { location } = props;
  const [auth, setAuth] = useRecoilState(AuthState);
  const logout = (_: React.MouseEvent<HTMLElement>) => setAuth(authDefaultValue);
  return (
    <>
      <h1>404: Not Found</h1>
      <div>
        The page you request is either non-existant or you don't have access.{" "}
        <Link to={`${loginMeta.path}?from=${location.pathname}`} onClick={logout}>
          {auth.username ? "Switch user?" : "Login?"}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
