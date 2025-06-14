import React, { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MapSidebar = (props: Props) => {
  return props.children;
};

export default MapSidebar;
