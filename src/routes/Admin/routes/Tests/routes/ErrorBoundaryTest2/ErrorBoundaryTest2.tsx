import React from "react";

import Inner from "./atoms/WithError";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  return (
    <>
      <div>This test show how an inner component can have it's own error boundary.</div>
      <div style={{ background: "gray" }}>
        <Inner />
      </div>
    </>
  );
};

export default Component;
