import { createAction } from "../creators";

export default {
  ...createAction("GET_CONTACTS"),
  ...createAction("GET_CONTACTS_DONE", "data"),
  ...createAction("UPDATE_CONTACTS_STATUS", "id", "isActive"),

  ...createAction("GET_MY_CONTACTS", "body"),
  ...createAction("GET_MY_CONTACTS_DONE", "data"),

  ...createAction("GET_CONTACT_BY_ID", "params"),
  ...createAction("GET_CONTACT_BY_ID_DONE", "data"),

  ...createAction("GET_COMPANY_BY_ID", "params"),
  ...createAction("GET_COMPANY_BY_ID_DONE", "data"),

  ...createAction("GET_SECTION_BY_ID", "params"),
  ...createAction("GET_SECTION_BY_ID_DONE", "data"),

  ...createAction("GET_MANAGER_BY_ID", "params"),
  ...createAction("GET_MANAGER_BY_ID_DONE", "data"),

  ...createAction("ADD_CONTACT", "body", "imageData"),
  ...createAction("ADD_CONTACT_DONE", "data"),

  ...createAction("EDIT_CONTACT", "body", "id"),
  ...createAction("EDIT_CONTACT_DONE", "data"),

  ...createAction("DELETE_CONTACT", "body", "id"),
  ...createAction("DELETE_CONTACT_DONE", "data"),

  ...createAction("INITIATE_CONTACT_MEET", "id", "params"),
  ...createAction("INITIATE_CONTACT_MEET_DONE", "data"),

  ...createAction("FEEDBACK_CONTACT", "params"),
  ...createAction("FEEDBACK_CONTACT_DONE", "data"),

  ...createAction("SET_INCOMING_CALL", "data"),
  ...createAction("SET_CALL_RESPONSE", "data"),

  ...createAction("GET_CONTACTS_TABS"),
  ...createAction("GET_CONTACTS_TABS_DONE", "data"),

  ...createAction("GET_CONNECTED_CONTACTS", "id"),
  ...createAction("GET_DISCONNECTED_CONTACTS", "id"),

  ...createAction("GET_CONTACT_IMG", "params"),
  ...createAction("GET_CONTACT_IMG_DONE", "data"),
};
