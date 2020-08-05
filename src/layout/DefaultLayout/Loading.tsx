import React from "react";

import { DefaultComponent } from "./types";

const Component: DefaultComponent = ({ routeMeta }) => <div className={`layout-default ${routeMeta.slug}`} />;
export default Component;
