import React from "react";

import { DefaultLayout } from "../../../../../../layout/DefaultLayout";
import { TestComponent } from "./compounds/TestComponent";
import { TestForm } from "./compounds/TestForm";
import { meta } from "./meta";
import { DefaultComponent } from "./types";

const HotReloadTest: DefaultComponent = (props) => {
  return (
    <DefaultLayout meta={meta}>
      <div>Test:</div>
      <ol>
        <li>Add test to the input below</li>
        <li>Change the text in the source file of TestComponent.tsx</li>
        <li>If the input text you entered before is preserved, then hot-reload is 100% working!</li>
      </ol>
      <TestForm />
      <TestComponent />
    </DefaultLayout>
  );
};

export default HotReloadTest;
