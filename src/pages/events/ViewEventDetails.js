import { Close } from "@mui/icons-material";
import { AddIcon, BackICon, ForwardIcon, KingIcon } from "components/icons";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  Typography,
} from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import { ImListNumbered } from "react-icons/im";
import { MdOutlineDescription, MdOutlineEvent } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { getTableRowsAndColumns, isEmail } from "redux/network/functions";
import { getListItemsForDropDownMenu, patchMeetingId } from "utils";
import { Badge } from "../../components/muiComponents";
import ToolTip from "../../components/toolTip/ToolTip";
import EventLoggerTable from "./finishedEvents/EventLoggerTable";
import RecordingLoggerTable from "./finishedEvents/RecordingLoggerTable";
import ParticipantsHandler from "./participants/ParticipantsHandler";
import SingleParticipant from "./participants/SingleParticipant";
import { eventsStyles } from "./style";
const {
  addParticipants,
  deleteParticipantDone,
  setSubHeader,
  getEventDetails,
} = actions;

const getInitialParticipantes = (participants) => {
  if (!participants || !Array.isArray(participants)) return [];
  return participants.map((p) => ({
    ...p,
    mainText: p.fullName,
    subText: p.email,
  }));
};
export default function ViewEventDetails({
  selectedObj,
  handleView,
  ...props
}) {
  const {
    meetings,
    contacts,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const classes = eventsStyles();
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [selectedObjIds, setSelectedObjIds] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  const [eventType, setEventType] = useState(
    selectedObj ? selectedObj.type : null
  );
  const [activatedAdd, setActivatedAdd] = useState(false);
  const [myContacts, setMyContacts] = useState([]);
  const [existingParti, setExistingParti] = useState(
    getInitialParticipantes(selectedObj?.participants || [])
  );

  let totalRowCount = tableData.ROWS.length;
  const [participants, setParticipants] = useState([]);
  const [value, setValue] = useState("");
  const [participantsError, setParticipantsError] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [partiArr, setPartiArr] = useState([]);
  const [openPartiArr, setOpenPartiArr] = useState(null);

  const getModifiedSubEvents = (data) => {
    if (!data || !data.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.TOPIC")]: row.topic,
      [Object.translate("LABEL.SUB_TOPIC")]: row.subTopic,
      [Object.translate("LABEL.ORGANIZER")]: row.organizer,
      [Object.translate("LABEL.MEETINGID")]: row.meetingId,
      [Object.translate("LABEL.START_DATE")]: Date.displayDate(row.startDate),
      [Object.translate("LABEL.END_DATE")]: Date.displayDate(row.endDate),
    }));
    return modifiedData;
  };

  const isInList = (email) => {
    let conditionArr = [...existingParti, ...participants];
    return !!conditionArr.filter((p) => p.email === email)[0];
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

  const handleAddParticipants = () => {
    const body = {
      participants: participants.map((p) => ({
        isModerator: p.isModerator,
        mobile: p.mobile || null,
        email: p.email,
        fullName: p.displayName,
      })),
    };
    window.dispatch(
      addParticipants({
        body,
        id: selectedObj.id,
      })
    );
  };

  const handleParticipantsProps = {
    selectedObj,
    value,
    setValue,
    participants,
    setParticipants,
    myContacts,
    setMyContacts,
    participantsError,
    setParticipantsError,
    isValidEmail,
    isInList,
  };

  const eventLogs = useMemo(() => {
    if (!props.allEvents) return [];
    if (!Array.isArray(selectedObj?.eventLogs)) return [];
    return selectedObj?.eventLogs.map((log) => ({
      date: Date.displayDate(log.eventTime, "MMM DD,YYYY  hh:mm:ss A"),
      text: `${log.userName}: ${log.status}`,
    }));
  }, [selectedObj?.eventLogs]);

  const recordingLogs = useMemo(() => {
    if (!props.allEvents) return [];
    if (!Array.isFullArray(selectedObj?.videoLogs)) return [];
    return selectedObj?.videoLogs;
  }, [selectedObj?.videoLogs]);
  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Grid item xs={12} className="titleMainView">
              <div className="d-flex" alignItems="center">
                <Box className="titleBox">
                  <Typography className="titleTypography">
                    {Object.translate("FULL_SENTENCE.VIEW_DETAILS")}
                  </Typography>
                </Box>
              </div>
              <Box className="buttonBox" item xs={6}>
                {selectedObj.byMe && (
                  <ToolTip
                    title={Object.translate("FULL_SENTENCE.EDIT_DETAILS")}
                    placement="top"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<VscEdit className="edit" />}
                      className="button"
                      type="submit"
                      onClick={() => props.onEdit(selectedObj.id)}
                    ></Button>
                  </ToolTip>
                )}

                <ToolTip
                  title={Object.translate("EVENTS.CANCEL_EVENT")}
                  placement="top"
                >
                  <Button
                    variant="outlined"
                    startIcon={<Close className="add" />}
                    className="button"
                    type="submit"
                    onClick={() => props.handleCancelEventPopUp()}
                  ></Button>
                </ToolTip>
                {!selectedObj.selectedEventParent && (
                  <ToolTip
                    title={Object.translate("EVENTS.ADD_SUB_EVENT")}
                    placement="top"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon className="add" />}
                      className="button"
                      type="submit"
                      onClick={() => props.onAdd(selectedObj.id)}
                    ></Button>
                  </ToolTip>
                )}
                <ToolTip
                  title={Object.translate("BUTTONS.BACK")}
                  placement="top"
                >
                  <Button hd onClick={() => handleView()}>
                    {isRTL ? (
                      <BackICon className="titleIconBox" />
                    ) : (
                      <ForwardIcon className="titleIconBox" />
                    )}
                  </Button>
                </ToolTip>
              </Box>
            </Grid>
          ),
        })
      );
    })();
  }, [isRTL, selectedObj]);

  const cabinsIds = useMemo(
    () => meetings.Cabinets?.map((u) => u.id),
    [meetings.Cabinets]
  );

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
    if (!selectedObj) return;
    if (Object.isObjectEmpty(meetings.ChangedCabinet)) return;

    window.dispatch(
      getEventDetails({ id: selectedObj.id, timeZone: window.currentZone })
    );
  }, [meetings.ChangedCabinet]);
  useEffect(() => {
    (async () => {
      if (!selectedObj?.subEvents || !Array.isArray(selectedObj?.subEvents))
        return;
      let paginatedData = pagination(
        selectedObj?.subEvents,
        pageSize,
        pageIndex
      );
      let modifiedSubEvents = await getModifiedSubEvents(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(modifiedSubEvents);
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [selectedObj?.subEvents, pageSize, pageIndex, isRTL]);

  useEffect(() => {
    if (Object.isObjectEmpty(meetings.deleteParticipantComplete)) return;
    const { id } = meetings.deleteParticipantComplete;
    setParticipants((prevArr) => prevArr.filter((p) => p.id !== id));
    window.dispatch(deleteParticipantDone({ data: {} }));
  }, [meetings.deleteParticipantComplete]);

  const handleGroupingCabins = (obj, arr) => {
    if (!Array.isFullArray(arr)) return;
    if (Object.isObjectEmpty(arr)) return;

    return {
      ...obj,
      childrenArr: arr.filter((row) => row?.groupIn === obj?.userId),
    };
  };

  useEffect(() => {
    if (!Array.isFullArray(meetings?.getEventDetailsDone?.participants)) return;
    let unGroupedArr = meetings?.getEventDetailsDone.participants.filter(
      (row) => !row?.groupIn
    );
    let groupedArr = meetings?.getEventDetailsDone.participants.filter(
      (row) => row?.groupIn
    );
    let groupIds = [...new Set(groupedArr.map((row) => row?.groupIn))];
    if (!Array.isFullArray(groupIds))
      return setPartiArr(meetings?.getEventDetailsDone?.participants);
    let parentArr = unGroupedArr.filter((row) => groupIds.includes(row.userId));
    unGroupedArr = unGroupedArr.filter((row) => !groupIds.includes(row.userId));
    parentArr = parentArr.map((row) => handleGroupingCabins(row, groupedArr));
    setPartiArr([...unGroupedArr, ...parentArr]);
  }, [meetings?.getEventDetailsDone, meetings?.LiberatedParticipant]);

  return (
    <Box className={classes.eventForm}>
      <Grid container spacing={3}>
        <Grid container className="eventContainerEdit">
          <Box className="typeSectionBox">
            {selectedObj?.parentEvent && (
              <Box className="parentEventBox">
                <KingIcon />
                <Typography>{selectedObj?.parentEvent.topic}</Typography>
              </Box>
            )}
          </Box>
          <Box className={props.meetingColor}>
            <Box className="badgeBoxRead">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              ></Badge>
              <Typography className="MainTitle">
                {selectedObj?.topic}
              </Typography>
            </Box>

            <Typography className="SubTitle">
              {selectedObj?.subTopic}
            </Typography>
          </Box>
          <Grid container>
            <Grid item lg={6} md={6} sm={6} xs={12} className="sectionGrid">
              <Box className="readOnlysection">
                <AiOutlineUser />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.ORGANIZER_BY")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {selectedObj?.organizer}
                </Typography>
              </Box>
              <Box className="readOnlysection">
                <ImListNumbered />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.MEETINGID")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {patchMeetingId(selectedObj?.meetingId)}
                </Typography>
              </Box>
              <Box className="readOnlysection">
                <BiLockOpen />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.PASS_CODE")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {selectedObj?.password}
                </Typography>
              </Box>
              {selectedObj?.meetingStatus?.timeSpent !== undefined ? (
                <Box className="readOnlysection">
                  <ImListNumbered />
                  <InputLabel className="titleFld">
                    {Object.translate("LABEL.MEETING_PASSED_TIME")}
                  </InputLabel>

                  <Typography className="paraTiltle">
                    {`${
                      selectedObj?.meetingStatus?.timeSpent + " "
                    }${Object.translate("LABEL.MINUTE")}`}
                  </Typography>
                </Box>
              ) : null}
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} className="sectionThrdGrid">
              <Box className="readOnlysection">
                <MdOutlineEvent />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.START_DATE")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {Date.displayDate(selectedObj?.startDate)}
                </Typography>
              </Box>
              <Box className="readOnlysection">
                <MdOutlineEvent />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.END_DATE")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {Date.displayDate(selectedObj?.endDate)}
                </Typography>
              </Box>
              <Box className="readOnlysection">
                <GiPositionMarker />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.TIME_ZONE")}
                </InputLabel>
                <Typography className="paraTiltle">
                  {selectedObj?.timeZone}
                </Typography>
              </Box>
              {selectedObj?.meetingStatus?.timeSpent !== undefined ? (
                <Box className="readOnlysection">
                  <InputLabel className="titleFldDisable">
                    {Object.translate("LABEL.MEETING_PASSED_TIME")}
                  </InputLabel>

                  <Typography className="paraTiltle">
                    {`${
                      selectedObj?.meetingStatus?.timeSpent + " "
                    }${Object.translate("LABEL.MINUTE")}`}
                  </Typography>
                </Box>
              ) : null}
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="sectionThrdGrid"
            >
              <Box className="readOnlysection">
                <MdOutlineDescription />
                <InputLabel className="titleFldDisable">
                  {Object.translate("LABEL.DESCRIPTION")}
                </InputLabel>
                <Typography className="paraTiltledescription">
                  {selectedObj?.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="partyContainerDisable">
          <Grid item lg={12} className="ParticipantsGrid">
            <Typography className={classes.PartyTypo}>
              {Object.translate("LABEL.PARTICIPANTS")}
            </Typography>
            <Typography className="SubNum">
              {selectedObj?.participants?.length || 0}
            </Typography>
          </Grid>
          {activatedAdd && (
            <Box className="addPartyBox">
              <ParticipantsHandler {...handleParticipantsProps} />
              <IconButton
                className="viewSubmitParticipants"
                onClick={() => handleAddParticipants()}
              ></IconButton>
            </Box>
          )}
          {Array.isFullArray(partiArr) ? (
            <Grid container spacing={2} className="openPartyContainer">
              {partiArr.map((parti) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} className="PartyGrid">
                    <Box
                      className="PartyFirstBox"
                      style={{
                        width: "100%",
                        display: "flex",
                      }}
                    >
                      <SingleParticipant
                        participant={parti}
                        cabinsIds={cabinsIds}
                        event={selectedObj}
                        setOpenPartiArr={setOpenPartiArr}
                        openPartiArr={openPartiArr}
                        element={parti}
                      />
                    </Box>
                    {openPartiArr === parti?.id && (
                      <Grid
                        container
                        style={{ display: "flex", margin: "0" }}
                        spacing={2}
                        className="openParty"
                      >
                        {Array.isFullArray(parti?.childrenArr) ? (
                          parti?.childrenArr.map((cildParti) => {
                            return (
                              <Grid
                                item
                                xs={12}
                                md={6}
                                lg={6}
                                className="openPartyGrid"
                              >
                                <SingleParticipant
                                  participant={cildParti}
                                  cabinsIds={cabinsIds}
                                  event={selectedObj}
                                />
                              </Grid>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </Grid>
                    )}
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        {selectedObj.subEvents?.length > 0 && (
          <Box className={classes.PartyTable} width="100%">
            <Grid item lg={12} className="subSection">
              <Typography className="SubEventsTitle">
                {Object.translate("EVENTS.SUB_EVENTS")}
              </Typography>
              <Typography className="SubNum">{totalRowCount}</Typography>
            </Grid>
            <FullTabel
              data={tableData.ROWS}
              columns={tableData.COLUMNS}
              selectableRows={true}
              setIDS={setSelectedObjIds}
              handleView={() => props.handleViewDetails(selectedObjIds[0])}
              handleEdit={
                selectedObj.byMe
                  ? () =>
                      props.onEdit(
                        selectedObjIds[0],
                        selectedObj?.subEvents?.filter(
                          (row) => row.id === selectedObjIds[0]
                        )[0] || {}
                      )
                  : null
              }
              handleAdd={() => props.onAdd(selectedObj.id)}
              pagination={true}
              paginatedCount={tableData?.COUNT || 0}
              page={pageIndex}
              rowsPerPage={pageSize}
              handlePaginationChange={async ({ pageIndex, pageSize }) => {
                setPageSize(pageSize);
                setPageIndex(pageIndex - 1 > 0 ? pageIndex - 1 : 1);
              }}
            />
          </Box>
        )}
        {Array.isFullArray(eventLogs) && <EventLoggerTable logs={eventLogs} />}
        {Array.isFullArray(recordingLogs) && (
          <RecordingLoggerTable recordingLogs={recordingLogs} />
        )}
      </Grid>
    </Box>
  );
}
