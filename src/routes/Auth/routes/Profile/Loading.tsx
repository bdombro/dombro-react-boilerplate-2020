import React from "react";

import LoadingSkeleton from "../../../../molecules/LoadingSkeleton";
import { DefaultComponent } from "./types";

export const Component: DefaultComponent = () => {
  return (
    <div>
      <h1>
        <LoadingSkeleton width={300} height={40} />
      </h1>
      <ul>
        <li>
          <LoadingSkeleton width={100} />
        </li>
        <li>
          <LoadingSkeleton width={100} />
        </li>
      </ul>
    </div>
  );
};
export default Component;
