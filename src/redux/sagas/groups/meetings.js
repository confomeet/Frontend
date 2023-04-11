import { call, put, takeLatest } from "redux-saga/effects";
import actions from "../../actions";
import {
  addEventsTypesReq,
  addNewMeeting,
  addNoteToParticipant,
  addParticipantsToMeeting,
  calendarMeets,
  cancelEvent,
  deleteEventsTypesReq,
  deleteParticipantsReq,
  editEventsTypesReq,
  editExistingMeeting,
  eventsTypes,
  fetchEventDetails,
  fetchMeetingLinkByUserId,
  fetchRelatedUsers,
  getActiveParticipantsReq,
  getActiveRoomListReq,
  getMeetingLink,
  remindParticipant,
  searchInEvents,
  sendSMS,
} from "../../network/meetings";

const {
  ADD_PARTICIPANT_NOTE,
  addParticipantNoteDone,
  SEND_SMS_TO_PARTICIPANT,
  sendSmsToParticipantDone,
  SEARCH_EVENTS,
  searchEventsDone,
  GET_EVENT_DETAILS,
  REMIND_PARTICIPANT,
  remindParticipantDone,
  getEventDetailsDone,
  GET_RELATED_USERS,
  getRelatedUsersDone,
  GET_CALENDAR_MEETINGS,
  getCalendarMeetingsDone,
  GET_EVENTS_TYPES,
  getEventsTypes,
  getEventsTypesDone,
  JOIN_MEETING_BY_USER_ID,
  joinMeetingByUserIdDone,
  CREATE_NEW_MEETING,
  createNewMeetingDone,
  JOIN_MEETING,
  joinMeetingDone,
  ADD_PARTICIPANTS,
  addParticipantsDone,
  EDIT_EVENT,
  editEventDone,
  DELETE_PARTICIPANT,
  deleteParticipantDone,
  GET_ACTIVE_ROOM_LIST,
  getActiveRoomListDone,
  GET_ACTIVE_PARTICIPANTS,
  getActiveParticipantsDone,
  ADD_EVENTS_TYPES,
  addEventsTypesDone,
  EDIT_EVENTS_TYPES,
  editEventsTypesDone,
  DELETE_EVENTS_TYPES,
  deleteEventsTypesDone,
  CANCEL_EVENTS,
  cancelEventsDone,
} = actions;

function* performSearchEvents({ body, params, isAllEvents }) {
  try {
    const result = yield call(searchInEvents, { body, params, isAllEvents });
    if (!result.networkSuccess) {
      yield put(searchEventsDone({ data: [] }));
    } else if (result.data) {
      yield put(
        searchEventsDone({
          data: result.data,
        })
      );
    }
    window.handlePhraseLoader();
  } catch {
    yield put(searchEventsDone({ data: [] }));
    window.handlePhraseLoader();
    return;
  }
}

export function* watchSearchEvents() {
  yield takeLatest(SEARCH_EVENTS, performSearchEvents);
}

function* performGetEventDetails({ id, timeZone }) {
  try {
    const result = yield call(fetchEventDetails, { id, timeZone: timeZone });
    if (!result.networkSuccess) {
      yield put(getEventDetailsDone({ data: {} }));
    } else if (result.data) {
      yield put(getEventDetailsDone({ data: result.data }));
    }
  } catch {
    yield put(getEventDetailsDone({ data: {} }));
    return;
  }
}

export function* watchGetEventDetails() {
  yield takeLatest(GET_EVENT_DETAILS, performGetEventDetails);
}

function* performGetRelatedUsers({ handleSearch }) {
  let data = [];
  try {
    const result = yield call(fetchRelatedUsers);
    if (result.networkSuccess && result.data) data = result.data;
  } catch {}

  handleSearch({ relatedUserEvents: !!data.length });
  yield put(getRelatedUsersDone({ data }));
}

export function* watchGetRelatedUsers() {
  yield takeLatest(GET_RELATED_USERS, performGetRelatedUsers);
}

function* performGetCalendarMeetings(action) {
  try {
    const result = yield call(calendarMeets);
    if (!result.networkSuccess) {
      yield put(getCalendarMeetingsDone({ data: [] }));
    } else if (result.data) {
      yield put(getCalendarMeetingsDone({ data: result.data }));
    }
  } catch {
    yield put(getCalendarMeetingsDone({ data: [] }));
    return;
  }
}

export function* watchGetCalendarMeetings() {
  yield takeLatest(GET_CALENDAR_MEETINGS, performGetCalendarMeetings);
}

function* performGetEventsTypes(action) {
  try {
    const result = yield call(eventsTypes);
    if (!result.networkSuccess) {
      yield put(getEventsTypesDone({ data: [] }));
    } else {
      yield put(getEventsTypesDone({ data: result.data }));
    }
  } catch {
    yield put(getEventsTypesDone({ data: [] }));
    return;
  }
}

export function* watchGetEventsTypes() {
  yield takeLatest(GET_EVENTS_TYPES, performGetEventsTypes);
}

function* performJoinMeetingByUserId({ params, pathParams, body }) {
  try {
    const result = yield call(fetchMeetingLinkByUserId, {
      params,
      pathParams,
      body,
    });
    if (!result.networkSuccess) {
      yield put(joinMeetingByUserIdDone({ data: false }));
    } else if (result.data) {
      yield put(joinMeetingByUserIdDone({ data: result.data }));
    }
  } catch {
    yield put(joinMeetingByUserIdDone({ data: false }));
    return;
  }
}

export function* watchJoinMeetingByUserId() {
  yield takeLatest(JOIN_MEETING_BY_USER_ID, performJoinMeetingByUserId);
}

function* performCreateNewMeeting({ body, params }) {
  try {
    const result = yield call(addNewMeeting, { body, params });
    if (!result.networkSuccess) {
      yield put(createNewMeetingDone({ data: false }));
    } else {
      yield put(createNewMeetingDone({ data: result.data }));
    }
  } catch {
    yield put(createNewMeetingDone({ data: false }));
    return;
  }
}

export function* watchCreateNewMeeting() {
  yield takeLatest(CREATE_NEW_MEETING, performCreateNewMeeting);
}

function* performJoinMeeting({ params, meetingId, body }) {
  try {
    const result = yield call(getMeetingLink, { params, meetingId, body });
    if (!result.networkSuccess) {
      yield put(joinMeetingDone({ data: false }));
    } else {
      yield put(joinMeetingDone({ data: result.data }));
    }
  } catch {
    yield put(joinMeetingDone({ data: false }));
    return;
  }
}

export function* watchJoinMeeting() {
  yield takeLatest(JOIN_MEETING, performJoinMeeting);
}

function* performAddParticipants({ id, body }) {
  try {
    const result = yield call(addParticipantsToMeeting, { id, body });
    if (!result.networkSuccess) {
      yield put(addParticipantsDone({ data: false }));
    } else {
      yield put(addParticipantsDone({ data: result.data }));
    }
  } catch {
    yield put(addParticipantsDone({ data: false }));
    return;
  }
}

export function* watchAddParticipants() {
  yield takeLatest(ADD_PARTICIPANTS, performAddParticipants);
}

function* performEditEvent({ id, body }) {
  try {
    const result = yield call(editExistingMeeting, { id, body });
    if (!result.networkSuccess) {
      yield put(editEventDone({ data: null }));
    } else {
      yield put(editEventDone({ data: result.data }));
    }
  } catch {
    yield put(editEventDone({ data: null }));
    return;
  }
}
export function* watchEditEvent() {
  yield takeLatest(EDIT_EVENT, performEditEvent);
}

function* performDeleteParticipant({ id }) {
  let resultData;
  try {
    const result = yield call(deleteParticipantsReq, id);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(deleteParticipantDone({ data: resultData }));
}

export function* watchDeleteParticipant() {
  yield takeLatest(DELETE_PARTICIPANT, performDeleteParticipant);
}

function* performGetActiveRoomList() {
  let resultData;
  try {
    const result = yield call(getActiveRoomListReq);
    resultData = result.networkSuccess ? result.data?.result : [];
  } catch (e) {
    resultData = {};
  }
  yield put(getActiveRoomListDone({ data: resultData }));
}

export function* watchGetActiveRoomList() {
  yield takeLatest(GET_ACTIVE_ROOM_LIST, performGetActiveRoomList);
}

function* performGetActiveParticipants({ meetingId, id }) {
  let resultData;
  try {
    const result = yield call(getActiveParticipantsReq, meetingId, id);
    resultData = result.networkSuccess ? result.data?.result : [];
  } catch (e) {
    resultData = {};
  }
  yield put(getActiveParticipantsDone({ data: resultData }));
}

export function* watchGetActiveParticipants() {
  yield takeLatest(GET_ACTIVE_PARTICIPANTS, performGetActiveParticipants);
}

function* performRemindParticipant({ id, body }) {
  let resultData;
  try {
    const result = yield call(remindParticipant, { id, body });
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(remindParticipantDone({ data: resultData }));
}

export function* watchRemindParticipant() {
  yield takeLatest(REMIND_PARTICIPANT, performRemindParticipant);
}

function* performAddEventsTypes({ body }) {
  let resultData;
  try {
    const result = yield call(addEventsTypesReq, body);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(addEventsTypesDone({ data: resultData }));
  if (resultData) yield put(getEventsTypes());
}

export function* watchAddEventsTypes() {
  yield takeLatest(ADD_EVENTS_TYPES, performAddEventsTypes);
}

function* performEditEventsTypes({ body, params }) {
  let resultData;
  try {
    const result = yield call(editEventsTypesReq, body, params);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(editEventsTypesDone({ data: resultData }));

  if (!Object.isObjectEmpty(resultData)) yield put(getEventsTypes());
}

export function* watchEditEventsTypes() {
  yield takeLatest(EDIT_EVENTS_TYPES, performEditEventsTypes);
}

function* performDeleteEventsTypes({ id }) {
  let resultData;
  try {
    const result = yield call(deleteEventsTypesReq, id);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(deleteEventsTypesDone({ data: resultData }));
  if (resultData) yield put(getEventsTypes());
}

export function* watchDeleteEventsTypes() {
  yield takeLatest(DELETE_EVENTS_TYPES, performDeleteEventsTypes);
}

function* performAddNoteToParticipant({ id, body }) {
  let resultData;
  try {
    const result = yield call(addNoteToParticipant, { id, body });
    resultData = result.networkSuccess ? result.data?.result : false;
  } catch (e) {
    resultData = false;
  }
  yield put(addParticipantNoteDone({ data: resultData }));
}

export function* watchAddNoteToParticipant() {
  yield takeLatest(ADD_PARTICIPANT_NOTE, performAddNoteToParticipant);
}

function* performSendSMS({ body }) {
  let resultData;
  try {
    const result = yield call(sendSMS, body);
    resultData = result.networkSuccess ? result.data?.result : false;
  } catch (e) {
    resultData = false;
  }
  yield put(sendSmsToParticipantDone({ data: resultData }));
}

export function* watchSendSMS() {
  yield takeLatest(SEND_SMS_TO_PARTICIPANT, performSendSMS);
}

function* performCancelEvent({ id, body }) {
  let resultData;
  try {
    const result = yield call(cancelEvent, { id, body });
    resultData = result.networkSuccess ? result.data?.result : false;
  } catch (e) {
    resultData = false;
  }
  yield put(cancelEventsDone({ data: resultData }));
}

export function* watchCancelEvent() {
  yield takeLatest(CANCEL_EVENTS, performCancelEvent);
}
