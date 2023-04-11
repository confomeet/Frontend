import { postData, fetchData, putData, deleteData } from "./api";
export const getUsersGroupsReq = async (
  customHeaders,
  params,
  disableLoader = false
) =>
  await fetchData({
    endpoint: "/v1/Group",
    customHeaders,
    params,
    disableLoader,
    disableSwal: true,
  });

export const getUsersGroupByIdReq = async (params) =>
  await fetchData({
    endpoint: "/v1/Group/GetUserById",
    customHeaders: { pageIndex: 1, pageSize: 100 },
    params,
    disableLoader: false,
    disableSwal: true,
  });

export const addUsersGroupsReq = async (body) =>
  await postData({
    endpoint: "/v1/Group/Create",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const editUsersGroupsReq = async (groupId, body) =>
  await putData({
    endpoint: "/v1/Group/Update",
    params: { groupId },
    body: body,
  });

export const deleteUsersGroupsReq = async (params) =>
  await deleteData({
    endpoint: "/v1/Group",
    params,
    disableSwal: false,
    customHeaders: { "Content-Type": "application/json" },
  });

export const addToGroupReq = async (body) =>
  await postData({
    endpoint: "/v1/Group/UsersToGroup",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const deleteFromGroupReq = async (body) =>
  await deleteData({
    endpoint: "/v1/Group/UsersOfGroup",
    body,
    disableLoader: false,
    disableSwal: false,
  });
