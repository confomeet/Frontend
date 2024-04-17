import { EditingState, ViewState } from "@devexpress/dx-react-scheduler";
import {
  AppointmentTooltip,
  Appointments,
  DateNavigator,
  DayView,
  EditRecurrenceMenu,
  MonthView,
  Scheduler,
  Toolbar,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Box, Paper } from "components/muiComponents";
import { useDidMountEffect } from "hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Calender.css";
import { BiCalendarStar, Flag } from "components/icons";
import {
  getADay,
  getAMonth,
  getAWeek,
  getThisMonth,
  getThisWeek,
  getToday,
  handleViewEvents,
} from "utils";
import GroupEvents from "../../meetingCard/GroupEvents";
import MeetingCard from "../../meetingCard/MeetingCard";
import EventsAccordion from "./EventsAccordion";
import calendarStyle from "./style";

const AppointmentTag = ({ data }) => {
  const calendarClasses = calendarStyle();

  if (data.isStart && data.subEventCount === 0 && data.topic)
    return (
      <Box
        className={
          data.isEnd
            ? calendarClasses.statusBoxCircul
            : calendarClasses.statusBox
        }
      >
        <span className={calendarClasses.isTopic}> {data.topic}</span>
        <br />
      </Box>
    );
  if (data.subEventCount > 0 && data.topic)
    return (
      <Box className={calendarClasses.statusBoxCircul}>
        <Flag />
        <span className={calendarClasses.isTopic}>{data.topic}</span>
      </Box>
    );

  if (data.isChunck && data.topic)
    return (
      <Box className={calendarClasses.ChunckBoxBg}>
        <span className={calendarClasses.isTopic}>{data.topic}</span>
      </Box>
    );

  if (data.isChunck && data.isEnd)
    return (
      <Box className={calendarClasses.isChunckBox}>
        {data.isChunck && <span></span>}
      </Box>
    );

  if (data.eventsGroup)
    return (
      <Box className={calendarClasses.eventsGroup}>
        <span> {data.topic}</span>
      </Box>
    );
};
function Calendar({startDate, endDate, handleCalandarViewChange, ...props}) {
  const isSmallScreen = window.innerWidth <= 600;

  const [data, setData] = useState([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState(null);
  const [currentViewName, setCurrentViewName] = useState("CALENDAR.MONTH");

  const calendarClasses = calendarStyle();

  const handleDateEventsChange = (data) => (event) => {
    setSelectedDateEvents(data);
    window.scrollIntoRef(event, "#events-accordion", "start");
  };
  const AppointmentContent = ({ ...restProps }) => {
    const { data } = restProps;
    if (!data) return;
    if (isSmallScreen)
      return (
        <Box className={calendarClasses.reminderBox}>
          <BiCalendarStar onClick={handleDateEventsChange(data)} />
        </Box>
      );
    switch (currentViewName) {
      case "CALENDAR.DAY":
        return (
          <Appointments.AppointmentContent {...restProps}>
            <AppointmentTag data={data} />
          </Appointments.AppointmentContent>
        );
      case "CALENDAR.WEEK":
        return (
          <Appointments.AppointmentContent {...restProps}>
            {data.isStart && data.subEventCount === 0 && data.topic && (
              <Box
                className={
                  data.isEnd
                    ? calendarClasses.statusBoxCircul
                    : calendarClasses.statusBox
                }
              >
                <span className={calendarClasses.isStart}>{data.orderNo}</span>
                <span className={calendarClasses.isTopic}> {data.topic}</span>
                <br />
              </Box>
            )}
            {data.subEventCount > 0 && data.topic && (
              <Box className={calendarClasses.statusBoxCircul}>
                <Flag />
                <span className={calendarClasses.isTopic}>{data.topic}</span>
              </Box>
            )}
            {data.isChunck && data.topic && (
              <Box className={calendarClasses.ChunckBoxBg}>
                <span className={calendarClasses.isTopic}>{data.topic}</span>
              </Box>
            )}
            {data.isChunck && data.isEnd && (
              <Box className={calendarClasses.isChunckBox}>
                {data.isChunck && <span></span>}
              </Box>
            )}
            {data.eventsGroup && (
              <Box className={calendarClasses.eventsGroup}>
                <span> {data.topic}</span>
              </Box>
            )}
          </Appointments.AppointmentContent>
        );

      case "CALENDAR.MONTH":
        return (
          <Box>
            <Appointments.AppointmentContent {...restProps}>
              {data.isStart && data.topic && (
                <Box
                  className={
                    data.isEnd
                      ? calendarClasses.statusBoxCircul
                      : calendarClasses.statusBox
                  }
                >
                  <span className={calendarClasses.isTopic}>{data.topic}</span>
                </Box>
              )}
              {data.isChunck && data.topic && (
                <Box className={calendarClasses.ChunckBoxBg}>
                  <span className={calendarClasses.isTopic}>{data.topic}</span>
                </Box>
              )}
              {data.eventsGroup && (
                <Box className={calendarClasses.statusBoxCircul}>
                  <span> {data.topic}</span>
                </Box>
              )}
            </Appointments.AppointmentContent>
          </Box>
        );

      default:
        return;
    }
  };

  const Content = (data) => {
    console.log("rendering Content " + JSON.stringify(data));
    if (!data) return null;
    if (isSmallScreen) return null;

    if (data.appointmentData.eventsGroup)
      return <GroupEvents {...props} data={data.appointmentData.eventsGroup} />;
    return (
      <MeetingCard
        {...props}
        parentEvent={props.getParentEvent(data.appointmentData)}
        data={data.appointmentData}
      />
    );
  };

  const viewCommonProps = {
    startDayHour: 0,
    endDayHour: 24,
    cellDuration: 60,
  };

  const onCurrentDateChange = (date) =>
    onCurrentViewNameChange(currentViewName, date);

  const onCurrentViewNameChange = (viewName, date) => {
    setCurrentViewName(viewName);
    switch (viewName) {
      case "CALENDAR.WEEK":
        handleCalandarViewChange(date ? getAWeek(date) : getThisWeek());
        return;

      case "CALENDAR.MONTH":
        handleCalandarViewChange(date ? getAMonth(date) : getThisMonth());
        return;

      case "CALENDAR.DAY":
        handleCalandarViewChange(date ? getADay(date) : getToday());
        return;

      default:
        return;
    }
  };

  const TimeTableCell = ({ onDoubleClick, ...cellProps }) => {
    return (
      <MonthView.TimeTableCell
        {...cellProps}
        onDoubleClick={() => {
          if (
            cellProps?.today ||
            new Date(cellProps?.startDate).getTime() > new Date().getTime()
          )
            props.setCalendarCellClickData(cellProps);
        }}
      />
    );
  };

  useEffect(() => {
    if (currentViewName === "CALENDAR.MONTH") {
      setData(
        handleViewEvents(
          props.meetings,
          isSmallScreen ? 0 : 2,
          props.allMeetings
        )
      );
      return;
    }

    setData(handleViewEvents(props.meetings, 100, props.allMeetings));
  }, [props.meetings]);

  return (
    <Paper
      className={
        currentViewName === "CALENDAR.MONTH"
          ? calendarClasses.calendar
          : calendarClasses.DayWeekCalendar
      }
    >
      <Scheduler
        locale={localStorage.getItem("lange") ?? "en"}
        data={data}
        style={{ zIndex: "1111" }}
        firstDayOfWeek={1}
      >
        <ViewState
          currentDate={startDate}
          onCurrentDateChange={(date) => onCurrentDateChange(date)}
          currentViewName={currentViewName}
          onCurrentViewNameChange={(viewName) => {
            onCurrentViewNameChange(viewName);
          }}
        />
        <MonthView
          {...viewCommonProps}
          name={"CALENDAR.MONTH"}
          displayName={Object.translate("CALENDAR.MONTH")}
          timeTableCellComponent={TimeTableCell}
        />
        <WeekView
          {...viewCommonProps}
          name={"CALENDAR.WEEK"}
          displayName={Object.translate("CALENDAR.WEEK")}
        />
        <DayView
          {...viewCommonProps}
          name={"CALENDAR.DAY"}
          displayName={Object.translate("CALENDAR.DAY")}
        />
        <Appointments appointmentContentComponent={AppointmentContent} />
        {!isSmallScreen && (
          <AppointmentTooltip
            contentComponent={Content}
            commandButtonComponent={AppointmentTooltip.CommandButton}
            showCloseButton
          />
        )}
        <Toolbar />
        <DateNavigator />
      </Scheduler>

      {/* Show list of events below the calendar on view port with width < 600px */}
      {isSmallScreen && selectedDateEvents && <EventsAccordion
        events={selectedDateEvents}
        isSmallScreen={isSmallScreen}
        {...props}
      />
      }
      {/* Add a scroll anchor */}
      <div id="events-accordion" />
    </Paper>
  );
}

export default Calendar;
