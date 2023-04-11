import { fetchData, postData, putData, deleteData } from "./api";

export const getAllTabsReq = async () =>
  await fetchData({ endpoint: "/v1/Tab", disableSwal: true });

export const addTabsReq = async (body) =>
  await postData({
    endpoint: "/v1/Tab/AddTab",
    body: body,
  });

export const editTabsReq = async (id, body) =>
  await putData({
    endpoint: "/v1/Tab/updateTabById",
    params: { id },
    body: body,
  });

export const deleteTabsReq = async (id) =>
  await deleteData({
    endpoint: `/v1/Tab/${id}`,
    disableSwal: false,
    customHeaders: { "Content-Type": "application/json" },
  });

export const getMyTabsReq = async () =>
  await fetchData({
    endpoint: "/v1/Tab/GetMyTabs",
    disableSwal: true,
    disableLoader: true,
  });
