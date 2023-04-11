import { put, takeLatest, call } from "redux-saga/effects";
import * as notificationsAPI from "redux/network/notifications.js";
import actions from "redux/actions";
import { getAllNotification } from "../../network/notifications";
const {
  GET_NOTIFICATIONS,
  getNotificationsDone,
  FETCH_NOTIFICATIONS_PARAMS,
  completeFetchParams,
  ADD_NOTIFICATION,
  completeAddNotification,
  EDIT_NOTIFICATION,
  completeEditNotification,
  DELETE_NOTIFICATIONS,
  completeDeleteNotifications,
  FETCH_CHANNELS,
  completeFetchChannels,
  FETCH_MY_NOTIFICATIONS,
  completeFetchMyNotifications,
  READ_NOTIFICATION,
  completeReadNotification,
  FETCH_NOTIFICATIONS_COUNT,
  completeFetchNotificationsCount,
  SEND_NOTIFY_TO_CONTACT,
  sendNotifyToContactDone,
} = actions;

function* performGetNotifications({ body, isAdmin }) {
  let resultData;
  try {
    const result = yield call(getAllNotification, {
      body,
      isAdmin,
    });
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getNotificationsDone({ data: resultData }));
}

export function* watchGetNotifications() {
  yield takeLatest(GET_NOTIFICATIONS, performGetNotifications);
}

function* performFetchNotificationsParams({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.getNotificationsParams, {
      data,
    });
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(completeFetchParams({ data: resultData }));
}

export function* watchFetchNotificationsParams() {
  yield takeLatest(FETCH_NOTIFICATIONS_PARAMS, performFetchNotificationsParams);
}

function* performAddNotifications({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.addNotificationTempWithDetails, {
      data,
    });
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeAddNotification({ data: resultData }));
}

export function* watchAddNotifications() {
  yield takeLatest(ADD_NOTIFICATION, performAddNotifications);
}

function* performEditNotifications({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.editNotifications, {
      data,
    });
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeEditNotification({ data: resultData }));
}

export function* watchEditNotifications() {
  yield takeLatest(EDIT_NOTIFICATION, performEditNotifications);
}

function* performDeleteNotifications({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.deleteNotifications, {
      data,
    });
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeDeleteNotifications({ data: resultData }));
}

export function* watchDeleteNotifications() {
  yield takeLatest(DELETE_NOTIFICATIONS, performDeleteNotifications);
}

function* performFetchChannels() {
  let resultData;
  try {
    const result = yield call(notificationsAPI.getChannels);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(completeFetchChannels({ data: resultData }));
}

export function* watchFetchChannels() {
  yield takeLatest(FETCH_CHANNELS, performFetchChannels);
}

function* performFetchMyNotifications({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.getMyNotifications, { data });
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(completeFetchMyNotifications({ data: resultData }));
}

export function* watchFetchMyNotifications() {
  yield takeLatest(FETCH_MY_NOTIFICATIONS, performFetchMyNotifications);
}

function* performReadNotification({ data }) {
  let resultData;
  try {
    const result = yield call(notificationsAPI.readNotification, { data });
    resultData = result.networkSuccess ? result.data : false;
  } catch (e) {
    resultData = false;
  }
  yield put(completeReadNotification({ data: resultData }));
}

export function* watchReadNotification() {
  yield takeLatest(READ_NOTIFICATION, performReadNotification);
}

function* performFetchNotificationsCount() {
  let resultData;
  try {
    const result = yield call(notificationsAPI.getMyNotificationsCount);
    resultData = result.networkSuccess ? result.data : 0;
  } catch (e) {
    resultData = 0;
  }
  yield put(completeFetchNotificationsCount({ data: resultData }));
}

export function* watchFetchNotificationsCount() {
  yield takeLatest(FETCH_NOTIFICATIONS_COUNT, performFetchNotificationsCount);
}

function* performSendNotifyToContact({ body, id }) {
  let resultData;
  try {
    const result = yield call(
      notificationsAPI.sendNotifyToContactReq,
      JSON.stringify(body),
      id
    );
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(sendNotifyToContactDone({ data: resultData }));
}

export function* watchSendNotifyToContact() {
  yield takeLatest(SEND_NOTIFY_TO_CONTACT, performSendNotifyToContact);
}
