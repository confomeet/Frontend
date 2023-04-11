import * as React from "react";
import { Box, SpeedDial, SpeedDialAction } from "components/muiComponents";

export default function ButtonList({ actions, icon }) {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial ariaLabel="SpeedDial" icon={icon}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
