import React from "react";
import useMetaTags from "react-metatags-hook";

import { useScrollRestore } from "../useScrollRestore";
import { Header } from "./Header";

export const DefaultLayout: DefaultLayout = (props) => {
  const { className, children, title } = props;
  useMetaTags({ title: `${title} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-default ${className}`}>
      <Header />
      <div id="scroll-div">
        {!!title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export type DefaultLayoutProps = {
  className: string;
  title: string;
  children: React.ReactNode;
};
export type DefaultLayout = React.FC<DefaultLayoutProps>;
