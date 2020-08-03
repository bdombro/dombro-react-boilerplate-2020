import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { BlankLayout } from "../../layout/BlankLayout";
import { authDefaultValue, authState } from "../../state";

const titleDefault = "404: NotFound";
const className = "notfound";

const NotFound: NotFound = (props) => {
  const { location } = props;
  const [auth, setAuth] = useRecoilState(authState);
  const logout = (_: React.MouseEvent<HTMLElement>) => setAuth(authDefaultValue);
  return (
    <BlankLayout title={titleDefault} className={className}>
      <h1>404: Not Found</h1>
      <div>The page you request is either non-existant or you don't have access.</div>
      <div>
        <Link to={`/auth/login?from=${location.pathname}`} onClick={logout}>
          {auth.username ? "Switch user?" : "Login?"}
        </Link>
      </div>
    </BlankLayout>
  );
};

export default NotFound;

export type NotFoundProps = RouteComponentProps<{} /* for example id: string */>;
export type NotFound = React.FC<NotFoundProps>;
