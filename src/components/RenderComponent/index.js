import React from "react";

export default function RenderComp({ dispaly, component: Component }) {
  if (!dispaly) return null;
  if (!Component) return <></>;
  return <Component />;
}
