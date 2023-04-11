/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-unused-state */
import React, { useState, useEffect } from "react";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Box } from "@mui/material";
import { ButtonMui } from "components/muiComponents";
import { Paper, Dialog, Button, Fab } from "components/muiComponents";
import { AddIcon } from "components/icons";

const PREFIX = "Demo";
const classes = {
  content: `${PREFIX}-content`,
  header: `${PREFIX}-header`,
  closeButton: `${PREFIX}-closeButton`,
  buttonGroup: `${PREFIX}-buttonGroup`,
  button: `${PREFIX}-button`,
  picker: `${PREFIX}-picker`,
  wrapper: `${PREFIX}-wrapper`,
  icon: `${PREFIX}-icon`,
  textField: `${PREFIX}-textField`,
  addButton: `${PREFIX}-addButton`,
  cardContent: `${PREFIX}-cardContent`,
  justifyButtons: `${PREFIX}-justifyButtons`,
};

function Calendar(props) {
  const [data, setData] = useState(props.meetings);
  const [currentDate, setCurrentDate] = useState("2022-03-01");
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [addParticipantsVisible, setAddParticipantsVisible] = useState(false);

  const [deletedAppointmentId, setDeletedAppointmentIdState] =
    useState(undefined);
  const [editingAppointment, setEditingAppointment] = useState(undefined);
  const [addedAppointment, setAddedAppointment] = useState({});
  const [startDayHour, setStartDayHour] = useState(0);
  const [endDayHour, setEndDayHour] = useState(24);
  const [isNewAppointment, setIsNewAppointment] = useState(false);

  useEffect(() => {
    setData(props.meetings);
  }, [props.meetings]);

  const onAddedAppointmentChange = (addedAppointment) => {
    setAddedAppointment(addedAppointment);
    setEditingAppointment(undefined);
    setIsNewAppointment(true);
  };

  const setDeletedAppointmentId = (id) => {
    setDeletedAppointmentIdState(id);
  };

  const toggleConfirmationVisible = () => {
    setConfirmationVisible(!confirmationVisible);
  };

  const toggleAddParticipantsVisible = () => {
    setAddParticipantsVisible(!addParticipantsVisible);
  };

  const addParticipantsView = (meetingId) => {
    toggleAddParticipantsVisible();
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
    setAddedAppointment({});
  };

  const Header = ({ children, appointmentData, ...restProps }) => (
    <div {...restProps}>
      {appointmentData.meetingId && (
        <>
          <Button
            onClick={() =>
              props.joinMeeting && props.joinMeeting(appointmentData)
            }
            size="large"
          >
            Join Meeting
          </Button>
          <Button
            onClick={async () => {
              await navigator.clipboard.writeText(
                appointmentData.invitationText
              );
            }}
            size="large"
          >
            Copy Invitation
          </Button>
        </>
      )}
    </div>
  );

  const Content = ({ children, appointmentData, ...restProps }) => {
    return (
      <Box>
        <div style={{ padding: "30px" }}>
          <p>Meeting ID: {appointmentData.meetingId}</p>
          <p>Topic: {appointmentData.topic}</p>
          <p>Start Date: {Date.displayDate(appointmentData.startDate)}</p>
          <p>End Date: {Date.displayDate(appointmentData.endDate)}</p>
          <p>Time zone: {appointmentData.timeZone}</p>

          <div
            className={classes.justifyButtons}
            style={{
              justifyContent: "space-between",
              padding: "10px 0",
              display: "flex",
            }}
          >
            <ButtonMui
              onClick={() => {
                commitDeletedAppointment();
              }}
              color="secondary"
              variant="outlined"
            >
              Delete
            </ButtonMui>

            <ButtonMui
              onClick={() => {
                commitDeletedAppointment();
              }}
              color="secondary"
              variant="outlined"
            >
              Edit
            </ButtonMui>

            <ButtonMui
              onClick={() => {
                addParticipantsView(appointmentData.meetingId);
              }}
              color="secondary"
              variant="outlined"
            >
              Add participants
            </ButtonMui>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <Paper>
      <Scheduler data={data} height={660} style={{ zIndex: "1111" }}>
        <ViewState />
        <EditingState
          onCommitChanges={commitChanges}
          onAddedAppointmentChange={onAddedAppointmentChange}
        />
        <WeekView
          startDayHour={startDayHour}
          endDayHour={endDayHour}
          cellDuration={120}
        />
        <MonthView />
        <AllDayPanel />
        <EditRecurrenceMenu />
        <Appointments />
        <AppointmentTooltip
          headerComponent={Header}
          commandButtonComponent={AppointmentTooltip.CommandButton}
          contentComponent={Content}
          showOpenButton
          showCloseButton
          showDeleteButton
        />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <DragDropProvider />
      </Scheduler>
      {/* /onClose={cancelDelete} */}
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

      <Fab
        color="primary"
        className={classes.addButton}
        onClick={() => {
          onAddedAppointmentChange({
            startDate: new Date(currentDate).setHours(startDayHour),
            endDate: new Date(currentDate).setHours(startDayHour + 1),
          });
        }}
      >
        <AddIcon />
      </Fab>
    </Paper>
  );
}

export default Calendar;
