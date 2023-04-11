import React from "react";
import ToggleButtons from "components/materialComponents/ToggleButtons";
import { Box } from "components/muiComponents";
import {
  MultipleUsers,
  BsGridFill,
  IoCalendarClear,
  TiThMenu,
} from "components/icons";
import { eventsStyles } from "../style";
import { DisplayType as MeetingsDisplayType } from "constantData";
import { BsCalendarRange } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";
const MeetingToggleButtons = [
  {
    value: MeetingsDisplayType.calendar,
    label: MeetingsDisplayType.calendar,
    icon: <BsCalendarRange />,
    Tooltip: "Calender",
    arTooltip: "تقويم",
  },
  {
    value: MeetingsDisplayType.table,
    label: MeetingsDisplayType.table,
    icon: <TiThMenu />,
    Tooltip: "Table",
    arTooltip: "جدول",
  },
  {
    value: MeetingsDisplayType.grid,
    label: MeetingsDisplayType.grid,
    icon: <FiGrid />,
    Tooltip: "Cards",
    arTooltip: "بطاقات",
  },
];

export default function ViewButtons(props) {
  const classes = eventsStyles();
  return (
    <Box className={props.className || classes.MeetingButtonsGroup}>
      <ToggleButtons
        view={props.view}
        handleChange={props.handleChange}
        btns={MeetingToggleButtons}
      />
    </Box>
  );
}
