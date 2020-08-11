import React from "react";
import { useRecoilValue } from "recoil/dist";

import BlankLayout from "../../layout/BlankLayout";
import DefaultLayout from "../../layout/DefaultLayout";
import { AuthState } from "../../state/authState";
import RouteAccessControl from "../Auth/compounds/RouteAccessControl";
import Loading from "./Loading";
import routeMeta from "./meta";

const Loaded = React.lazy(() => import("./NotFound"));

const Component: React.FC = () => {
  const auth = useRecoilValue(AuthState);
  let Layout = auth.username ? DefaultLayout : BlankLayout;
  return (
    <RouteAccessControl routeMeta={routeMeta}>
      <Layout routeMeta={routeMeta}>
        <React.Suspense fallback={<Loading />}>
          <Loaded />
        </React.Suspense>
      </Layout>
    </RouteAccessControl>
  );
};
export default Component;
