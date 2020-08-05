import React from "react";

import { DefaultComponent } from "./types";

const Component: DefaultComponent = ({ routeMeta }) => <div className={`layout-blank ${routeMeta.slug}`} />;
export default Component;
