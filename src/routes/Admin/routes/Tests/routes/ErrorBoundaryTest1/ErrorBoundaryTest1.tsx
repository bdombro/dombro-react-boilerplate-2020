import React from "react";

import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  const [error, setError] = React.useState();
  if (error) throw error;

  const throwError = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      throw new Error("AhhH!");
    } catch (err) {
      setError(err);
    }
  }, []);

  return (
    <>
      <div>
        <a href="error" onClick={throwError}>
          Click Here
        </a>{" "}
        to throw an async error.
      </div>
    </>
  );
};

export default Component;
