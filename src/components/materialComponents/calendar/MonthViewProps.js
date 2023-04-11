import React from "react";
import { MonthView } from "@devexpress/dx-react-scheduler-material-ui";

export const DayScaleCell = (props) => {
  return <MonthView.DayScaleCell {...props} />;
};

export const TimeTableCell = ({ children, ...props }) => {
  return (
    <MonthView.TimeTableCell {...props}>{children}</MonthView.TimeTableCell>
  );
};
