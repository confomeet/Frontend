import { createAction } from "../creators";

export default {
  ...createAction("LOADING_ACTION"),
  ...createAction("LOADING_RETURNED"),
};
