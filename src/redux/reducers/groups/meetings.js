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
  JOIN_MEETING_BY_USER_ID,
  JOIN_MEETING_BY_USER_ID_DONE,
  CREATE_NEW_MEETING,
  CREATE_NEW_MEETING_DONE,
  JOIN_MEETING,
  JOIN_MEETING_DONE,
  EDIT_EVENT,
  EDIT_EVENT_DONE,
  DELETE_PARTICIPANT,
  DELETE_PARTICIPANT_DONE,
  GET_ACTIVE_PARTICIPANTS,
  GET_ACTIVE_PARTICIPANTS_DONE,
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
      console.log("Receive new event details " + JSON.stringify(action.data));
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
  joinMeetingByUserId,
  joinMeetingByUserIdDone,
  createNewMeeting,
  createNewMeetingDone,
  joinMeeting,
  joinMeetingDone,
  editExistingEvent,
  editExistingEventDone,
  isDeletingParticipant,
  deleteParticipantComplete,
  gettingActiveParticipants,
  getActiveParticipantsComplete,
  cancelEvent,
  cancelEventComplete,
});
