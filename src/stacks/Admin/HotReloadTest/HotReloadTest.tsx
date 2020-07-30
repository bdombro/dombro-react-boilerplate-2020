import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { TestForm } from "./TestForm";
import { TestComponent } from "./TestComponent";

type RouteParams = {}; // for example id: string

const HotReloadTest: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <div>
      <h1>HotReloadTest</h1>
      <div>Test:</div>
      <ol>
        <li>Add test to the input below</li>
        <li>Change the text in the source file of TestComponent.tsx</li>
        <li>
          If the input text you entered before is preserved, then hot-reload is
          100% working!
        </li>
      </ol>
      <TestForm />
      <TestComponent />
    </div>
  );
};
export default HotReloadTest;
