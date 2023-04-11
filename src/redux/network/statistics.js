import { postData, fetchData } from "./api";

export const getEventsByAppStatistics = async ({ body }) =>
  await postData({
    endpoint: "/v1/Statistics/EvensByApp",
    body,
    disableSwal: true,
  });

export const getEventsByStatusStatistics = async ({ body, params }) =>
  await postData({
    endpoint: "/v1/Statistics/EventsByStatus",
    body,
    customHeaders: { eventType: params },
    disableSwal: true,
  });

export const getUsersByStatusStatistics = async ({ body }) =>
  await postData({
    endpoint: "/v1/Statistics/UsersByStatus",
    body,
    disableSwal: true,
  });

export const getActiveRoomsStatisticsReq = async () =>
  await fetchData({
    endpoint: "/v1/ConfEvent/roomList",
    disableLoader: true,
    disableSwal: true,
  });
