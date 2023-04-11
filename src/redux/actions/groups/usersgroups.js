import { createAction } from "../creators";

export default {
  ...createAction("GET_USERS_GROUPS", "customHeaders", "params"),
  ...createAction("GET_USERS_GROUPS_DONE", "data"),

  ...createAction("GET_USERS_GROUP_BY_ID", "params"),
  ...createAction("GET_USERS_GROUP_BY_ID_DONE", "data"),

  ...createAction("ADD_USERS_GROUPS", "payload"),
  ...createAction("ADD_USERS_GROUPS_DONE", "data"),

  ...createAction("EDIT_USERS_GROUPS", "payload", "id"),
  ...createAction("EDIT_USERS_GROUPS_DONE", "data"),

  ...createAction("DELETE_USERS_GROUPS", "params"),
  ...createAction("DELETE_USERS_GROUPS_DONE", "data"),

  ...createAction("ADD_TO_GROUP", "body"),
  ...createAction("ADD_TO_GROUP_DONE", "data"),

  ...createAction("DELETE_FROM_GROUP", "id"),
  ...createAction("DELETE_FROM_GROUP_DONE", "data"),
};
