import {
  postData,
  fetchData,
  putData,
  deleteData,
  postFormData,
  fetchBinaryData,
} from "./api";

export const getAllContacts = async () =>
  await fetchData({
    endpoint: "/v1/Contact",
    disableLoader: false,
    disableSwal: true,
  });

export const getMyContactsReq = async (body) =>
  await postData({
    endpoint: "/v1/Contact/MyContacts",
    body,
    disableLoader: false,
    disableSwal: true,
  });

export const addNewContact = async (body) =>
  await postData({
    endpoint: "/v1/Contact",
    body,
    disableLoader: false,
    disableSwal: true,
  });

export const editExistingContact = async (body, id) =>
  await putData({
    endpoint: `/v1/Contact/${id}`,
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const deleteExistingContact = async (body = {}, id) =>
  await deleteData({
    endpoint: `/v1/Contact/${id}`,
    body,
    disableLoader: false,
    disableSwal: true,
  });

export const initiateContactMeetReq = async (id, params) =>
  await postData({
    endpoint: "/v1/Contact/InitiatePMeeting",
    params,
    customHeaders: { id },
    disableLoader: false,
    disableSwal: true,
  });

export const feedbackContactReq = async (params) =>
  await postData({
    endpoint: "/v1/Contact/RespondCall",
    params,
    disableSwal: true,
  });

export const filterCompaniesReq = async (params) =>
  await postData({
    endpoint: "/v1/Contact/Companies",
    params,
    disableLoader: true,
    disableSwal: true,
  });

export const filterSectionsReq = async (params) =>
  await postData({
    endpoint: "/v1/Contact/Sections",
    params,
    disableLoader: true,
    disableSwal: true,
  });

export const filterManagersReq = async (params) =>
  await postData({
    endpoint: "/v1/Contact/Managers",
    params,
    disableLoader: true,
    disableSwal: true,
  });

export const getContactByIdReq = async (params) =>
  await fetchData({
    endpoint: "/v1/Contact/ContactById",
    params,
    disableLoader: true,
    disableSwal: true,
  });

export const getContactTabsReq = async () =>
  await fetchData({
    endpoint: "/v1/Contact/Tabs",
    disableLoader: true,
    disableSwal: true,
  });

export const addContactPhoto = async (params, body) =>
  await postFormData({
    endpoint: "/v1/Contact/ContactPhoto",
    params,
    body,
    disableLoader: false,
    disableSwal: true,
  });

export const getContactImgReq = async (params) =>
  await fetchBinaryData({
    endpoint: "/v1/FilesUploader/ViewFile",
    params,
    disableLoader: false,
    disableSwal: true,
    method: "POST",
  });
