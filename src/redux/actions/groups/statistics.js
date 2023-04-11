import { createAction } from "../creators";

export default {
  ...createAction("GET_EVENTS_BY_APP_STATISTICS", "body"),
  ...createAction("GET_EVENTS_BY_APP_STATISTICS_DONE", "data"),

  ...createAction("GET_EVENTS_BY_STATUS_STATISTICS", "body", "params"),
  ...createAction("GET_EVENTS_BY_STATUS_STATISTICS_DONE", "data"),

  ...createAction("GET_USERS_BY_STATUS_STATISTICS", "body"),
  ...createAction("GET_USERS_BY_STATUS_STATISTICS_DONE", "data"),

  ...createAction("GET_ACTIVE_ROOMS_STATISTICS"),
  ...createAction("GET_ACTIVE_ROOMS_STATISTICS_DONE", "data"),
};
