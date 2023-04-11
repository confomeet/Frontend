import React, { memo } from "react";
import { Box } from "components/muiComponents";
import MoonLoader from "react-spinners/MoonLoader";

function Spinner() {
  return (
    <Box
      style={{
        position: "fixed",
        display: "flex",
        top: 0,
        bottom: 0,
        zIndex: 1800,
        backdropFilter: "blur(2px)",
        right: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MoonLoader
        color={"#82acc5"}
        loading={true}
        size={50}
        height={35}
        width={4}
        speedMultiplier={1}
      />
    </Box>
  );
}

export default memo(Spinner);
