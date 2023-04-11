import { put, takeLatest, call } from "redux-saga/effects";
import * as tabsAPI from "redux/network/tabs.js";
import actions from "redux/actions";

const {
  GET_ALL_TABS,
  getAllTabsDone,
  ADD_TABS,
  addTabsDone,
  EDIT_TABS,
  editTabsDone,
  DELETE_TABS,
  deleteTabsDone,
  GET_MY_TABS,
  getMyTabsDone,
} = actions;

function* performFetchAllTabs() {
  let resultData;
  try {
    const result = yield call(tabsAPI.getAllTabsReq, null);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getAllTabsDone({ data: resultData }));
}

export function* watchFetchAllTabs() {
  yield takeLatest(GET_ALL_TABS, performFetchAllTabs);
}

function* performAddTabs({ body }) {
  let resultData;
  try {
    const result = yield call(tabsAPI.addTabsReq, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(addTabsDone({ data: resultData }));
}

export function* watchAddTabs() {
  yield takeLatest(ADD_TABS, performAddTabs);
}

function* performEditTabs({ id, body }) {
  let resultData;
  try {
    const result = yield call(tabsAPI.editTabsReq, id, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(editTabsDone({ data: resultData }));
}

export function* watchEditTabs() {
  yield takeLatest(EDIT_TABS, performEditTabs);
}

function* performDeleteTabs({ id }) {
  let resultData;
  try {
    const result = yield call(tabsAPI.deleteTabsReq, id);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(deleteTabsDone({ data: resultData }));
}

export function* watchDeleteTabs() {
  yield takeLatest(DELETE_TABS, performDeleteTabs);
}

function* performFetchMyTabs() {
  let resultData;
  try {
    const result = yield call(tabsAPI.getMyTabsReq, null);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getMyTabsDone({ data: resultData }));
}

export function* watchFetchMyTabs() {
  yield takeLatest(GET_MY_TABS, performFetchMyTabs);
}
