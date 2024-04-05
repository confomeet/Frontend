import clsx from "clsx";
import FieldsDialog from "components/dialogs/FieldsDialog";
import {
  Box,
  Button,
  InputLabel,
  TextareaAutosize,
} from "components/muiComponents";
import SearchFeilds from "components/searching/searchFeilds";
import { pagination } from "components/shared/utils";
import {
  DataActions as EventsActions,
  DisplayType as EventsDisplayType,
  getStatusFilters,
} from "constantData";
import { useDidMountEffect } from "hooks";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import {
  getInvitationText,
  getListItemsForDropDownMenu,
  getThisMonth,
  joinByMeetingLink,
} from "utils";
import HandleEvents from "./HandleEvents";
import ViewEvents from "./ViewEvents";
import EventsHeader from "./eventsHeader/EventsHeader";
import ParticipantsPopUp from "./participants/ParticipantsPopUp";
import { eventsStyles } from "./style";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";

const {
  getMyContacts,
  getRelatedUsers,
  joinMeetingDone,
  searchEvents,
  searchEventsDone,
  getEventDetails,
  setSubHeader,
  cancelEvents,
} = actions;

const initPaginate = { requiredArr: [], pgCount: 0 };
const initGroupByState = {
  open: null,
  list: [],
  displyList: [],
  selectedId: null,
};

export default function MyMeetings(props) {
  const classes = eventsStyles();
  const {
    meetings,
    settingsReducer: {
      settings: { isRTL, appRowsPerPage, authUser },
    },
  } = useSelector((state) => state);
  const initSearchParams = {
    ...getThisMonth(),
    topic: null,
    subTopic: null,
    allParticipant: false,
    participant: null,
    relatedUserEvents: false,
    meetingId: null,
    email: null,
    phoneNumber: null,
    entity: null,
    organizer: null,
  };

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [openParticipantsPopUp, switchParticipantsPopUp] = useState(false);
  const [openCancelEventPopUp, switchCancelEventsPopUp] = useState(false);
  const [list, setList] = useState([]);
  const [participantsLink, setParticipantsLink] = useState(null);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [selectedRelatedUser, setSelectedRelatedUser] = useState(null);
  const [searchParams, setSearchParams] = useState({
    ...initSearchParams,
  });
  const [openFilters, setOpenFilters] = useState(false);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [view, setView] = useState(EventsDisplayType.calendar);
  const [groupByList, setGroupByList] = useState({
    ...initGroupByState,
  });
  const [idSequence, setIdSequence] = useState([]);
  const [addToggle, switchAddToggle] = useState(false);
  const [addParticipantsToggle, switchAddParticipantsToggle] = useState(false);
  const [editToggle, switchEditToggle] = useState(false);
  const [detailsToggle, switchDetailsToggle] = useState(false);
  const [selectedObj, setSelectedObj] = useState(null);
  const [paginate, setPaginate] = useState(initPaginate);
  const [rowsPerPage, setRowsPerPage] = useState(appRowsPerPage);
  const [pageNum, setPageNum] = useState(1);
  const [showSubEvents, setShowSubEvents] = useState(false);
  const [expandArrows, setExpandArrows] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(getStatusFilters()[0]);
  const [selectedFilterIdx, setSelectedFilterIdx] = useState(0);
  const [meetingColor, setMeetingColor] = useState("unavailableMeetings");
  const [cancelEventNote, setCancelEventNote] = useState("");
  const [loaderPhrase, setLoaderPhrase] = useState(false);
  const [calendarCellClickData, setCalendarCellClickData] = useState({});

  const handlePaginationClick = (e, num) => {
    setPageNum(num);
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPageNum(1);
  };

  const handleParticipantsView = (show, events = [...data]) => {
    setSelectedEvents(show ? events : []);
    if (view !== EventsDisplayType.participants)
      setView(EventsDisplayType.participants);
  };

  const handleGetMyContacts = async (
    payload = {
      text: null,
      name: null,
      email: null,
      pageIndex: 1,
      pageSize: 100,
      tabId: 0,
    }
  ) => {
    let body = payload;
    window.dispatch(getMyContacts({ body }));
  };

  const handleSearchParamsChange = (key, value) =>
    setSearchParams((prevState) => ({ ...prevState, [key]: value }));

  const handleSearch = (localParams = {}) => {
    const body = { ...searchParams, ...localParams };
    const params = { pageIndex: pageNum, pageSize: rowsPerPage };

    if (!Object.isObjectEmpty(localParams)) setSearchParams(body);

    window.dispatch(
      searchEvents({
        body: {
          ...body,
          startDate: Date.getManualISOString(body.startDate),
          endDate: Date.getManualISOString(body.endDate),

          allParticipant: !!body.participant,
          pagination: view !== EventsDisplayType.calendar,
        },
        params: { ...params },
        isAllEvents: props.allEvents,
      })
    );
    window.handlePhraseLoader(
      "info",
      Object.translate("FULL_SENTENCE.GET_DATA_LOADER_PHRASE")
    );
    setSelectedObj(null);
  };

  useEffect(() => {
    handleSearch();
  }, [view]);

  useDidMountEffect(() => {
    if (!props.allEvents) return;
    handleSearch();
  }, [props.allEvents, pageNum, rowsPerPage]);

  useDidMountEffect(() => {
    if (props.allEvents) return;
    handleSearch();
  }, [window.currentLocation]);

  const getParentEvent = (event) => {
    if (!event) return null;
    const parentEvent = event?.parentEventId
      ? data.filter((d) => d.id === event.parentEventId)[0]
      : null;
    return parentEvent;
  };

  const updateSelectedEvent = (id, action, tableObj) => {
    if (!id) return;
    let data4filter = [...data];
    if (groupByList.open) data4filter = [...groupByList.list];
    let selectedEvent = Array.findElementInList(data4filter, "id", id) || {};
    if (!Object.isObjectEmpty(tableObj)) selectedEvent = tableObj;
    const selectedEventParent =
      action === EventsActions.add
        ? selectedEvent
        : getParentEvent(selectedEvent);
    if (action === EventsActions.add) selectedEvent = {};
    if ([EventsActions.viewDetails].includes(action)) {
      window.dispatch(
        getEventDetails({ id: id, timeZone: window.currentZone })
      );
    }
    setSelectedObj({ ...selectedEvent, selectedEventParent });
  };

  const handleAction = (id, action, tableObj) => {
    if (Object.isObjectEmpty(tableObj)) updateSelectedEvent(id, action);
    if (!Object.isObjectEmpty(tableObj))
      updateSelectedEvent(id, action, tableObj);
    switchAddToggle(action === EventsActions.add);
    switchAddParticipantsToggle(action === EventsActions.addParticipants);
    switchDetailsToggle(action === EventsActions.viewDetails);
    switchEditToggle(action === EventsActions.edit);
    setIdSequence([...idSequence, id]);
    localStorage.setItem("default_view", false);
  };

  const handleViewDetails = (id) => {
    handleAction(id, EventsActions.viewDetails);
  };

  const onAdd = (id) => {
    handleAction(id, EventsActions.add);
  };

  const onAddParticipants = (id) => {
    handleAction(id, EventsActions.addParticipants);
  };

  const onEdit = (id, tableObj) => {
    handleAction(id, EventsActions.edit, tableObj);
  };

  const handleView = () => {
    let currentIdSequence = [...idSequence];
    let lastId = currentIdSequence.pop();
    if (currentIdSequence.length) {
      handleViewDetails(currentIdSequence[currentIdSequence.length - 1]);
      setIdSequence(currentIdSequence);
      return;
    }
    if (groupByList.open && groupByList.selectedId) {
      handleGroupByChange(true, groupByList.selectedId);
    }
    switchAddToggle(false);
    setIdSequence([]);
    switchDetailsToggle(false);
    switchEditToggle(false);
    setSelectedObj(null);
    setCalendarCellClickData({});
  };

  const handlePagination = (data = [], rowsPerPage, pageNum) => {
    if (props.allEvents) {
      setPaginate({
        requiredArr: data,
        pgCount: Math.ceil(meetings?.searchEventsDone?.count / rowsPerPage),
      });
    } else {
      const { count, requiredArr } = pagination(
        data || [],
        rowsPerPage,
        pageNum
      );
      setPaginate({ requiredArr, pgCount: count });
      setRowsPerPage(rowsPerPage);
      setPageNum(pageNum);
    }
  };

  const handleListChange = (newList) => {
    setList(newList);
  };
  const handleGroupByChange = (isTrue, alreadySelectedId = null) => {
    const isSmall = window.innerWidth < 600;

    if (!isTrue) {
      setGroupByList({ ...initGroupByState });
      handlePagination(data, rowsPerPage, pageNum);
      return;
    }

    let mainEventsWithSubEvents = [];
    let otherMainEvents = [];

    data?.map((ev) => {
      if (!ev.parentEventId && !ev.subEventCount)
        return otherMainEvents.push(ev);
      if (!ev.parentEventId && ev.subEventCount > 0)
        mainEventsWithSubEvents.push({
          ...ev,
          onClick: () => {
            window.dispatch(
              getEventDetails({ id: ev.id, timeZone: window.currentZone })
            );
            setGroupByList((prevState) => ({
              ...prevState,
              selectedId: ev.id,
              displyList: [],
            }));
          },
        });
    });

    mainEventsWithSubEvents.push({
      topic: Object.translate("OTHERS"),
      id: -1,
      subEvents: otherMainEvents,
      onClick: () =>
        setGroupByList((prevState) => ({
          ...prevState,
          selectedId: -1,
          displyList: otherMainEvents,
        })),
    });
    const firstMainEvent = mainEventsWithSubEvents[0];
    setGroupByList({
      open: !!isTrue,
      list: [...mainEventsWithSubEvents],
      displyList: isSmall
        ? []
        : firstMainEvent?.id === -1
        ? otherMainEvents
        : [],
      selectedId: isSmall
        ? null
        : alreadySelectedId
        ? alreadySelectedId
        : firstMainEvent?.id || null,
    });
    if (!isSmall) {
      if (firstMainEvent?.id > 0 && !alreadySelectedId)
        window.dispatch(
          getEventDetails({
            id: firstMainEvent?.id,
            timeZone: window.currentZone,
          })
        );
    }
  };

  const handleIncomingData = (newData) => {
    const currentNewData = newData?.map((a) => ({
      ...a,
      invitationText: getInvitationText(a),
    }));
    setOriginalData(currentNewData);
  };

  const handleLocalFilter = (newData, userId, meetStatus) => {
    let dataArr = [...newData];
    if (userId && !props.allEvents) {
      dataArr = dataArr.filter((d) => {
        if (d.byMe) return true;
        if (d.createdBy === userId) return true;
        if (d.participants?.map((p) => p.userId).includes(userId)) return true;
        return false;
      });
    }
    if (typeof meetStatus === "number") {
      dataArr = dataArr?.filter(
        (row) => row?.meetingStatus?.status === meetStatus
      );
    }
    if (meetStatus === "recorded") {
      dataArr = dataArr?.filter((row) => Array.isFullArray(row?.videoLogs));
    }
    if (view === EventsDisplayType.participants)
      handleParticipantsView(true, [...dataArr]);
    setData(dataArr);
  };
  const switchToDefault = () => {
    switchAddToggle(false);
    switchEditToggle(false);
    switchDetailsToggle(false);
    switchAddParticipantsToggle(false);
  };

  const clearSearchParams = () => {
    setSearchParams(initSearchParams);
  };

  const handleViewType = (nextView) => {
    setView(nextView);
    setGroupByList({
      ...initGroupByState,
    });
    if (nextView !== EventsDisplayType.calendar) {
      setExpandArrows(false);
      setSelectedFilter(getStatusFilters()[0]);
      setSelectedFilterIdx(0);
      setShowSubEvents(false);
    }
    if (nextView === EventsDisplayType.participants)
      handleParticipantsView(true);
  };

  const handleParticipantsPopUp = (bool = false) => {
    if (!bool) delete window.selectedAppointment;
    switchParticipantsPopUp(bool);
  };

  const handleDisplayParticipants = (participants) => {
    if (!Array.isArray(participants)) return [];
    let main = {};
    let subParticipants = [];
    participants.map((p) => {
      if (!p.groupIn) {
        main[p.userId] = { ...p, children: [] };
      } else subParticipants.push(p);
    });
    subParticipants.map((p) => {
      main[p.groupIn].children.push({ ...p, selected: true });
    });
    return Object.keys(main).map((key) => main[key]);
  };

  useEffect(() => {
    (async () => {
      if (addToggle || addParticipantsToggle || editToggle || detailsToggle)
        return;
      handleGetMyContacts();
      window.dispatch(getRelatedUsers({ handleSearch }));
    })();
  }, [isRTL]);

  useEffect(() => {
    if (addToggle || editToggle || detailsToggle) return;
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Box className={clsx(classes.myEventsHeader, "d-flex-column")}>
              <EventsHeader
                handleChange={(e, nextView) => handleViewType(nextView)}
                {...eventsProps}
              />
            </Box>
          ),
        })
      );
    })();
  }, [
    view,
    groupByList,
    paginate,
    data,
    idSequence,
    addParticipantsToggle,
    addToggle,
    editToggle,
    detailsToggle,
    selectedObj,
    rowsPerPage,
    pageNum,
    searchParams,
    openFilters,
    relatedUsers,
    selectedRelatedUser,
    showSubEvents,
    expandArrows,
    selectedFilter,
    selectedFilterIdx,
    meetingColor,
  ]);

  useEffect(() => {
    if (openFilters) return;
    clearSearchParams();
  }, [openFilters]);

  useEffect(() => {
    handleLocalFilter(originalData, selectedRelatedUser, selectedFilter?.id);
  }, [originalData, selectedRelatedUser, selectedFilter]);

  useEffect(() => {
    if (searchParams.relatedUserEvents) return;
    setSelectedRelatedUser(null);
  }, [searchParams.relatedUserEvents]);

  useEffect(() => {
    const newUsers = getListItemsForDropDownMenu(
      meetings.getRelatedUsersDone,
      "id",
      "value"
    );
    setRelatedUsers(newUsers);
  }, [meetings.getRelatedUsersDone]);

  useEffect(() => {
    if (
      !meetings.createNewMeetingDone &&
      !meetings.editExistingEventDone &&
      !meetings.addParticipantsDone
    )
      return;
    handleSearch();
    if (meetings.createNewMeetingDone?.id > 0) handleView();
    if (meetings.editExistingEventDone?.id > 0) handleView();
    if (meetings.addParticipantsDone?.id > 0) handleView();
  }, [
    meetings.createNewMeetingDone,
    meetings.editExistingEventDone,
    meetings.addParticipantsDone,
  ]);

  useEffect(() => {
    if (Object.isObjectEmpty(meetings.getEventDetailsDone)) return;
    if (selectedObj)
      setSelectedObj((prevState) => ({
        ...prevState,
        ...meetings.getEventDetailsDone,
      }));
    if (groupByList.open && groupByList.selectedId) {
      let adjustedDisplayList = meetings.getEventDetailsDone.subEvents?.map(
        (row) => ({
          ...row,
          invitationText: getInvitationText(row),
        })
      );
      setGroupByList((prevState) => ({
        ...prevState,
        list: prevState.list.map((e) =>
          e.id === groupByList.selectedId
            ? {
                ...meetings.getEventDetailsDone,
                onClick: () => {
                  window.dispatch(
                    getEventDetails({
                      id: groupByList.selectedId,
                      timeZone: window.currentZone,
                    })
                  );
                  setGroupByList((prevState) => ({
                    ...prevState,
                    selectedId: groupByList.selectedId,
                    displyList: [],
                  }));
                },
              }
            : e
        ),
        displyList: adjustedDisplayList,
        selectedId: meetings.getEventDetailsDone?.id,
      }));
    }
    switch (meetings?.getEventDetailsDone?.meetingStatus?.status) {
      case 0:
        setMeetingColor("unavailableMeetings");
        break;
      case 1:
        setMeetingColor("liveMeetings");
        break;
      case 2:
        setMeetingColor("finishedMeetings");
        break;
      case 3:
        setMeetingColor("incomingMeetings");
        break;

      default:
        break;
    }
  }, [meetings.getEventDetailsDone]);

  useEffect(() => {
    let data = Array.isArray(meetings.searchEventsDone)
      ? meetings.searchEventsDone
      : meetings.searchEventsDone?.items;
    handleIncomingData(data);
    if (selectedObj?.id)
      window.dispatch(
        getEventDetails({ id: selectedObj?.id, timeZone: window.currentZone })
      );
  }, [meetings.searchEventsDone]);

  useEffect(() => {
    if (!meetings.joinMeetingDone) return;
    if (meetings.joinMeetingDone.meetingLink) {
      if (window.self.JitsiMeetElectron) {
        window.open(meetings.joinMeetingDone.meetingLink, "_blank");
      } else {
        window.open(meetings.joinMeetingDone.meetingLink);
      }
    }
    window.dispatch(joinMeetingDone({ data: false }));
  }, [meetings.joinMeetingDone]);

  useLayoutEffect(() => {
    handlePagination(
      groupByList.open ? groupByList.displyList : data,
      rowsPerPage,
      pageNum
    );
    updateSelectedEvent(selectedObj?.id);
  }, [data, pageNum, rowsPerPage]);

  useLayoutEffect(() => {
    handlePagination(
      groupByList.open ? groupByList.displyList : data,
      rowsPerPage,
      1
    );
    updateSelectedEvent(selectedObj?.id);
  }, [groupByList]);

  useEffect(() => {
    (async () => {
      if (localStorage["default_view"] === "true") {
        switchToDefault();
      }
    })();
  }, [
    addToggle,
    editToggle,
    addParticipantsToggle,
    detailsToggle,
    localStorage["default_view"],
  ]);

  useLayoutEffect(() => {
    return () => {
      window.dispatch(searchEventsDone({ data: [] }));
      setView(EventsDisplayType.calendar);
      setData([]);
      setRowsPerPage(appRowsPerPage);
      setPageNum(1);
    };
  }, [window?.location?.pathname]);

  useEffect(() => {
    setLoaderPhrase(meetings.searchEvents);
  }, [meetings.searchEvents]);

  window.handleJoinMeeting = (
    appointment,
    link = null,
    userType = authUser?.userType
  ) => {
    if (![3, 4].includes(userType)) {
      window.goToMeeting(appointment);
      return;
    }
    handleParticipantsPopUp(true);
    setList(handleDisplayParticipants(appointment.participants));
    setParticipantsLink(link);
  };

  const handleCancelEventPopUp = () => {
    switchCancelEventsPopUp(!openCancelEventPopUp);
  };
  const handleCancelEvent = () => {
    window.dispatch(
      cancelEvents({
        id: selectedObj.id,
        body: {
          note: cancelEventNote,
        },
      })
    );
    handleCancelEventPopUp();
    setCancelEventNote("");
  };

  const eventsProps = {
    ...props,
    handleParticipantsView,
    selectedEvents,
    view,
    groupByList,
    handleGroupByChange,
    paginate,
    data,
    handlePaginationClick,
    idSequence,
    setIdSequence,
    addParticipantsToggle,
    switchAddParticipantsToggle,
    switchAddToggle,
    addToggle,
    switchEditToggle,
    editToggle,
    switchDetailsToggle,
    detailsToggle,
    setSelectedObj,
    selectedObj,
    handleView,
    handleViewDetails,
    onEdit,
    onAdd,
    onAddParticipants,
    rowsPerPage,
    setRowsPerPage,
    handleRowsPerPage,
    pageNum,
    setPageNum,
    handleSearchParamsChange,
    searchParams,
    handleSearch,
    openFilters,
    setOpenFilters,
    clearSearchParams,
    relatedUsers,
    selectedRelatedUser,
    setSelectedRelatedUser,
    showSubEvents,
    setShowSubEvents,
    setView,
    setGroupByList,
    setExpandArrows,
    expandArrows,
    selectedFilter,
    setSelectedFilter,
    selectedFilterIdx,
    setSelectedFilterIdx,
    meetingColor,
    handleCancelEventPopUp,
    loaderPhrase,
    calendarCellClickData,
    setCalendarCellClickData,
    initSearchParams,
    setSearchParams,
  };
  return (
    <>
      <ParticipantsPopUp
        list={list}
        link={participantsLink}
        handleListChange={handleListChange}
        open={openParticipantsPopUp}
        handleClose={() => handleParticipantsPopUp()}
      />
      <FieldsDialog
        title={Object.translate("EVENTS.CANCEL_EVENT")}
        contentChildren={
          <Box>
            <TextareaAutosize
              maxRows={10}
              minRows={10}
              value={cancelEventNote}
              onChange={(e) => setCancelEventNote(e.target.value)}
              style={{ width: "100%", padding: "16px" }}
              placeholder={Object.translate("LABEL.NOTE")}
            />
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              marginTop="24px"
            >
              <PrimaryButton
                onClick={() => handleCancelEvent()}
                primaryButton={Object.multiTranslate("BUTTONS.SAVE")}
              />
            </Box>
          </Box>
        }
        Dialog={openCancelEventPopUp}
        switchDialog={switchCancelEventsPopUp}
        handleReset={() => handleCancelEventPopUp()}
      />
      {detailsToggle ? (
        <HandleEvents {...eventsProps} />
      ) : addToggle ||
        editToggle ||
        addParticipantsToggle ||
        !Object.isObjectEmpty(calendarCellClickData) ? (
        <HandleEvents {...eventsProps} />
      ) : (
        <Box
          className={clsx(
            openFilters ? classes.myEvents : classes.EventsBox,
            "d-flex-column"
          )}
        >
          <div className="d-flex full-height">
            <Box className={classes.eventsSwitch}>
              {openFilters && (
                <Box className={classes.SearchFeildsBox}>
                  <SearchFeilds {...eventsProps} />
                </Box>
              )}

              <ViewEvents {...eventsProps} />
            </Box>
          </div>
        </Box>
      )}
    </>
  );
}
