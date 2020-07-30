import React from "react";
import useMetaTags from "react-metatags-hook";

import { useScrollRestore } from "../useScrollRestore";
import { Header } from "./Header";

type props = {
  title?: string;
  children: React.ReactNode;
};

export const LayoutDefault: React.FC<props> = (props) => {
  const { children, title } = props;
  useMetaTags({ title: `${title} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className="layout-default">
      <Header />
      <div id="scroll-div">
        {!!title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
};
