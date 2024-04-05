import actions from "../../actions";
import { combineReducers } from "redux";

const {
  ADD_PARTICIPANT_NOTE,
  ADD_PARTICIPANT_NOTE_DONE,
  SEND_SMS_TO_PARTICIPANT,
  SEND_SMS_TO_PARTICIPANT_DONE,
  SEARCH_EVENTS,
  SEARCH_EVENTS_DONE,
  GET_EVENT_DETAILS,
  GET_EVENT_DETAILS_DONE,
  REMIND_PARTICIPANT,
  REMIND_PARTICIPANT_DONE,
  GET_RELATED_USERS,
  GET_RELATED_USERS_DONE,
  GET_CALENDAR_MEETINGS,
  GET_CALENDAR_MEETINGS_DONE,
  GET_EVENTS_TYPES,
  GET_EVENTS_TYPES_DONE,
  JOIN_MEETING_BY_USER_ID,
  JOIN_MEETING_BY_USER_ID_DONE,
  CREATE_NEW_MEETING,
  CREATE_NEW_MEETING_DONE,
  JOIN_MEETING,
  JOIN_MEETING_DONE,
  ADD_PARTICIPANTS,
  ADD_PARTICIPANTS_DONE,
  EDIT_EVENT,
  EDIT_EVENT_DONE,
  DELETE_PARTICIPANT,
  DELETE_PARTICIPANT_DONE,
  GET_ACTIVE_ROOM_LIST,
  GET_ACTIVE_ROOM_LIST_DONE,
  GET_ACTIVE_PARTICIPANTS,
  GET_ACTIVE_PARTICIPANTS_DONE,
  ADD_EVENTS_TYPES,
  ADD_EVENTS_TYPES_DONE,
  EDIT_EVENTS_TYPES,
  EDIT_EVENTS_TYPES_DONE,
  DELETE_EVENTS_TYPES,
  DELETE_EVENTS_TYPES_DONE,
  CANCEL_EVENTS,
  CANCEL_EVENTS_DONE,
} = actions;

export const isAddingParticipantNote = (state = false, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT_NOTE:
      return true;
    case ADD_PARTICIPANT_NOTE_DONE:
      return false;
    default:
      return state;
  }
};
export const AddedParticipantNote = (state = false, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT_NOTE_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isSendingSMS = (state = false, action) => {
  switch (action.type) {
    case SEND_SMS_TO_PARTICIPANT:
      return true;
    case SEND_SMS_TO_PARTICIPANT_DONE:
      return false;
    default:
      return state;
  }
};
export const SentSMS = (state = false, action) => {
  switch (action.type) {
    case SEND_SMS_TO_PARTICIPANT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const searchEvents = (state = false, action) => {
  switch (action.type) {
    case SEARCH_EVENTS:
      return true;
    case SEARCH_EVENTS_DONE:
      return false;
    default:
      return state;
  }
};
export const searchEventsDone = (state = [], action) => {
  switch (action.type) {
    case SEARCH_EVENTS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const remindParticipants = (state = false, action) => {
  switch (action.type) {
    case REMIND_PARTICIPANT:
      return true;
    case REMIND_PARTICIPANT_DONE:
      return false;
    default:
      return state;
  }
};
export const remindParticipantsDone = (state = {}, action) => {
  switch (action.type) {
    case REMIND_PARTICIPANT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getEventDetails = (state = false, action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS:
      return true;
    case GET_EVENT_DETAILS_DONE:
      return false;
    default:
      return state;
  }
};
export const getEventDetailsDone = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENT_DETAILS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getRelatedUsers = (state = false, action) => {
  switch (action.type) {
    case GET_RELATED_USERS:
      return true;
    case GET_RELATED_USERS_DONE:
      return false;
    default:
      return state;
  }
};
export const getRelatedUsersDone = (state = [], action) => {
  switch (action.type) {
    case GET_RELATED_USERS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getCalendarMeetings = (state = false, action) => {
  switch (action.type) {
    case GET_CALENDAR_MEETINGS:
      return true;
    case GET_CALENDAR_MEETINGS_DONE:
      return false;
    default:
      return state;
  }
};
export const getCalendarMeetingsDone = (state = [], action) => {
  switch (action.type) {
    case GET_CALENDAR_MEETINGS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const joinMeetingByUserId = (state = false, action) => {
  switch (action.type) {
    case JOIN_MEETING_BY_USER_ID:
      return true;
    case JOIN_MEETING_BY_USER_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const joinMeetingByUserIdDone = (state = false, action) => {
  switch (action.type) {
    case JOIN_MEETING_BY_USER_ID_DONE:
      return action.data;
    default:
      return state;
  }
};

export const createNewMeeting = (state = false, action) => {
  switch (action.type) {
    case CREATE_NEW_MEETING:
      return true;
    case CREATE_NEW_MEETING_DONE:
      return false;
    default:
      return state;
  }
};
export const createNewMeetingDone = (state = false, action) => {
  switch (action.type) {
    case CREATE_NEW_MEETING_DONE:
      return action.data;
    default:
      return state;
  }
};

export const editExistingEvent = (state = false, action) => {
  switch (action.type) {
    case EDIT_EVENT:
      return true;
    case EDIT_EVENT_DONE:
      return false;
    default:
      return state;
  }
};
export const editExistingEventDone = (state = null, action) => {
  switch (action.type) {
    case EDIT_EVENT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const joinMeeting = (state = false, action) => {
  switch (action.type) {
    case JOIN_MEETING:
      return true;
    case JOIN_MEETING_DONE:
      return false;
    default:
      return state;
  }
};
export const joinMeetingDone = (state = false, action) => {
  switch (action.type) {
    case JOIN_MEETING_DONE:
      return action.data;
    default:
      return state;
  }
};

export const addParticipants = (state = false, action) => {
  switch (action.type) {
    case ADD_PARTICIPANTS:
      return true;
    case ADD_PARTICIPANTS_DONE:
      return false;
    default:
      return state;
  }
};

export const addParticipantsDone = (state = false, action) => {
  switch (action.type) {
    case ADD_PARTICIPANTS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isDeletingParticipant = (state = false, action) => {
  switch (action.type) {
    case DELETE_PARTICIPANT:
      return true;
    case DELETE_PARTICIPANT_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const deleteParticipantComplete = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PARTICIPANT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const gettingActiveRoomList = (state = false, action) => {
  switch (action.type) {
    case GET_ACTIVE_ROOM_LIST:
      return true;
    case GET_ACTIVE_ROOM_LIST_DONE:
      return false;
    default:
      return state;
  }
};
export const gettingActiveRoomListComplete = (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVE_ROOM_LIST_DONE:
      return action.data;
    default:
      return state;
  }
};

export const gettingActiveParticipants = (state = false, action) => {
  switch (action.type) {
    case GET_ACTIVE_PARTICIPANTS:
      return true;
    case GET_ACTIVE_PARTICIPANTS_DONE:
      return false;
    default:
      return state;
  }
};
export const getActiveParticipantsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVE_PARTICIPANTS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const cancelEvent = (state = false, action) => {
  switch (action.type) {
    case CANCEL_EVENTS:
      return true;
    case CANCEL_EVENTS_DONE:
      return false;
    default:
      return state;
  }
};
export const cancelEventComplete = (state = {}, action) => {
  switch (action.type) {
    case CANCEL_EVENTS_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isAddingParticipantNote,
  AddedParticipantNote,
  isSendingSMS,
  SentSMS,
  searchEvents,
  searchEventsDone,
  getEventDetails,
  getEventDetailsDone,
  getRelatedUsers,
  getRelatedUsersDone,
  getCalendarMeetings,
  getCalendarMeetingsDone,
  joinMeetingByUserId,
  joinMeetingByUserIdDone,
  createNewMeeting,
  createNewMeetingDone,
  joinMeeting,
  joinMeetingDone,
  addParticipants,
  addParticipantsDone,
  editExistingEvent,
  editExistingEventDone,
  isDeletingParticipant,
  deleteParticipantComplete,
  gettingActiveRoomList,
  gettingActiveRoomListComplete,
  gettingActiveParticipants,
  getActiveParticipantsComplete,
  cancelEvent,
  cancelEventComplete,
});
