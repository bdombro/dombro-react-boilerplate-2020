import React from "react";

export type ComponentAccessControlProps = {
  permissions?: string[];
  hidden?: boolean;
  children: React.ReactNode;
};
export type ComponentAccessControlComponent = React.FC<ComponentAccessControlProps>;
