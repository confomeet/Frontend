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
  ViewSwitcher,
  WeekView,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Box, Button, Dialog, Paper } from "components/muiComponents";
import { useDidMountEffect } from "hooks";
import { useSelector } from "react-redux";
import { Flag } from "components/icons";
import { useEffect, useState } from "react";
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
import calendarStyle from "./style";

function Calendar(props) {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);

  const [data, setData] = useState(handleViewEvents(props.meetings));

  const [currentViewName, setCurrentViewName] = useState("CALENDAR.MONTH");
  const [currentViewDateRange, setCurrentViewDateRange] = useState({
    startDate: props.startDate,
    endDate: props.endDate,
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [deletedAppointmentId, setDeletedAppointmentIdState] =
    useState(undefined);
  const [editingAppointment, setEditingAppointment] = useState(undefined);
  const [startDayHour] = useState(0);
  const [endDayHour] = useState(24);

  const calendarClasses = calendarStyle();

  const onEditingAppointmentChange = (editingAppointment) => {
    setEditingAppointment(editingAppointment);
  };

  const onAddedAppointmentChange = (addedAppointment) => {
    setEditingAppointment(undefined);
  };

  const setDeletedAppointmentId = (id) => {
    setDeletedAppointmentIdState(id);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const commitDeletedAppointment = () => {
    let nextData = data.filter(
      (appointment) => appointment.id !== deletedAppointmentId
    );
    setData(nextData);
    setDeletedAppointmentId(null);
    toggleConfirmationVisible();
  };

  const commitChanges = ({ added, changed, deleted }) => {
    let newData = data;
    if (added) {
      let startingAddedId =
        data?.length > 0 ? data[data?.length - 1].id + 1 : 0;
      newData = [...data, { id: startingAddedId, ...added }];
    }

    if (changed) {
      newData = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      setDeletedAppointmentId(deleted);
      toggleConfirmationVisible();
    }

    setData(newData);
  };

  const AppointmentContent = ({ ...restProps }) => {
    const { data } = restProps;
    if (!data) return;
    switch (currentViewName) {
      case "CALENDAR.DAY":
      case "CALENDAR.WEEK":
        return (
          <Appointments.AppointmentContent {...restProps}>
            {data.topic && (
              <Box className={calendarClasses.statusBox}>{data.topic}</Box>
            )}
          </Appointments.AppointmentContent>
        );

      case "CALENDAR.MONTH":
        return (
          <Box className={calendarClasses.AppointmentContentBox}>
            <Appointments.AppointmentContent {...restProps}>
              {data.isStart && data.subEventCount === 0 && data.topic && (
                <Box
                  className={
                    data.isEnd
                      ? calendarClasses.statusBoxCircul
                      : calendarClasses.statusBox
                  }
                >
                  <span className={calendarClasses.isStart}>
                    {data.orderNo}
                  </span>
                  <span className={calendarClasses.isTopic}> {data.topic}</span>
                </Box>
              )}
              {data.subEventCount > 0 && data.topic && (
                <Box className={calendarClasses.statusBoxCircul}>
                  <Flag />
                  <span className={calendarClasses.isTopic}>{data.topic}</span>
                </Box>
              )}
              {data.isStart && data.isEnd && (
                <Box className={calendarClasses.maxWidth}></Box>
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
          </Box>
        );

      default:
        return;
    }
  };

  const Content = (data) => {
    if (!data) return null;

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
    startDayHour,
    endDayHour,
    cellDuration: 120,
  };

  const onCurrentDateChange = (date) =>
    onCurrentViewNameChange(currentViewName, date);

  const onCurrentViewNameChange = (viewName, date) => {
    setCurrentViewName(viewName);
    switch (viewName) {
      case "CALENDAR.WEEK":
        setCurrentViewDateRange(date ? getAWeek(date) : getThisWeek());
        return;

      case "CALENDAR.MONTH":
        setCurrentViewDateRange(date ? getAMonth(date) : getThisMonth());
        return;

      case "CALENDAR.DAY":
        setCurrentViewDateRange(date ? getADay(date) : getToday());
        return;

      default:
        return;
    }
  };

  useEffect(() => {
    if (currentViewName === "CALENDAR.MONTH") {
      setData(handleViewEvents(props.meetings));
      return;
    }
    setData(handleViewEvents(props.meetings, 100));
  }, [props.meetings]);

  useDidMountEffect(
    () =>
      props.handleCalandarViewChange &&
      props.handleCalandarViewChange(currentViewDateRange),
    [currentViewDateRange]
  );
  useEffect(() => {
    if (
      props.startDate === currentViewDateRange.startDate &&
      props.endDate === currentViewDateRange.endDate
    )
      return;

    setCurrentViewDateRange({
      startDate: props.startDate,
      endDate: props.endDate,
    });
  }, [props.startDate, props.endDate]);

  return (
    <Paper className={calendarClasses.calendar}>
      <Scheduler
        locale={isRTL ? "ar-AE" : "en-US"}
        data={data}
        style={{ zIndex: "1111" }}
        firstDayOfWeek={1}
      >
        <ViewState
          currentDate={currentViewDateRange.startDate}
          onCurrentDateChange={(date) => onCurrentDateChange(date)}
          currentViewName={currentViewName}
          onCurrentViewNameChange={(viewName) => {
            onCurrentViewNameChange(viewName);
          }}
        />
        <EditingState
          onCommitChanges={commitChanges}
          onEditingAppointmentChange={onEditingAppointmentChange}
          onAddedAppointmentChange={onAddedAppointmentChange}
        />
        <MonthView
          {...viewCommonProps}
          name={"CALENDAR.MONTH"}
          displayName={Object.translate("CALENDAR.MONTH")}
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
        <EditRecurrenceMenu />
        <Appointments appointmentContentComponent={AppointmentContent} />
        <AppointmentTooltip
          contentComponent={Content}
          commandButtonComponent={AppointmentTooltip.CommandButton}
          showCloseButton
        />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
      </Scheduler>
      <Dialog
        open={confirmationVisible}
        title={"Delete Appointment"}
        contentText={"Are you sure you want to delete this appointment?"}
        actions={
          <>
            <Button
              onClick={toggleConfirmationVisible}
              color="primary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={commitDeletedAppointment}
              color="secondary"
              variant="outlined"
            >
              Delete
            </Button>
          </>
        }
      ></Dialog>
    </Paper>
  );
}

export default Calendar;
