import { createAction } from "../creators";

export default {
  ...createAction("GET_NOTIFICATIONS", "body", "isAdmin"),
  ...createAction("GET_NOTIFICATIONS_DONE", "data"),

  ...createAction("ADD_NOTIFICATION", "data"),
  ...createAction("COMPLETE_ADD_NOTIFICATION", "data"),

  ...createAction("EDIT_NOTIFICATION", "data"),
  ...createAction("COMPLETE_EDIT_NOTIFICATION", "data"),

  ...createAction("DELETE_NOTIFICATIONS", "data"),
  ...createAction("COMPLETE_DELETE_NOTIFICATIONS", "data"),

  ...createAction("FETCH_NOTIFICATIONS_PARAMS", "data"),
  ...createAction("COMPLETE_FETCH_NOTIFICATIONS_PARAMS", "data"),

  ...createAction("FETCH_CHANNELS", "data"),
  ...createAction("COMPLETE_FETCH_CHANNELS", "data"),

  ...createAction("FETCH_MY_NOTIFICATIONS", "data"),
  ...createAction("COMPLETE_FETCH_MY_NOTIFICATIONS", "data"),

  ...createAction("READ_NOTIFICATION", "data"),
  ...createAction("COMPLETE_READ_NOTIFICATION", "data"),

  ...createAction("FETCH_NOTIFICATIONS_COUNT", "data"),
  ...createAction("COMPLETE_FETCH_NOTIFICATIONS_COUNT", "data"),

  ...createAction("SEND_NOTIFY_TO_CONTACT", "body", "id"),
  ...createAction("SEND_NOTIFY_TO_CONTACT_DONE", "data"),
};
