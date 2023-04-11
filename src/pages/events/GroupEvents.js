import FullPagination from "components/fullPagination/FullPagination";
import { Box } from "components/muiComponents";
import MeetingsCard from "components/meetingCard/MeetingCard";
import { DisplayType as MeetingsDisplayType } from "constantData";
import React, { useMemo } from "react";
import actions from "redux/actions";
import CalendarView from "./CalendarView";
import TableView from "./TableView";

const { joinMeeting } = actions;

const GroupEvents = ({
  view,
  paginate,
  data,
  handlePaginationClick,
  handleRowsPerPage,
  ...props
}) => {
  const getParentEvent = (event) => {
    const parentEvent = event?.parentEventId
      ? data.filter((d) => d.id === event.parentEventId)[0]
      : null;
    return parentEvent;
  };

  const ContentSection = useMemo(
    () =>
      paginate.requiredArr.map((item, index) => (
        <MeetingsCard
          key={index}
          data={item}
          parentEvent={getParentEvent(item)}
          joinMeeting={window.goToMeeting}
          {...props}
        />
      )),
    [paginate.requiredArr]
  );
  switch (view) {
    case MeetingsDisplayType.table:
      return (
        <>
          <TableView data={data} {...props} />
        </>
      );

    case MeetingsDisplayType.grid:
      return (
        <>
          <Box marginY={4} className="d-flex flex-wrap" marginBottom={4}>
            {ContentSection}
          </Box>
          <FullPagination
            count={paginate.pgCount}
            page={props.pageNum}
            variant="outlined"
            shape="rounded"
            handlePaginationClick={handlePaginationClick}
            value={props.rowsPerPage}
            handleRowsPerPage={handleRowsPerPage}
          />
        </>
      );

    case MeetingsDisplayType.calendar:
    default:
      return (
        <CalendarView
          data={data}
          getParentEvent={(appointmentData) => getParentEvent(appointmentData)}
          joinMeeting={window.goToMeeting}
          {...props}
        />
      );
  }
};

export default GroupEvents;
