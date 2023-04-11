import * as ACTION_TYPES from "./actionTypes";
import { createAction } from "./creators";

export default {
  ...createAction(ACTION_TYPES.SET_LANG, "lang"),

  ...createAction(ACTION_TYPES.OPEN_VIDEO_FRAME, "link"),
  ...createAction(ACTION_TYPES.OPEN_PDF_VIEWER, "base64PDF"),

  ...createAction(ACTION_TYPES.SET_SUB_HEADER, "subHeader"),

  ...createAction(ACTION_TYPES.SET_INVESIGATION_PARTY_ID, "partyId"),

  ...createAction(ACTION_TYPES.SET_AUTH_USER, "authUser"),
  ...createAction(ACTION_TYPES.CLEAR_AUTH_USER),

  ...createAction(ACTION_TYPES.OPEN_SIDE_MENU),
  ...createAction(ACTION_TYPES.CLOSE_SIDE_MENU),

  ...createAction(ACTION_TYPES.SET_HEADER_PAGE_TITLE, "pageTitle"),

  ...createAction(ACTION_TYPES.SET_DIRECT_POPUP_DATA, "data"),

  ...createAction(ACTION_TYPES.SET_ALERT_MESSAGE, "severity", "text"),
  ...createAction(ACTION_TYPES.CLEAR_ALERT_MESSAGE),

  ...createAction(ACTION_TYPES.SET_PHRASE_LOADER, "severity", "text"),
  ...createAction(ACTION_TYPES.CLEAR_PHRASE_LOADER),
};
