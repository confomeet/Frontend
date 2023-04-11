import React from "react";
import { Box } from "components/muiComponents";
import Switcher from "components/materialComponents/Switcher";

export default function SubEventsToggle(props) {
  return (
    <Box width="50%" className="  d-flex align-center subswitcher">
      <Switcher
        label={Object.translate("LABEL.SHOW_SUB_EVENTS")}
        switchToggle={props.showSubEvents}
        handleSwitchChange={(checked) => {
          props.setShowSubEvents(checked);
        }}
        labelPlacement="start"
      />
    </Box>
  );
}
