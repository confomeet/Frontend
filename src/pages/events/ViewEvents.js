import InternalDrawer from "common/InternalDrawer";
import FullPagination from "components/fullPagination/FullPagination";
import MeetingsCard from "components/meetingCard/MeetingCard";
import { Box } from "components/muiComponents";
import { DisplayType as MeetingsDisplayType } from "constantData";
import { useMemo } from "react";
import CalendarView from "./CalendarView";
import TableView from "./TableView";

const ViewEvents = ({
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
        <Box>
          <MeetingsCard
            key={index}
            data={item}
            dataArr={paginate.requiredArr}
            parentEvent={getParentEvent(item)}
            joinMeeting={window.goToMeeting}
            {...props}
          />
        </Box>
      )),
    [paginate.requiredArr, props]
  );

  switch (props.view) {
    case MeetingsDisplayType.table:
      return <TableView data={data} {...props} />;

    case MeetingsDisplayType.grid:
      return (
        <Box
          className="d-flex full-height groupByPage"
          sx={{ marginTop: "20px", paddingBottom: "100px" }}
        >
          <Box sx={{ flex: "auto" }}>
            <Box sx={{ alignItems: "flex-start" }} className="d-flex flex-wrap">
              {ContentSection}
            </Box>

            <Box className="boxPagination">
              <FullPagination
                count={paginate.pgCount}
                page={props.pageNum}
                variant="outlined"
                shape="rounded"
                handlePaginationClick={handlePaginationClick}
                rowsPerPage={props.rowsPerPage}
                handleRowsPerPage={handleRowsPerPage}
              />
            </Box>
          </Box>

          {props.groupByList.open && (
            <Box
              sx={{ alignItems: "flex-start", justifyContent: "center" }}
              className="d-flex flex-wrap full-height "
            >
              <InternalDrawer {...props} />
            </Box>
          )}
        </Box>
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

export default ViewEvents;
