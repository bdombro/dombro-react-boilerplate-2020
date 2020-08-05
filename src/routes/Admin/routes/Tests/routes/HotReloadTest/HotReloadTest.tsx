import React from "react";

import { TestComponent } from "./compounds/TestComponent";
import { TestForm } from "./compounds/TestForm";
import { DefaultComponent } from "./types";

const Component: DefaultComponent = (props) => {
  return (
    <>
      <div>Test:</div>
      <ol>
        <li>Add test to the input below</li>
        <li>Change the text in the source file of TestComponent.tsx</li>
        <li>If the input text you entered before is preserved, then hot-reload is 100% working!</li>
      </ol>
      <TestForm />
      <TestComponent />
    </>
  );
};

export default Component;
