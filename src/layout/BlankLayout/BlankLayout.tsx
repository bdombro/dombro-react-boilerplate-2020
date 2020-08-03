import React from "react";
import useMetaTags from "react-metatags-hook";

import { useScrollRestore } from "../useScrollRestore";

export const BlankLayout: BlankLayout = (props) => {
  const { title, className, children } = props;
  useMetaTags({ title: `${title} - Boilerplate` }, []);
  useScrollRestore();
  return (
    <div className={`layout-blank ${className}`}>
      <div id="scroll-div">
        <React.Suspense fallback={<div />}>{children}</React.Suspense>
      </div>
    </div>
  );
};

export type BlankLayoutProps = {
  title: string;
  className: string;
  children: React.ReactNode;
};
export type BlankLayout = React.FC<BlankLayoutProps>;
