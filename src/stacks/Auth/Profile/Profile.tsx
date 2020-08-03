import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { DefaultLayout } from "../../../layout/DefaultLayout";
import { authState } from "../../../state";

const titleDefault = "Profile";
const className = "profile";

const Profile: Profile = (props) => {
  const { history, location } = props;
  const [auth] = useRecoilState(authState);
  if (!auth.username) history.push(`/auth/login?from=${location.pathname}`);
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Welcome to your profile, {auth.username}!</div>
      <ul>
        <li>
          <Link to="/">Goto home</Link>
        </li>
      </ul>
    </DefaultLayout>
  );
};

export default Profile;

export type ProfileProps = RouteComponentProps<{} /* for example id: string */>;
export type Profile = React.FC<ProfileProps>;
