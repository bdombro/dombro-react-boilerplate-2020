import React from "react";
import useMetaTags from "react-metatags-hook";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil/dist";

import PortalRoot from "./atoms/PortalRoot";
import PersistenceObserver, { initializeState } from "./compounds/PersistanceObserver";
import LoadingLayout from "./layout/LoadingLayout";
import siteMeta from "./siteMeta";
const Routes = React.lazy(() => import("./routes"));

function App() {
  useMetaTags(siteMeta, []);
  return (
    <RecoilRoot initializeState={initializeState}>
      <PersistenceObserver />
      <BrowserRouter>
        <React.Suspense fallback={<LoadingLayout variant="outer" percentLoaded={33} />}>
          <PortalRoot />
          <Routes />
        </React.Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
