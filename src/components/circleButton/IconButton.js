import React from "react";
import { Fab } from "components/muiComponents";

export default function CircleButton({
  icon,
  onClick,
  variant,
  className,
  disabled,
}) {
  return (
    <Fab
      className={className}
      onClick={onClick}
      variant={variant}
      color="primary"
      disabled={disabled}
    >
      {icon}
    </Fab>
  );
}
