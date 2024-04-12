import { fetchData, postData, putData, deleteData } from "./api";

export const getAllNotification = async ({ body, isAdmin }) => {
  return isAdmin && isAdmin !== null
    ? await postData({
        endpoint: "/v1/Notification",
        body,
        disableSwal: true,
      })
    : await postData({
        endpoint: `/v1/Notification/Mine`,
        body,
        disableSwal: true,
      });
};

export const getNotificationSettingDetailsById = async ({ data }) =>
  await fetchData({
    endpoint: `/v1/NotificationSetting/${data.id}`,
    disableSwal: true,
  });

export const addNotificationTempWithDetails = async ({ data }) =>
  await postData({
    endpoint: "/v1/NotificationSetting/AddNotificationTemplate",
    body: data,
  });

export const editNotifications = async ({ data }) =>
  await putData({
    endpoint: `/v1/NotificationSetting/${data.notificationTemplateId}`,
    body: data,
  });

export const deleteNotifications = async ({ data }) =>
  await deleteData({
    endpoint: `/v1/NotificationSetting/DeleteTemplates`,
    body: data,
    customHeaders: { "Content-Type": "application/json" },
  });

export const getNotificationsParams = async () =>
  await fetchData({
    endpoint: "/v1/NotificationSetting/parameterList",
    disableSwal: true,
  });

export const getChannels = async () =>
  await fetchData({
    endpoint: "/v1/Channel",
    disableSwal: true,
  });

export const getMyNotificationsCount = async () =>
  await fetchData({
    endpoint: "/SendNotification/NewInternalNotificationsCount",
    disableSwal: true,
  });

export const readNotification = async ({ data }) =>
  await postData({
    endpoint: "/v1/NotificationSetting/AddNotificationTemplate",
    params: { notifyId: data.notificationId },
    disableSwal: true,
  });
