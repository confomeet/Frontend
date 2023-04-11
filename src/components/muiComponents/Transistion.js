import React, { forwardRef } from "react";
import { Slide } from "./index";

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction={"up"} ref={ref} {...props} />;
});
