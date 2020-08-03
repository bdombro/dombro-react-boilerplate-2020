import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil/dist";

import { DefaultLayout } from "../../../layout/DefaultLayout";
import { authState } from "../../../state";
import NotFound from "../../NotFound";
import { TestComponent } from "./TestComponent";
import { TestForm } from "./TestForm";

const titleDefault = "HotReload Test";
const className = "admin hotreloadtest";

const HotReloadTest: HotReloadTest = (props) => {
  const [auth] = useRecoilState(authState);
  if (!auth.permissions.includes("admin.hotReloadTest")) return <NotFound {...props} />;
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

export default HotReloadTest;

export type HotReloadTestProps = RouteComponentProps<{} /* for example id: string */>;
export type HotReloadTest = React.FC<HotReloadTestProps>;
