import { fork } from "redux-saga/effects";
import * as users from "./groups/users";
import * as meetings from "./groups/meetings";
import * as common from "./groups/common";
import * as notifications from "./groups/notifications";
import * as contacts from "./groups/contacts";
import * as tabs from "./groups/tabs";
import * as statistics from "./groups/statistics";
import * as usersgroups from "./groups/usersgroups";
const sagas = Object.values({
  ...users,
  ...meetings,
  ...common,
  ...notifications,
  ...contacts,
  ...tabs,
  ...statistics,
  ...usersgroups,
});

export default function* rootSaga(getState) {
  for (let index = 0; index < sagas.length; index++) {
    yield fork(sagas[index]);
  }
}
