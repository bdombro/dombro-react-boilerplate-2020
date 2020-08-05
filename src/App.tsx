import React from "react";
import { hot } from "react-hot-loader";
import useMetaTags from "react-metatags-hook";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil/dist";

import PortalRoot from "./atoms/PortalRoot";
import PersistenceObserver, { initializeState } from "./compounds/PersistanceObserver";
import Stacks from "./routes";
import siteMeta from "./siteMeta";

function App() {
  useMetaTags(siteMeta, []);
  return (
    <RecoilRoot initializeState={initializeState}>
      <PersistenceObserver />
      <BrowserRouter>
        <PortalRoot />
        <Stacks />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default hot(module)(App);
