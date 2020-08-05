import React from "react";
import { hot } from "react-hot-loader";
import useMetaTags from "react-metatags-hook";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil/dist";

import PortalRoot from "./atoms/PortalRoot";
import Stacks from "./routes";

function App() {
  useMetaTags(
    {
      title: "Boilerplate",
      description: "A complete boilerplate for react without styles, ready to be customized.",
      metas: [
        { name: "keywords", content: "a, list, of, keywords" },
        { name: "robots", content: "index, follow" },
        { name: "DC.Title", content: "Boilerplate" },
        { name: "url", content: window.location.href },
      ],
      links: [{ rel: "canonical", href: window.location.href }],
      openGraph: {
        title: "Boilerplate",
        image: "http://yourwebsite.com/ogimage.jpg",
      },
      twitter: {
        card: "summary",
        creator: "@you",
        title: "Boilerplate",
      },
    },
    []
  );
  return (
    <RecoilRoot>
      <BrowserRouter>
        <PortalRoot />
        <Stacks />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default hot(module)(App);
