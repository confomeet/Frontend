import { createAction } from "../creators";

export default {
  ...createAction("GET_ALL_TABS"),
  ...createAction("GET_ALL_TABS_DONE", "data"),

  ...createAction("ADD_TABS", "body"),
  ...createAction("ADD_TABS_DONE", "data"),

  ...createAction("EDIT_TABS", "id", "body"),
  ...createAction("EDIT_TABS_DONE", "data"),

  ...createAction("DELETE_TABS", "id"),
  ...createAction("DELETE_TABS_DONE", "data"),

  ...createAction("GET_MY_TABS"),
  ...createAction("GET_MY_TABS_DONE", "data"),
};
