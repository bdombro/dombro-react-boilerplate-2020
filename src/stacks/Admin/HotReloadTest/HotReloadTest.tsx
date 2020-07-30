import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { LayoutDefault } from "../../../layout/LayoutDefault";
import { TestComponent } from "./TestComponent";
import { TestForm } from "./TestForm";

type RouteParams = {}; // for example id: string

const HotReloadTest: React.FC<RouteComponentProps<RouteParams>> = () => {
  return (
    <LayoutDefault title="HotReloadTest">
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
    </LayoutDefault>
  );
};
export default HotReloadTest;
