import React from "react";
import Skeleton from "react-loading-skeleton";

import { DefaultComponent } from "./types";

export const Loading: DefaultComponent = () => {
  return (
    <div>
      <h1>
        <Skeleton width={300} />
      </h1>
      <ul>
        <li>
          <Skeleton width={100} />
        </li>
        <li>
          <Skeleton width={100} />
        </li>
      </ul>
    </div>
  );
};
export default Loading;
