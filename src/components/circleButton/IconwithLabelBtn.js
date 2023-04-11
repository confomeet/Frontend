import React from "react";
import { Fab } from "components/muiComponents";
import { useTheme } from "@mui/styles";

export default function ExtendedButton({
  icon,
  onClick,
  label,
  className,
  disabled,
}) {
  const theme = useTheme();
  return (
    <Fab
      size="medium"
      className={className}
      onClick={onClick}
      disabled={disabled}
      variant="extended"
      color={`${theme.palette.primary.main}!important`}
    >
      {icon}
      {label}
    </Fab>
  );
}
