import React from "react";
import ToggleButtons from "components/materialComponents/ToggleButtons";
import { Box } from "components/muiComponents";
import { BsFlagFill } from "components/icons";
import { eventsStyles } from "../style";
import { DisplayType as MeetingsDisplayType } from "constantData";

const MeetingGroupButtons = [
  {
    value: MeetingsDisplayType.group,
    label: MeetingsDisplayType.group,
    icon: <BsFlagFill />,
    Tooltip: "Grouping",
    arTooltip: "تصنيف",
  },
];

export default function GroupingButton(props) {
  const classes = eventsStyles();
  if (props.view !== MeetingsDisplayType.grid) return null;
  return (
    <Box className={classes.FlagButton}>
      <ToggleButtons
        view={props.groupByList.open}
        handleChange={(e, nextView) => {
          props.groupByList.open
            ? props.handleGroupByChange()
            : props.handleGroupByChange(nextView);
        }}
        btns={MeetingGroupButtons}
      />
    </Box>
  );
}
