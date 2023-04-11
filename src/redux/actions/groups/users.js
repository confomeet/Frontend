import { createAction } from "../creators";

export default {
  ...createAction("CONFIRM_ACCOUNT", "id", "key"),
  ...createAction("COMPLETE_CONFIRM_ACCOUNT", "data"),

  ...createAction("LOCK_ACCOUNT", "id", "key"),
  ...createAction("COMPLETE_LOCK_ACCOUNT", "data"),

  ...createAction("UNLOCK_ACCOUNT", "id", "key"),
  ...createAction("COMPLETE_UNLOCK_ACCOUNT", "data"),

  ...createAction("FETCH_ALL_ROLES", "body"),
  ...createAction("COMPLETE_FETCH_ALL_ROLES", "data"),

  ...createAction("ADD_USER", "body", "userGroupData"),
  ...createAction("COMPLETE_ADD_USER", "data"),

  ...createAction("EDIT_USER", "body", "id"),
  ...createAction("COMPLETE_EDIT_USER", "data"),

  ...createAction("DELETE_USER", "body", "id"),
  ...createAction("COMPLETE_DELETE_USER", "data"),

  ...createAction("LOG_IN", "data", "IP", "remember", "lang"),
  ...createAction("LOG_IN_DONE", "data"),

  ...createAction("FORGOT_PASSWORD", "data"),
  ...createAction("FORGOT_PASSWORD_DONE", "data"),

  ...createAction("RESET_PASSWORD", "data"),
  ...createAction("RESET_PASSWORD_DONE", "data"),

  ...createAction("SIGN_UP", "data", "IP"),
  ...createAction("SIGN_UP_DONE", "data"),

  ...createAction("LOG_OUT"),

  ...createAction("CONFIRM_USER", "data", "lang"),
  ...createAction("CONFIRM_USER_DONE", "data"),

  ...createAction("RECONFIRM_USER", "data", "lang"),
  ...createAction("RECONFIRM_USER_DONE", "data"),

  ...createAction("GET_USERS", "data", "lang"),
  ...createAction("GET_USERS_DONE", "data"),

  ...createAction("PUSH_NOTIFICATION", "body"),
  ...createAction("PUSH_NOTIFICATION_DONE", "data"),

  ...createAction("GET_USER_BY_ID", "id"),
  ...createAction("GET_USER_BY_ID_DONE", "data"),

  ...createAction("SEARCH_USERS", "body"),
  ...createAction("SEARCH_USERS_DONE", "data"),

  ...createAction("EDIT_PASSWORD", "body"),
  ...createAction("EDIT_PASSWORD_DONE", "data"),

  ...createAction("VERIFY_USER_CREDENTIALS", "body"),
  ...createAction("VERIFY_USER_CREDENTIALS_DONE", "data"),

  ...createAction("VERIFY_OTP", "body"),
  ...createAction("VERIFY_OTP_DONE", "data"),

  ...createAction("GET_PROFILE_INFO"),
  ...createAction("GET_PROFILE_INFO_DONE", "data"),

  ...createAction("GET_SMTP_CONFIG"),
  ...createAction("GET_SMTP_CONFIG_DONE", "data"),

  ...createAction("HANDLE_SMTP_CONFIG", "body"),
  ...createAction("HANDLE_SMTP_CONFIG_DONE", "data"),

  ...createAction("GET_PROFILE_IMG", "params"),
  ...createAction("GET_PROFILE_IMG_DONE", "data"),
};
