import { put, takeLatest, call } from "redux-saga/effects";
import {
  getAllRoles,
  addNewUser,
  editExistingUser,
  deleteExistingUser,
  logIn,
  signUp,
  confirmEmail,
  reConfirmEmail,
  resetPassword,
  forgotPassword,
  getAllUsers,
  handleAccount,
  pushNotificationReq,
  getUserByIdReq,
  searchUsersReq,
  editPasswordReq,
  verifyOtpReq,
  getProfileInfoReq,
  getProfileImgReq,
  getSmtpConfigReq,
  handleSmtpConfigReq,
  getAuthProviders,
} from "../../network/users";

import actions from "../../actions";

const {
  CONFIRM_ACCOUNT,
  completeConfirmAccount,
  LOCK_ACCOUNT,
  completeLockAccount,
  UNLOCK_ACCOUNT,
  completeUnlockAccount,
  FETCH_ALL_ROLES,
  completeFetchAllRoles,
  ADD_USER,
  completeAddUser,
  EDIT_USER,
  completeEditUser,
  DELETE_USER,
  completeDeleteUser,
  LOG_IN,
  setAuthUser,
  SIGN_UP,
  signUpDone,
  CONFIRM_USER,
  confirmUserDone,
  RECONFIRM_USER,
  reconfirmUserDone,
  RESET_PASSWORD,
  resetPasswordDone,
  FORGOT_PASSWORD,
  forgotPasswordDone,
  GET_USERS,
  getUsersDone,
  PUSH_NOTIFICATION,
  pushNotificationDone,
  GET_USER_BY_ID,
  getUserByIdDone,
  SEARCH_USERS,
  searchUsers,
  searchUsersDone,
  EDIT_PASSWORD,
  editPasswordDone,
  VERIFY_OTP,
  GET_PROFILE_INFO,
  getProfileInfoDone,
  GET_PROFILE_IMG,
  getProfileImg,
  getProfileImgDone,
  clearAuthUser,
  LOG_IN_WITH_PROVIDER,
  GET_AUTH_PROVIDERS,
  getAuthProvidersDone,
  LOG_OUT,
} = actions;

function* performConfirmAccount({ id, key }) {
  let resultData;
  try {
    const result = yield call(handleAccount, id, key);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeConfirmAccount({ data: resultData }));
}

export function* watchConfirmAccount() {
  yield takeLatest(CONFIRM_ACCOUNT, performConfirmAccount);
}

function* performLockAccount({ id, key }) {
  let resultData;
  try {
    const result = yield call(handleAccount, id, key);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeLockAccount({ data: resultData }));
}

export function* watchLockAccount() {
  yield takeLatest(LOCK_ACCOUNT, performLockAccount);
}

function* performUnlockAccount({ id, key }) {
  let resultData;
  try {
    const result = yield call(handleAccount, id, key);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(completeUnlockAccount({ data: resultData }));
}

export function* watchUnlockAccount() {
  yield takeLatest(UNLOCK_ACCOUNT, performUnlockAccount);
}

/******* */
function* performGetAllRoles() {
  let resultData;
  try {
    const result = yield call(getAllRoles);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(completeFetchAllRoles({ data: resultData }));
}

export function* watchFetchAllRolesr() {
  yield takeLatest(FETCH_ALL_ROLES, performGetAllRoles);
}
function* performAddUser({ body, userGroupData }) {
  let resultData = {};
  try {
    const result = yield call(addNewUser, body);
    resultData = result.networkSuccess ? result.data : {};
    if (result.networkSuccess) {
      if (Array.isFullArray(userGroupData)) {
        userGroupData.map((row) => {
          window.dispatchWantedAction("ADD_TO_GROUP", {
            body: {
              groupId: row?.id,
              userIds: [result.data?.id],
            },
          });
        });
      }
      yield put(
        searchUsers({
          body: {
            userType: [],
            text: null,
            name: null,
            email: null,
            isLocked: false,
            isConfirmed: true,
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
    }
  } catch (e) {
    resultData = {};
  }
  yield put(completeAddUser({ data: resultData }));
}

export function* watchAddUser() {
  yield takeLatest(ADD_USER, performAddUser);
}

function* performEditUser({ body, id }) {
  let resultData;
  try {
    const result = yield call(editExistingUser, body, id);
    resultData = result.networkSuccess ? result.data : {};
    if (result.networkSuccess)
      yield put(
        searchUsers({
          body: {
            userType: [],
            text: null,
            name: null,
            email: null,
            isLocked: false,
            isConfirmed: true,
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
  } catch (e) {
    resultData = {};
  }
  yield put(completeEditUser({ data: resultData }));
}

export function* watchEditUser() {
  yield takeLatest(EDIT_USER, performEditUser);
}

function* performDeleteUser({ body, id }) {
  let resultData;
  try {
    const result = yield call(deleteExistingUser, body, id);
    resultData = result.networkSuccess ? result.data : {};
    if (result.networkSuccess)
      yield put(
        searchUsers({
          body: {
            userType: [],
            text: null,
            name: null,
            email: null,
            pageSize: 10,
            pageIndex: 1,
          },
        })
      );
  } catch (e) {
    resultData = {};
  }
  yield put(completeDeleteUser({ data: resultData }));
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER, performDeleteUser);
}

function* performSignUp(action) {
  try {
    let data = action.data;
    const result = yield call(signUp, data);
    if (!result.networkSuccess) {
      yield put(signUpDone({ data: false }));
    }
    if (result.data) {
      yield put(signUpDone({ data: result.data }));
    } else yield put(signUpDone({ data: false }));
  } catch {
    yield put(signUpDone({ data: false }));
    return;
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, performSignUp);
}

function* performConfirmUser(action) {
  try {
    let data = action.data;
    const result = yield call(confirmEmail, data, action.lang);
    if (!result.networkSuccess) {
      yield put(confirmUserDone({ data: false }));
    } else if (result.data) {
      yield put(confirmUserDone({ data: result.data }));
      window.navigateTo("/login");
    } else yield put(confirmUserDone({ data: false }));
  } catch {
    yield put(confirmUserDone({ data: false }));
    return;
  }
}

export function* watchConfirmUser() {
  yield takeLatest(CONFIRM_USER, performConfirmUser);
}

function* performResetPassword(action) {
  try {
    const result = yield call(resetPassword, action.data);
    if (!result.networkSuccess) {
      yield put(resetPasswordDone({ data: false }));
    } else {
      yield put(resetPasswordDone({ data: result.data }));
    }
  } catch {
    yield put(resetPasswordDone({ data: false }));
    return;
  }
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, performResetPassword);
}

function* performForgotPassword(action) {
  try {
    const body = action.data;
    const result = yield call(forgotPassword, body, action.lang);
    if (!result.networkSuccess) {
      yield put(forgotPasswordDone({ data: false }));
    } else {
      yield put(forgotPasswordDone({ data: result.data }));
    }
  } catch {
    yield put(forgotPasswordDone({ data: false }));
    return;
  }
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, performForgotPassword);
}

function* performReConfirmUser(action) {
  try {
    let data = action.data;
    const result = yield call(reConfirmEmail, data, action.lang);
    if (!result.networkSuccess) {
      yield put(reconfirmUserDone({ data: false }));
    } else if (result.data.id) {
      yield put(reconfirmUserDone({ data: result.data }));
    } else yield put(reconfirmUserDone({ data: false }));
  } catch {
    yield put(reconfirmUserDone({ data: false }));
    return;
  }
}

export function* watchReConfirmUser() {
  yield takeLatest(RECONFIRM_USER, performReConfirmUser);
}

function* performGetAllUsers(action) {
  try {
    let data = action.data;
    const result = yield call(getAllUsers, data, action.lang);
    if (!result.networkSuccess) {
      yield put(getUsersDone({ data: false }));
    } else if (result.data) {
      yield put(getUsersDone({ data: result.data }));
    } else yield put(getUsersDone({ data: false }));
  } catch {
    yield put(getUsersDone({ data: false }));
    return;
  }
}

export function* watchGetAllUsers() {
  yield takeLatest(GET_USERS, performGetAllUsers);
}

function* performPushNotification({ body }) {
  let resultData;
  try {
    const result = yield call(pushNotificationReq, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(pushNotificationDone({ data: resultData }));
}

export function* watchPushNotification() {
  yield takeLatest(PUSH_NOTIFICATION, performPushNotification);
}

function* performGetUserById({ id }) {
  let resultData;
  try {
    const result = yield call(getUserByIdReq, id);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(getUserByIdDone({ data: resultData }));
}

export function* watchGetUserById() {
  yield takeLatest(GET_USER_BY_ID, performGetUserById);
}

function* performSearchUsers({ body }) {
  let resultData;
  try {
    const result = yield call(searchUsersReq, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(searchUsersDone({ data: resultData }));
}

export function* watchSearchUsers() {
  yield takeLatest(SEARCH_USERS, performSearchUsers);
}

function* performEditPassword({ body }) {
  let resultData;
  try {
    const result = yield call(editPasswordReq, body);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(editPasswordDone({ data: resultData }));
}

export function* watchEditPassword() {
  yield takeLatest(EDIT_PASSWORD, performEditPassword);
}

function* performLogIn({ body }) {
  try {
    yield put(clearAuthUser());
    const result = yield call(logIn, body);
    const api_result = result.data ?? {};
    if (!result.networkSuccess || !api_result) {
      sessionStorage.removeItem("OTP_INFO");
      console.error("Network error during perform log in");
    } else if (api_result.code == 200) {
      yield put(setAuthUser({ authUser: api_result.result }));
      return;
    }
    else if (api_result.code == 1001) {
      sessionStorage.setItem(
        "OTP_INFO",
        JSON.stringify({
          userId: api_result.result.userId,
          password: body.password,
          email: body.email,
        })
      );
      // Cannot use clearAuthUser() here because it will clean sessionStorage["OTP_INFO"]
      yield put(setAuthUser({ authUser: null }));
      return;
    } else {
      sessionStorage.removeItem("OTP_INFO");
    }
  } catch (e) {
    console.error("Failed to process logIn response: " + e.message);
  }
  yield put(clearAuthUser());
}

export function* watchLogIn() {
  yield takeLatest(LOG_IN, performLogIn);
}

function* performVerifyOTP({ body }) {
  try {
    const result = yield call(verifyOtpReq, body);
    const api_result = result.data ?? {};
    if (result.networkSuccess) {
      sessionStorage.removeItem("OTP_INFO");
      yield put(setAuthUser({ authUser: api_result.result }));
    }
  } catch (e) {
    console.error("Failed to process verify OTP response: " + e.message);
  }
}

export function* watchVerifyOTP() {
  yield takeLatest(VERIFY_OTP, performVerifyOTP);
}

function* performGetProfileInfo() {
  let resultData;
  try {
    const result = yield call(getProfileInfoReq);
    resultData = result.networkSuccess ? result.data?.result : {};
    if (result.networkSuccess && Array.isFullArray(result.data?.result?.file))
      yield put(
        getProfileImg({ params: { fileId: result.data?.result?.file[0]?.id } })
      );
  } catch (e) {
    resultData = {};
  }
  yield put(getProfileInfoDone({ data: resultData }));
}

export function* watchGetProfileInfo() {
  yield takeLatest(GET_PROFILE_INFO, performGetProfileInfo);
}

function* performGetSmtpConfig() {
  let resultData;
  try {
    const result = yield call(getSmtpConfigReq);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("GET_SMTP_CONFIG_DONE")({ data: resultData })
  );
}

export function* watchGetSmtpConfig() {
  yield takeLatest(
    window.getSagaActions("GET_SMTP_CONFIG", "watcher"),
    performGetSmtpConfig
  );
}

function* performHandleSmtpConfig({ body }) {
  let resultData;
  try {
    const result = yield call(handleSmtpConfigReq, body);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = {};
  }
  yield put(
    window.getSagaActions("HANDLE_SMTP_CONFIG_DONE")({ data: resultData })
  );
}

export function* watchHandleSmtpConfig() {
  yield takeLatest(
    window.getSagaActions("HANDLE_SMTP_CONFIG", "watcher"),
    performHandleSmtpConfig
  );
}

function* performGetProfileImg({ params }) {
  let resultData;
  try {
    const result = yield call(getProfileImgReq, params);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(getProfileImgDone({ data: resultData }));
}

export function* watchGetProfileImg() {
  yield takeLatest(GET_PROFILE_IMG, performGetProfileImg);
}

function* performLogInWithProvider({ provider, redirectUri }) {
  if (redirectUri) {
    redirectUri = "?RedirectUri=" + encodeURI(redirectUri);
  } else {
    redirectUri = "";
  }
  window.location.href = provider.url + redirectUri;
}

export function* watchLogInWithProvider() {
  yield takeLatest(LOG_IN_WITH_PROVIDER, performLogInWithProvider);
}

function* performGetAuthProviders() {
  let resultData = {};
  try {
    const result = yield call(getAuthProviders);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    console.log(e);
    resultData = {};
  }
  yield put(getAuthProvidersDone({ data: resultData.result ?? [] }));
}

export function* wathGetAuthProviders() {
  yield takeLatest(GET_AUTH_PROVIDERS, performGetAuthProviders)
}

function* performLogOut({ redirectUri }) {
  if (redirectUri) {
    redirectUri = "?RedirectUri=" + encodeURI(redirectUri);
  } else {
    redirectUri = "";
  }
  window.location.href = `${window.domain}/api/v1/web/Auth/LogOut` + redirectUri;
}

export function* watchLogOut() {
  yield takeLatest(LOG_OUT, performLogOut);
}
