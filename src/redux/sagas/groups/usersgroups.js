import { put, takeLatest, call } from "redux-saga/effects";
import * as usersGroupsAPI from "redux/network/usersgroups";

function* performGetUsersGroups({ customHeaders, params }) {
  let resultData;
  try {
    const result = yield call(
      usersGroupsAPI?.getUsersGroupsReq,
      customHeaders,
      params
    );
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(
    window.getSagaActions("GET_USERS_GROUPS_DONE")({ data: resultData })
  );
}

export function* watchGetUsersGroups() {
  yield takeLatest(
    window.getSagaActions("GET_USERS_GROUPS", "watcher"),
    performGetUsersGroups
  );
}

function* performGetUsersGroupById({ params }) {
  let resultData;
  try {
    const result = yield call(usersGroupsAPI?.getUsersGroupByIdReq, params);
    resultData = Array.isFullArray(result.networkSuccess) ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(
    window.getSagaActions("GET_USERS_GROUP_BY_ID_DONE")({ data: resultData })
  );
}

export function* watchGetUsersGroupById() {
  yield takeLatest(
    window.getSagaActions("GET_USERS_GROUP_BY_ID", "watcher"),
    performGetUsersGroupById
  );
}

function* performAddUsersGroups({ payload }) {
  let resultData;
  try {
    const result = yield call(usersGroupsAPI?.addUsersGroupsReq, payload?.body);
    if (result.networkSuccess) {
      if (Array.isFullArray(payload?.userIds))
        yield call(usersGroupsAPI?.addToGroupReq, {
          groupId: result?.data?.result?.id,
          userIds: payload?.userIds,
        });
      yield put(
        window.getSagaActions("GET_USERS_GROUPS")({
          customHeaders: {
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
    }
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("ADD_USERS_GROUPS_DONE")({ data: resultData })
  );
}
export function* watchAddUsersGroups() {
  yield takeLatest(
    window.getSagaActions("ADD_USERS_GROUPS", "watcher"),
    performAddUsersGroups
  );
}

function* performEditUsersGroups({ id, payload }) {
  let resultData;
  try {
    const result = yield call(
      usersGroupsAPI?.editUsersGroupsReq,
      id,
      payload?.body
    );
    if (result.networkSuccess) {
      if (Array.isFullArray(payload?.userIds))
        yield call(usersGroupsAPI?.addToGroupReq, {
          groupId: id,
          userIds: payload?.userIds,
        });

      yield put(
        window.getSagaActions("GET_USERS_GROUPS")({
          customHeaders: {
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
    }
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("EDIT_USERS_GROUPS_DONE")({ data: resultData })
  );
}

export function* watchEditUsersGroups() {
  yield takeLatest(
    window.getSagaActions("EDIT_USERS_GROUPS", "watcher"),
    performEditUsersGroups
  );
}

function* performDeleteUsersGroups({ params }) {
  let resultData;
  try {
    const result = yield call(usersGroupsAPI?.deleteUsersGroupsReq, params);
    if (result.networkSuccess)
      yield put(
        window.getSagaActions("GET_USERS_GROUPS")({
          customHeaders: {
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("DELETE_USERS_GROUPS_DONE")({ data: resultData })
  );
}

export function* watchDeleteUsersGroups() {
  yield takeLatest(
    window.getSagaActions("DELETE_USERS_GROUPS", "watcher"),
    performDeleteUsersGroups
  );
}

function* performAddToGroup({ body }) {
  let resultData;

  try {
    const result = yield call(usersGroupsAPI?.addToGroupReq, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(window.getSagaActions("ADD_TO_GROUP_DONE")({ data: resultData }));
}
export function* watchAddToGroup() {
  yield takeLatest(
    window.getSagaActions("ADD_TO_GROUP", "watcher"),
    performAddToGroup
  );
}

function* performDeleteFromGroup({ id }) {
  let resultData;
  try {
    const result = yield call(usersGroupsAPI?.deleteFromGroupReq, id);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("DELETE_FROM_GROUP_DONE")({ data: resultData })
  );
}

export function* watchDeleteFromGroup() {
  yield takeLatest(
    window.getSagaActions("DELETE_FROM_GROUP", "watcher"),
    performDeleteFromGroup
  );
}
