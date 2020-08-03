import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { DefaultLayout } from "../../../layout/DefaultLayout";
import { TestComponent } from "./TestComponent";
import { TestForm } from "./TestForm";

const titleDefault = "HotReload Test";
const className = "admin hotreloadtest";

const Loaded: HotReloadTest = () => {
  return (
    <DefaultLayout title={titleDefault} className={className}>
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

const Loading: HotReloadTest = () => {
  return (
    <DefaultLayout title={titleDefault} className={className}>
      <div>Loading...</div>
    </DefaultLayout>
  );
};

const HotReloadTest: HotReloadTest = (props) => {
  return (
    <React.Suspense fallback={<Loading {...props} />}>
      <Loaded {...props} />
    </React.Suspense>
  );
};

export default HotReloadTest;

export type HotReloadTestProps = RouteComponentProps<{} /* for example id: string */>;
export type HotReloadTest = React.FC<HotReloadTestProps>;
