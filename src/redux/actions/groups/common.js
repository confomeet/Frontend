import { createAction } from "../creators";

export default {
  ...createAction("GET_COUNTRIES"),
  ...createAction("GET_COUNTRIES_DONE", "data"),
};
