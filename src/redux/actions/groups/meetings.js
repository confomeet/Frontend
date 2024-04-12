import { createAction } from "../creators";

export default {
  ...createAction("SEARCH_EVENTS", "body", "params", "isAllEvents"),
  ...createAction("SEARCH_EVENTS_DONE", "data"),

  ...createAction("GET_EVENT_DETAILS", "id", "timeZone"),
  ...createAction("GET_EVENT_DETAILS_DONE", "data"),

  ...createAction("REMIND_PARTICIPANT", "id", "body"),
  ...createAction("REMIND_PARTICIPANT_DONE", "data"),

  ...createAction("ADD_PARTICIPANT_NOTE", "id", "body"),
  ...createAction("ADD_PARTICIPANT_NOTE_DONE", "data"),

  ...createAction("SEND_SMS_TO_PARTICIPANT", "body"),
  ...createAction("SEND_SMS_TO_PARTICIPANT_DONE", "data"),

  ...createAction("GET_RELATED_USERS", "handleSearch"),
  ...createAction("GET_RELATED_USERS_DONE", "data"),

  ...createAction("GET_CALENDAR_MEETINGS"),
  ...createAction("GET_CALENDAR_MEETINGS_DONE", "data"),

  ...createAction("GET_EVENTS_TYPES"),
  ...createAction("GET_EVENTS_TYPES_DONE", "data"),

  ...createAction("JOIN_MEETING_BY_USER_ID", "params", "pathParams", "body"),
  ...createAction("JOIN_MEETING_BY_USER_ID_DONE", "data"),

  ...createAction("CREATE_NEW_MEETING", "body", "params"),
  ...createAction("CREATE_NEW_MEETING_DONE", "data"),

  ...createAction("EDIT_EVENT", "body", "id"),
  ...createAction("EDIT_EVENT_DONE", "data"),

  ...createAction("JOIN_MEETING", "params", "body", "meetingId"),
  ...createAction("JOIN_MEETING_DONE", "data"),

  ...createAction("ADD_PARTICIPANTS", "body", "id"),
  ...createAction("ADD_PARTICIPANTS_DONE", "data"),

  ...createAction("DELETE_PARTICIPANT", "id"),
  ...createAction("DELETE_PARTICIPANT_DONE", "data"),

  ...createAction("GET_ACTIVE_PARTICIPANTS", "meetingId", "id"),
  ...createAction("GET_ACTIVE_PARTICIPANTS_DONE", "data"),

  ...createAction("GET_FINISHED_MEETINGS", "body"),
  ...createAction("GET_FINISHED_MEETINGS_DONE", "data"),

  ...createAction("GET_FINISHED_MEETING_DETAILS", "params"),
  ...createAction("GET_FINISHED_MEETING_DETAILS_DONE", "data"),

  ...createAction("ADD_EVENTS_TYPES", "body"),
  ...createAction("ADD_EVENTS_TYPES_DONE", "data"),

  ...createAction("EDIT_EVENTS_TYPES", "body", "params"),
  ...createAction("EDIT_EVENTS_TYPES_DONE", "data"),

  ...createAction("DELETE_EVENTS_TYPES", "id"),
  ...createAction("DELETE_EVENTS_TYPES_DONE", "data"),

  ...createAction("CANCEL_EVENTS", "id", "body"),
  ...createAction("CANCEL_EVENTS_DONE", "data"),
};
