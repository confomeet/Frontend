import { put, takeLatest, call } from "redux-saga/effects";
import {
  getEventsByAppStatistics,
  getEventsByStatusStatistics,
  getUsersByStatusStatistics,
  getActiveRoomsStatisticsReq,
} from "../../network/statistics";
import actions from "../../actions";

const {
  GET_EVENTS_BY_APP_STATISTICS,
  getEventsByAppStatisticsDone,
  GET_EVENTS_BY_STATUS_STATISTICS,
  getEventsByStatusStatisticsDone,
  GET_USERS_BY_STATUS_STATISTICS,
  getUsersByStatusStatisticsDone,
  GET_ACTIVE_ROOMS_STATISTICS,
  getActiveRoomsStatisticsDone,
} = actions;

function* performGetEventsByAppStatistics({ body }) {
  let resultData;
  try {
    const result = yield call(getEventsByAppStatistics, { body });
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getEventsByAppStatisticsDone({ data: resultData }));
}

export function* watchGetEventsByAppStatistics() {
  yield takeLatest(
    GET_EVENTS_BY_APP_STATISTICS,
    performGetEventsByAppStatistics
  );
}

function* performGetEventsByStatusStatistics({ body, params }) {
  let resultData;

  try {
    const result = yield call(getEventsByStatusStatistics, { body, params });
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getEventsByStatusStatisticsDone({ data: resultData }));
}

export function* watchGetEventsByStatusStatistics() {
  yield takeLatest(
    GET_EVENTS_BY_STATUS_STATISTICS,
    performGetEventsByStatusStatistics
  );
}

function* performGetUsersByStatusStatistics({ body }) {
  let resultData;
  try {
    const result = yield call(getUsersByStatusStatistics, { body });
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(getUsersByStatusStatisticsDone({ data: resultData }));
}

export function* watchGetUsersByStatusStatistics() {
  yield takeLatest(
    GET_USERS_BY_STATUS_STATISTICS,
    performGetUsersByStatusStatistics
  );
}

function* performGetActiveRoomsStatistics({ body }) {
  let resultData;
  try {
    const result = yield call(getActiveRoomsStatisticsReq, { body });
    resultData = result.networkSuccess ? result?.data?.result : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getActiveRoomsStatisticsDone({ data: resultData }));
}

export function* watchGetActiveRoomsStatistics() {
  yield takeLatest(
    GET_ACTIVE_ROOMS_STATISTICS,
    performGetActiveRoomsStatistics
  );
}
