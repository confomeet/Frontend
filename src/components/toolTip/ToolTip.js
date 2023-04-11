import React from "react";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip
    disableFocusListener
    {...props}
    arrow
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function ToolTip(props) {
  return (
    <BootstrapTooltip placement={props.placement} title={props.title}>
      <div style={{ cursor: "pointer" }}>{props.children}</div>
    </BootstrapTooltip>
  );
}
