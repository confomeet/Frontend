import { useMemo } from "react";
import { handleSubEvebtsFilter } from "redux/network/functions";
import Calendar from "../../components/materialComponents/calendar";

function CalendarView({ data, handleSearch, searchParams, ...props }) {
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
      {...props}
      meetings={meetings}
      allMeetings={allMeetings}
      handleCalandarViewChange={handleSearch}
      startDate={searchParams.startDate}
      endDate={searchParams.endDate}
    />
  );
}

export default CalendarView;
