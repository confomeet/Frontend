import { createAction } from "../creators";

export default {
  ...createAction("SET_ALERT_OBJECT", "data"),
  ...createAction("CLEAR_ALERT_OBJECT", "data"),
};
