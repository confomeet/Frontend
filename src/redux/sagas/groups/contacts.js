import { put, takeLatest, call } from "redux-saga/effects";
import {
  getAllContacts,
  addNewContact,
  editExistingContact,
  deleteExistingContact,
  initiateContactMeetReq,
  feedbackContactReq,
  getMyContactsReq,
  getContactByIdReq,
  getContactTabsReq,
  addContactPhoto,
  getContactImgReq,
} from "../../network/contacts";
import actions from "../../actions";

const {
  GET_CONTACTS,
  getContacts,
  getContactsDone,
  GET_MY_CONTACTS,
  getMyContacts,
  getMyContactsDone,
  ADD_CONTACT,
  addContactDone,
  EDIT_CONTACT,
  editContactDone,
  DELETE_CONTACT,
  deleteContactDone,
  INITIATE_CONTACT_MEET,
  initiateContactMeetDone,
  FEEDBACK_CONTACT,
  feedbackContactDone,
  GET_CONTACT_BY_ID,
  getContactByIdDone,
  GET_COMPANY_BY_ID,
  getCompanyByIdDone,
  GET_SECTION_BY_ID,
  getSectionByIdDone,
  GET_MANAGER_BY_ID,
  getManagerByIdDone,
  GET_CONTACTS_TABS,
  getContactsTabsDone,
  GET_CONTACT_IMG,
  getContactImgDone,
} = actions;

function* performGetAllContacts() {
  let resultData;
  try {
    const result = yield call(getAllContacts);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getContactsDone({ data: resultData }));
}

export function* watchGetContacts() {
  yield takeLatest(GET_CONTACTS, performGetAllContacts);
}

function* performGetMyContacts({ body }) {
  let resultData;
  try {
    const result = yield call(getMyContactsReq, body);
    resultData = result.networkSuccess ? result.data : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getMyContactsDone({ data: resultData }));
}

export function* watchGetMyContacts() {
  yield takeLatest(GET_MY_CONTACTS, performGetMyContacts);
}

function* performGetContactById({ params }) {
  let resultData;
  try {
    const result = yield call(getContactByIdReq, params);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = [];
  }
  yield put(getContactByIdDone({ data: resultData }));
}

export function* watchGetContactById() {
  yield takeLatest(GET_CONTACT_BY_ID, performGetContactById);
}

function* performGetCompanyById({ params }) {
  let resultData;
  try {
    const result = yield call(getContactByIdReq, params);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = [];
  }
  yield put(getCompanyByIdDone({ data: resultData }));
}

export function* watchGetCompanyById() {
  yield takeLatest(GET_COMPANY_BY_ID, performGetCompanyById);
}

function* performGetSectionById({ params }) {
  let resultData;
  try {
    const result = yield call(getContactByIdReq, params);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = [];
  }
  yield put(getSectionByIdDone({ data: resultData }));
}
export function* watchGetSectionById() {
  yield takeLatest(GET_SECTION_BY_ID, performGetSectionById);
}

function* performGetManagerById({ params }) {
  let resultData;
  try {
    const result = yield call(getContactByIdReq, params);
    resultData = result.networkSuccess ? result.data?.result : {};
  } catch (e) {
    resultData = [];
  }
  yield put(getManagerByIdDone({ data: resultData }));
}
export function* watchGetManagerById() {
  yield takeLatest(GET_MANAGER_BY_ID, performGetManagerById);
}

function* performAddNewContact({ body, imageData }) {
  let resultData;
  try {
    const result = yield call(addNewContact, body);
    resultData = result.networkSuccess ? result.data : {};
    if (result.networkSuccess && imageData) {
      yield call(addContactPhoto({ contactId: result.data?.id }, imageData));
    }
  } catch (e) {
    resultData = {};
  }
  yield put(addContactDone({ data: resultData }));
  if (resultData)
    yield put(
      getMyContacts({
        body: {
          email: null,
          name: null,
          pageIndex: 1,
          pageSize: 9,
          text: null,
          tabId: 0,
        },
      })
    );
}

export function* watchAddNewContact() {
  yield takeLatest(ADD_CONTACT, performAddNewContact);
}

function* performEditExistingContact({ body, id }) {
  let resultData;
  try {
    const result = yield call(editExistingContact, body, id);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(editContactDone({ data: resultData }));
  if (resultData)
    yield put(
      getMyContacts({
        body: {
          email: null,
          name: null,
          pageIndex: 1,
          pageSize: 9,
          text: null,
          tabId: 0,
        },
      })
    );
}

export function* watchEditContact() {
  yield takeLatest(EDIT_CONTACT, performEditExistingContact);
}

function* performDeleteExistingContact({ body, id }) {
  let resultData;
  try {
    const result = yield call(deleteExistingContact, body, id);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(deleteContactDone({ data: resultData }));
}

export function* watchDeleteContact() {
  yield takeLatest(DELETE_CONTACT, performDeleteExistingContact);
}

function* performInitiateContactMeet({ id, params }) {
  let resultData;
  try {
    const result = yield call(initiateContactMeetReq, id, params);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(initiateContactMeetDone({ data: resultData }));
}

export function* watchInitiateContactMeet() {
  yield takeLatest(INITIATE_CONTACT_MEET, performInitiateContactMeet);
}

function* performFeedbackContact({ params }) {
  let resultData;
  try {
    const result = yield call(feedbackContactReq, params);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(feedbackContactDone({ data: resultData }));
}

export function* watchFeedbackContact() {
  yield takeLatest(FEEDBACK_CONTACT, performFeedbackContact);
}

function* performGetContactsTabs() {
  let resultData;
  try {
    const result = yield call(getContactTabsReq);
    resultData = result.networkSuccess ? result.data?.result : [];
  } catch (e) {
    resultData = [];
  }
  yield put(getContactsTabsDone({ data: resultData }));
}

export function* watchGetContactsTabs() {
  yield takeLatest(GET_CONTACTS_TABS, performGetContactsTabs);
}

function* performGetContactImg({ params }) {
  let resultData;
  try {
    const result = yield call(getContactImgReq, params);
    resultData = result.networkSuccess ? result.data : {};
  } catch (e) {
    resultData = {};
  }
  yield put(getContactImgDone({ data: resultData }));
}

export function* watchGetContactImg() {
  yield takeLatest(GET_CONTACT_IMG, performGetContactImg);
}
