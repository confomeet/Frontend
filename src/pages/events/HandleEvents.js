import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import clsx from "clsx";
import DateTimePickerField from "components/dateTimePicker";
import {
  IoArrowBack,
  MdEventBusy,
  MdOutlineEditCalendar,
  TbListDetails,
} from "components/icons";
import Switcher from "components/materialComponents/Switcher";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  Typography,
} from "components/muiComponents";
import { Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import {
  calculateNextThirtyMin,
  checkFullDate,
  handleNotification,
  isEmail,
} from "redux/network/functions";
import { generateDatesByRRlu, getCurrentTimeZoneDate, getManualISOString } from "utils";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import PageSubHeading from "videoComponents/typographyGeneral/PageSubHeading";
import ToolTip from "../../components/toolTip/ToolTip";
import ReccuringEvents from "./ReccuringEvents";
import {
  eventsInitialValues,
  getEventsValidationSchema,
} from "./eventsFormikUtils";
import EventLoggerTable from "./finishedEvents/EventLoggerTable";
import RecordingLoggerTable from "./finishedEvents/RecordingLoggerTable";
import Participants from "./participants/Participants";
import { eventsStyles } from "./style";

const {
  createNewMeeting,
  createNewMeetingDone,
  editEvent,
  editEventDone,
  deleteParticipant,
  deleteParticipantDone,
  setSubHeader,
} = actions;


function addMinutesToDate (m, date) {
  var newDate = new Date(date.getTime());

  newDate.setMinutes(newDate.getMinutes() + parseInt(m));
  return newDate;
};

function handleDateTimeChange(newStartDateStr, eventDateTimes, type) {
  const newLocalStartDate = new Date(newStartDateStr);
  const prevLocalStartDate = new Date(eventDateTimes.startDate + 'T' + eventDateTimes.startTime);
  const shiftInMillis = newLocalStartDate - prevLocalStartDate;
  const prevLocalEndDate = new Date(eventDateTimes.endDate + 'T' + eventDateTimes.endTime);
  const shiftedEndDate = new Date(prevLocalEndDate.getTime() + shiftInMillis);

  let endDate = null;
  if (type)
    endDate = shiftedEndDate;
  else
    endDate = addMinutesToDate(30, newLocalStartDate);
  return {
    startDate: handleSeparateDate(newLocalStartDate),
    endDate: handleSeparateDate(endDate),
    startTime: handleSeparteTime(newLocalStartDate),
    endTime: handleSeparteTime(endDate),
  };
};

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
};

function handleSeparateDate(date) {
  return (
    date.getFullYear() +
    "-" +
    padTo2Digits(date.getMonth() + 1) +
    "-" +
    padTo2Digits(date.getDate())
  );
};

function handleSeparteTime(date) {
  return padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
};

function addMinutes(m, time) {
  const splitTime = time.split(":");

  var newDate = new Date();

  newDate.setHours(splitTime[0]);
  newDate.setMinutes(parseInt(splitTime[1]) + parseInt(m));
  return (
    padTo2Digits(newDate.getHours()) + ":" + padTo2Digits(newDate.getMinutes())
  );
};


const getInitialParticipantes = (participants) => {
  if (!participants || !Array.isArray(participants)) return participants;
  return participants.map((p) => ({
    ...p,
    mainText: p.fullName,
    subText: p.email,
  }));
};

function HandleEvents({ selectedObj, handleView, ...props }) {
  const classes = eventsStyles();
  const {
    meetings,
    contacts,
  } = useSelector((state) => state);

  const currentDate = Date.getAdjastISOString(Date.getAdjastTime(new Date()));
  const currentYearMonth = currentDate.split("T")[0];
  const currentTime = calculateNextThirtyMin(
    30 * 60 * 1000,
    window.currentZone
  );
  const initialValues = (() => {
    if (props.addToggle) return eventsInitialValues;
    if (!Object.isObjectEmpty(props.calendarCellClickData))
      return eventsInitialValues;
    if (props.editToggle || props?.detailsToggle) return { ...selectedObj };
  })();
  const validationSchema = getEventsValidationSchema();

  const getInitEventDateTimes = (selectedObj) => {
    let init = {
      startDate: currentYearMonth,
      endDate: currentYearMonth,
      startTime: currentTime,
      endTime: addMinutes(30, currentTime),
    };
    if (!Object.isObjectEmpty(props?.calendarCellClickData)) {
      let currentCalendarDate = Date.getAdjastISOString(
        Date.getAdjastTime(new Date(props?.calendarCellClickData?.startDate))
      );
      let currentCalendarYearMonth = currentCalendarDate.split("T")[0];
      let fromCalendarInit = {
        startDate: currentCalendarYearMonth,
        endDate: currentCalendarYearMonth,
        startTime: currentTime,
        endTime: addMinutes(30, currentTime),
      };
      return fromCalendarInit;
    }
    if (!selectedObj) return init;
    // Dto coming frome server has date and time in ISO format with UTC timezone.
    const localStartDateTimeIso = getManualISOString(new Date(selectedObj.startDate));
    const localEndDateTimeIso = getManualISOString(new Date(selectedObj.endDate));
    if (!Object.isObjectEmpty(selectedObj)) {
      init = {
        startDate: localStartDateTimeIso.split("T")[0],
        startTime: localStartDateTimeIso.split("T")[1],
        endTime: localEndDateTimeIso.split("T")[1],
        endDate: localEndDateTimeIso.split("T")[0],
      };
    }
    return init;
  };

  const [selectedGroups, setSelectedGroups] = useState([]);
  const [recordingReq, setRecordingReq] = useState(
    selectedObj?.recordingReq || false
  );
  const [autoLobby, switchAutoLobby] = useState(
    selectedObj?.autoLobby || false
  );
  const [reccurring, setReccurring] = useState({
    isReccurring: false,
    rRule: null,
  });
  const [reccurringEditOptions, setReccurringEditOptions] = useState({
    justCurrent: true,
    next: false,
    previous: false,
  });
  const [singleAccess, setSingleAccess] = useState(
    selectedObj?.singleAccess || false
  );
  const [myContacts, setMyContacts] = useState([]);
  const [participants, setParticipants] = useState(
    getInitialParticipantes(selectedObj?.participants || [])
  );
  const [value, setValue] = useState("");

  // eventDateTimes contains local date and times in string format, like this: 2024-04-17T21:13:00
  const [eventDateTimes, setEventDateTimes] = useState({
    ...getInitEventDateTimes(selectedObj),
  });

  const [participantsError, setParticipantsError] = useState("");
  const [datePickerValidation, setDatePickerValidation] = useState({
    startMinDate: undefined,
    startMaxDate: undefined,
    endMinDate: undefined,
    endMaxDate: undefined,
  });

  const eventLogs = useMemo(() => {
    if (!Array.isArray(selectedObj?.eventLogs)) return [];
    return selectedObj?.eventLogs.map((log) => ({
      date: Date.displayDate(log.eventTime, "MMM DD,YYYY  hh:mm:ss A"),
      text: `${log.userName}: ${log.status}`,
    }));
  }, [selectedObj?.eventLogs]);
  const recordingLogs = useMemo(() => {
    if (!Array.isFullArray(selectedObj?.videoLogs)) return [];
    return selectedObj?.videoLogs;
  }, [selectedObj?.videoLogs]);
  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Box className="titleMainGrid">
              <Box className="titleBox">
                <Typography className="titleTypography">
                  {Object.translate(
                    (() => {
                      if (props.editToggle) return "FULL_SENTENCE.EDIT_DETAILS";
                      if (
                        props.addToggle ||
                        !Object.isObjectEmpty(props?.calendarCellClickData)
                      )
                        return "FULL_SENTENCE.ADD_DETAILS";
                      if (props?.detailsToggle)
                        return "FULL_SENTENCE.VIEW_DETAILS";
                    })()
                  )}
                </Typography>
              </Box>
              {props.detailsToggle && (
                <Box className="buttonBox" item xs={6}>
                  <ToolTip
                    title={Object.translate("BUTTONS.SAVE")}
                    placement="top"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<MdOutlineEditCalendar />}
                      className="button"
                      type="submit"
                      onClick={() => props.onEdit(selectedObj.id)}
                    ></Button>
                  </ToolTip>
                  <Divider orientation="vertical" flexItem variant="middle" />
                  <ToolTip
                    title={Object.translate("EVENTS.CANCEL_EVENT")}
                    placement="top"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<MdEventBusy />}
                      className="button"
                      type="submit"
                      onClick={() => props.handleCancelEventPopUp()}
                    ></Button>
                  </ToolTip>

                  <Divider orientation="vertical" flexItem variant="middle" />
                </Box>
              )}
              <ToolTip title={Object.translate("BUTTONS.BACK")} placement="top">
                <Box className="titleIconBox" onClick={() => handleView()}>
                  <IoArrowBack className="leftArrowBack" />
                </Box>
              </ToolTip>
            </Box>
          ),
        })
      );
    })();
  }, [
    props.addToggle,
    props.editToggle,
    props.calendarCellClickData,
    props.detailsToggle,
  ]);

  const handleDeleteParticipant = (p, idx) => {
    if (!p.id)
      return setParticipants((prevArr) => prevArr.filter((e, i) => i !== idx));
    window.dispatch(deleteParticipant({ id: p.id }));
  };

  useEffect(() => {
    (async () => {
      const checkSelectedObj =
        !Object.isObjectEmpty(selectedObj) &&
        !Object.isObjectEmpty(selectedObj?.selectedEventParent);
      setDatePickerValidation({
        startMinDate: checkSelectedObj
          ? new Date(selectedObj?.selectedEventParent?.startDate)
          : selectedObj?.startDate
          ? new Date()
          : new Date(),
        startMaxDate: checkSelectedObj
          ? new Date(selectedObj?.selectedEventParent?.endDate)
          : undefined,
        endMinDate: checkSelectedObj
          ? new Date(selectedObj?.selectedEventParent?.startDate)
          : new Date(selectedObj?.endDate || eventDateTimes.startDate),
        endMaxDate: checkSelectedObj
          ? new Date(selectedObj?.selectedEventParent?.endDate)
          : undefined,
      });
    })();
  }, [selectedObj, eventDateTimes]);

  const formErrors = (() => {
    const isValidSTartDate = checkFullDate(
      eventDateTimes.startDate + "T" + eventDateTimes.startTime + ":00.000Z",
      selectedObj?.startDate || null
    );
    const isValidEndDate = checkFullDate(
      eventDateTimes.endDate + "T" + eventDateTimes.endTime + ":00.000Z",
      eventDateTimes.startDate + "T" + eventDateTimes.startTime + ":00.000Z"
    );
    return {
      startDate: isValidSTartDate.date
        ? null
        : Object.translate("ERROR.DATE.START"),
      startTime:
        isValidSTartDate.time
          ? null
          : Object.translate("ERROR.TIME.START"),
      endDate: isValidEndDate.date ? null : Object.translate("ERROR.DATE.END"),
      endTime:
        isValidEndDate.time
          ? null
          : Object.translate("ERROR.TIME.END"),
    };
  })();

  const constructFullDate = (date, time) => new Date (`${date}T${time}:00`).toISOString();

  const onSubmit = async (values) => {
    const currentErrors = Object.values(formErrors).filter((v) => v);
    if (currentErrors.length > 0) {
      handleNotification({
        message: currentErrors.join("\n"),
        success: false,
      });
      return;
    }
    let selectedStartDate = constructFullDate(
      eventDateTimes.startDate,
      eventDateTimes.startTime
    );
    let selectedEndDate = constructFullDate(
      eventDateTimes.endDate,
      eventDateTimes.endTime
    );

    let body = {
      singleAccess,
      autoLobby,
      recordingReq,
      cisco: false,
      passwordReq: !!values.password,
      meetingRequired: true,
      subEvents: [],
      type: null,
      topic: values.topic || null,
      subTopic: values.subTopic || null,
      organizer: values.organizer || null,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      description: values.description ? values.description : null,
      password: values.password ? values.password : null,
      timeZone: window.currentZone,
      parentEventId: selectedObj?.selectedEventParent?.id || null,
      participants: participants
        .filter((p) => p.shouldSend)
        .map((p) => ({
          id: p.id || null,
          isModerator: p.isModerator,
          mobile: p.mobile || null,
          email: p.email,
          fullName: p.displayName,
        })),
      groupIds: selectedGroups?.map((row) => row?.id),
    };

    if (props.editToggle) delete body?.groupIds;
    if (reccurring.isReccurring && reccurring.rRule) {
      const generatedStartDateRule = Date.generateRRule({
        ...reccurring.rRule,
        dtstart: new Date(selectedStartDate),
      });
      const generatedEndDateRule = Date.generateRRule({
        ...reccurring.rRule,
        dtstart: new Date(selectedEndDate),
      });
      let event = { ...body };

      body = {
        event,
        rDates: {
          rule: `${generatedStartDateRule.toString()}#${generatedStartDateRule.toText()}`,
          dates: generateDatesByRRlu(
            generatedStartDateRule,
            generatedEndDateRule
          ),
        },
      };
    }
    if (selectedObj?.eGroup) {
      let eventDto = { ...body };
      body = {
        eventDto,
        options: { ...reccurringEditOptions },
      };
    }

    window.dispatch(
      props.editToggle
        ? editEvent({ body, id: selectedObj.id })
        : createNewMeeting({ body, params: props.disableSwal })
    );
  };

  const handleChange = (evt) => {
    setValue(evt.target.value);
    setParticipantsError(null);
  };

  const handleNewParticipant = (emails = []) => {
    if (!emails || !Array.isArray(emails)) return;
    const newParticipents = emails
      .filter((e) => e)
      .map((email) => ({
        email,
        isModerator: false,
        mainText: Object.translate("VALUE.UNKNOWN"),
        subText: email,
        shouldSend: true,
      }));
    setParticipants([...participants, ...newParticipents]);
  };

  const handleChooseContact = (obj) => {
    if (!obj) return;
    if (!isValidEmail(obj?.email)) return;
    const newObj = { ...obj };
    delete newObj.id;
    setParticipants((prevArr) => [
      ...prevArr,
      { ...newObj, isModerator: false, shouldSend: true },
    ]);
    setValue("");
    setParticipantsError(null);
  };

  const handleKeyDown = (evt) => {
    if (!["Enter", "Tab", ","].includes(evt.key)) return;
    evt.preventDefault();

    var email = value.trim();

    if (!email || !isValidEmail(email)) return;
    handleNewParticipant([email]);
    setValue("");
  };

  const handlePaste = (evt) => {
    evt.preventDefault();
    setValue("");

    var paste = evt.clipboardData.getData("text");
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter((email) => !isInList(email));
      handleNewParticipant(toBeAdded);
    }
  };
  const isInList = (email) => {
    return !!participants.filter((p) => p.email === email)[0];
  };

  const isValidEmail = (email) => {
    let error = null;

    if (isInList(email))
      error = `${email} ${Object.translate("ERROR.EMAIL.EXISTS")}`;

    if (!isEmail(email))
      error = `${email} ${Object.translate("ERROR.EMAIL.IN_VALID")}`;

    setParticipantsError(error);
    return !error;
  };

  const updateParticipants = () => {
    let updatedParticipants = [...participants];
    for (let contact of myContacts) {
      delete contact.id;
      updatedParticipants = updatedParticipants.map((p) =>
        p.email === contact.email ? { ...p, ...contact } : p
      );
    }

    setParticipants(updatedParticipants);
  };

  const handleRRuleChange = (rRule) =>
    setReccurring((prevState) => ({ ...prevState, rRule }));

  useEffect(() => {
    if (!meetings.createNewMeetingDone) return;
    window.dispatch(createNewMeetingDone({ data: false }));
  }, [meetings.createNewMeetingDone]);

  useEffect(() => {
    if (!meetings.editExistingEventDone) return;
    window.dispatch(editEventDone({ data: null }));
  }, [meetings.editExistingEventDone]);

  const handleEventStartDateChange = ({
    startDate = eventDateTimes.startDate,
    startTime = eventDateTimes.startTime,
  }) => {
    if (!startDate) return;
    if (!startTime) return;
    const newDate = handleDateTimeChange(
      startDate + "T" + startTime,
      eventDateTimes,
      props.editToggle
    );
    setEventDateTimes(newDate);
  };
  useEffect(() => {
    const isValidEndDate = checkFullDate(
      eventDateTimes.endDate + "T" + eventDateTimes.endTime + ":00.000Z",
      eventDateTimes.startDate + "T" + eventDateTimes.startTime + ":00.000Z"
    );
    if (!isValidEndDate.date || !isValidEndDate.time) {
      let newDate = new Date(
        eventDateTimes.endDate + "T" + eventDateTimes.endTime + ":00.000Z"
      );
      const followingDay = new Date(newDate.getTime() + 86400000);

      setEventDateTimes((prevState) => ({
        ...prevState,
        endDate: Date.getAdjastISOString(followingDay).split("T")[0],
      }));
    }
  }, [eventDateTimes.endTime]);

  useEffect(() => {
    if (!Array.isArray(contacts.getMyContactsComplete.items)) {
      setMyContacts([]);
      return;
    }
    setMyContacts(
      contacts.getMyContactsComplete.items.map((c) => {
        let singleContact = {
          ...c,
          mainText: c.displayName,
          subText: c.email,
          subText2: c.mobile,
        };
        delete singleContact.userId;
        return singleContact;
      }) || []
    );
  }, [contacts.getMyContactsComplete]);

  useEffect(() => {
    updateParticipants();
  }, [myContacts]);

  useEffect(() => {
    if (Object.isObjectEmpty(meetings.deleteParticipantComplete)) return;
    const { id } = meetings.deleteParticipantComplete;
    setParticipants((prevArr) => prevArr.filter((p) => p.id !== id));
    window.dispatch(deleteParticipantDone({ data: {} }));
  }, [meetings.deleteParticipantComplete]);

  return (
    <Box className={classes.eventForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Box>
              <Grid
                container
                columnSpacing={{ md: 2 }}
                className={classes.mainEventContainer}
              >
                <Grid container className={classes.eventContainer}>
                  <Box className="typeSectionBox">
                    <TbListDetails />
                    <PageSubHeading
                      subHeading={Object.translate("LABEL.DETAILS")}
                    />
                  </Box>

                  <Box className={classes.FirstSection}>
                    <Box className={classes.badgeBox}>
                      <FormikTextFeildGeneral
                        label={Object.translate("LABEL.TOPIC")}
                        className={classes.MainTitleEdit}
                        id="topic"
                        name="topic"
                        type="text"
                        fullWidth
                        disabled={props?.detailsToggle}
                      />
                    </Box>
                    <Box className={classes.badgeBox}>
                      <FormikTextFeildGeneral
                        label={Object.translate("LABEL.SUB_TOPIC")}
                        className={classes.SubTitleEdit}
                        id="subTopic"
                        name="subTopic"
                        type="text"
                        fullWidth
                        disabled={props?.detailsToggle}
                      />
                    </Box>

                    <Box className={classes.badgeBox}>
                      <InputLabel className="titleFldMini"></InputLabel>
                      <FormikTextFeildGeneral
                        label={Object.translate("LABEL.ORGANIZER_BY")}
                        className={classes.editTitle}
                        id="organizer"
                        name="organizer"
                        type="text"
                        fullWidth
                        disabled={props?.detailsToggle}
                      />
                    </Box>
                  </Box>
                  <Grid container>
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      className={classes.sectionFirstGrid}
                    >
                      <Box className={classes.badgeBoxDate}>
                        <DateTimePickerField
                          dateLabel={Object.translate("LABEL.START_DATE")}
                          timeLabel={Object.translate("LABEL.START_TIME")}
                          name="startDate"
                          className="editTitle"
                          minDate={datePickerValidation?.startMinDate}
                          maxDate={datePickerValidation?.startMaxDate}
                          value={new Date(eventDateTimes.startDate)}
                          error={
                            props?.detailsToggle ? null : formErrors.startDate
                          }
                          helperText={
                            props?.detailsToggle ? null : formErrors.startDate
                          }
                          onChange={(val) => {
                            handleEventStartDateChange({
                              startDate:
                                Date.getAdjastISOString(val).split("T")[0],
                            });
                          }}
                          timeError={
                            props?.detailsToggle ? null : formErrors.startTime
                          }
                          timeHelperText={
                            props?.detailsToggle ? null : formErrors.startTime
                          }
                          onChangeTime={(st) => {
                            let value = st.target.value;
                            handleEventStartDateChange({ startTime: value });
                          }}
                          timeValue={eventDateTimes.startTime}
                          showTime={false}
                          disabled={props?.detailsToggle}
                        />
                      </Box>
                      <Box className={classes.badgeBoxDate}>
                        <DateTimePickerField
                          dateLabel={Object.translate("LABEL.END_DATE")}
                          timeLabel={Object.translate("LABEL.END_TIME")}
                          name="endDate"
                          variant="outlined"
                          value={new Date(eventDateTimes.endDate)}
                          minDate={datePickerValidation?.endMinDate}
                          maxDate={datePickerValidation?.endMaxDate}
                          error={
                            props?.detailsToggle ? null : formErrors.endDate
                          }
                          helperText={
                            props?.detailsToggle ? null : formErrors.endDate
                          }
                          onChange={(val) => {
                            setEventDateTimes((prevState) => ({
                              ...prevState,
                              endDate:
                                Date.getAdjastISOString(val).split("T")[0],
                            }));
                          }}
                          timeError={
                            props?.detailsToggle ? null : formErrors.endTime
                          }
                          timeHelperText={
                            props?.detailsToggle ? null : formErrors.endTime
                          }
                          onChangeTime={(st) => {
                            let value = st.target.value;
                            setEventDateTimes((prevState) => ({
                              ...prevState,
                              endTime: value,
                            }));
                          }}
                          timeValue={eventDateTimes.endTime}
                          showTime={false}
                          disabled={props?.detailsToggle}
                        />
                      </Box>
                    </Grid>

                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="sectionThrdGrid"
                    >
                      <Box className={classes.badgeBoxDescription}>
                        <InputLabel>
                          {Object.translate("LABEL.DESCRIPTION")}
                        </InputLabel>
                        <FormikTextFeildGeneral
                          className="input"
                          name="description"
                          id="description"
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          type="text"
                          fullWidth
                          multiline
                          minRows={5}
                          maxRows={7}
                          disabled={props?.detailsToggle}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Box className="BoxDescFld">
                        <Grid container className={classes.switchContainer}>
                          {!selectedObj?.eGroup && (
                            <Box className="switchsection">
                              <Switcher
                                label={Object.translate("LABEL.RECCURING")}
                                switchToggle={reccurring.isReccurring}
                                handleSwitchChange={(isReccurring) =>
                                  setReccurring({
                                    rRule: null,
                                    isReccurring,
                                  })
                                }
                                labelPlacement="start"
                              />
                            </Box>
                          )}
                          <Box className="switchsection">
                            <Switcher
                              label={Object.translate(
                                "LABEL.SINGLE_ACCESS"
                              )}
                              switchToggle={singleAccess}
                              handleSwitchChange={(checked) =>
                                setSingleAccess(checked)
                              }
                              labelPlacement="start"
                            />
                          </Box>
                          <Box className="switchsection">
                            <Switcher
                              label={Object.translate("LABEL.REQ_RECORD")}
                              switchToggle={recordingReq}
                              handleSwitchChange={(checked) =>
                                setRecordingReq(checked)
                              }
                              labelPlacement="start"
                            />
                          </Box>
                          <Box className="switchsection">
                            <Switcher
                              label={Object.translate("LABEL.AUTO_LOBBY")}
                              switchToggle={autoLobby}
                              handleSwitchChange={(checked) =>
                                switchAutoLobby(checked)
                              }
                              labelPlacement="start"
                            />
                          </Box>
                        </Grid>
                        {reccurring.isReccurring && (
                          <ReccuringEvents
                            handleRRuleChange={handleRRuleChange}
                            {...reccurring}
                          />
                        )}
                        {!props?.detailsToggle && selectedObj?.eGroup && (
                          <Grid container className="partyContainer">
                            <Grid item lg={12} className="ParticipSection">
                              <Grid
                                item
                                lg={12}
                                className="ParticipantsSection"
                              >
                                <Typography className="RecurringNote">
                                  {Object.translate("LABEL.THIS_IS_RECURRING")}
                                </Typography>
                              </Grid>
                              <Grid
                                container
                                className={classes.recuuringContainer}
                              >
                                <Box className="switchsection">
                                  <Switcher
                                    label={Object.translate(
                                      "LABEL.JUST_CURRENT"
                                    )}
                                    switchToggle={
                                      reccurringEditOptions.justCurrent
                                    }
                                    handleSwitchChange={(justCurrent) =>
                                      setReccurringEditOptions((prev) => ({
                                        ...prev,
                                        justCurrent,
                                        next: !justCurrent,
                                        previous: !justCurrent,
                                      }))
                                    }
                                    labelPlacement="end"
                                  />
                                </Box>
                                <Box className="switchsection">
                                  <Switcher
                                    label={Object.translate("LABEL.NEXT")}
                                    switchToggle={reccurringEditOptions.next}
                                    handleSwitchChange={(next) =>
                                      setReccurringEditOptions((prev) => ({
                                        ...prev,
                                        next,
                                        justCurrent: !next && !prev.previous,
                                      }))
                                    }
                                    labelPlacement="end"
                                  />
                                </Box>
                                <Box className="switchsection">
                                  <Switcher
                                    label={Object.translate("LABEL.PREVIOUS")}
                                    switchToggle={
                                      reccurringEditOptions.previous
                                    }
                                    handleSwitchChange={(previous) =>
                                      setReccurringEditOptions((prev) => ({
                                        ...prev,
                                        previous,
                                        justCurrent: !previous && !prev.next,
                                      }))
                                    }
                                    labelPlacement="end"
                                  />
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                        {!props?.detailsToggle && (
                          <Grid
                            item
                            xs={12}
                            md={12}
                            lg={12}
                            className={classes.ButtonGroupGrid}
                          >
                            <PrimaryButton
                              onClick={formik.submitForm}
                              primaryButton={Object.multiTranslate(
                                "BUTTONS.SAVE"
                              )}
                            />
                            <SecondaryButton
                              onClick={() => handleView()}
                              secondaryButton={Object.multiTranslate(
                                "BUTTONS.CANCEL"
                              )}
                            />
                          </Grid>
                        )}
                        {props?.detailsToggle && (
                          <>
                            <EventLoggerTable logs={eventLogs} />

                            <RecordingLoggerTable
                              recordingLogs={recordingLogs}
                            />
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Box className={classes.partyContainer}>
                  <Participants
                    createdBy={selectedObj?.createdBy || null}
                    open={value?.trim().length > 1 || false}
                    error={participantsError}
                    textFieldValue={value}
                    textFieldOnChange={handleChange}
                    textFieldOnKeyDown={handleKeyDown}
                    textFieldOnPaste={handlePaste}
                    myContacts={myContacts}
                    handleChooseContact={handleChooseContact}
                    participants={participants}
                    setParticipants={setParticipants}
                    handleDeleteParticipant={handleDeleteParticipant}
                    disableAdd={props?.detailsToggle}
                    selectedGroups={selectedGroups}
                    setSelectedGroups={setSelectedGroups}
                    isEdit={props?.editToggle}
                  />
                </Box>
                {!props?.detailsToggle && (
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    className={classes.ButtonGroupGridDown900}
                  >
                    <Button
                      variant="outlined"
                      className={clsx(classes.titleButtonCancel, "medium-btn")}
                      onClick={() => handleView()}
                    >
                      {Object.multiTranslate("BUTTONS.CANCEL")}
                    </Button>
                    <Button
                      variant="outlined"
                      className={clsx(classes.titleButton, "medium-btn")}
                      onClick={formik.submitForm}
                    >
                      {Object.multiTranslate("BUTTONS.SAVE")}
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
}

export default HandleEvents;
