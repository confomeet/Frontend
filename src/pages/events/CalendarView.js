import { useMemo } from "react";
import { handleSubEvebtsFilter } from "redux/network/functions";
import Calendar from "../../components/materialComponents/calendar";

function CalendarView({ data, handleSearch, ...props }) {
  const { meetings, allMeetings } = useMemo(
    () => ({
      meetings: handleSubEvebtsFilter(data, props?.showSubEvents),
      allMeetings: data,
    }),
    [data, props?.showSubEvents]
  );

  return (
    <Calendar
      className="calendar"
      meetings={meetings}
      allMeetings={allMeetings}
      getParentEvent={props.getParentEvent}
      joinMeeting={props.joinMeeting}
      handleCalandarViewChange={handleSearch}
      startDate={props.searchParams.startDate}
      endDate={props.searchParams.endDate}
      {...props}
    />
  );
}

export default CalendarView;
