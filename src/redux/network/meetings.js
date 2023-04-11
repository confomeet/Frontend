import { fetchData, postData, putData, deleteData, postFormData } from "./api";

export const searchInEvents = async ({ body, params, isAllEvents }) => {
  return isAllEvents
    ? await postData({
        endpoint: "/v1/Event/All",
        body,
        params,
        disableLoader: true,
        disableSwal: true,
      })
    : await postData({
        endpoint: `/v1/Event/Search`,
        body: body,
        params: { relatedUserEvents: body.relatedUserEvents },
        disableSwal: true,
        disableLoader: true,
      });
};

export const fetchEventDetails = async ({ id, timeZone }) =>
  await fetchData({
    endpoint: `/v1/Event/${id}/Details`,
    customHeaders: { timeZone },
    disableSwal: true,
  });

export const fetchRelatedUsers = async () =>
  await fetchData({
    endpoint: `/v1/User/RelatedUsers`,
    disableSwal: true,
  });

export const calendarMeets = async () =>
  await fetchData({
    endpoint: "/v1/Event",
    disableLoader: false,
    disableSwal: true,
  });

export const eventsTypes = async () =>
  await fetchData({
    endpoint: "/v1/Event/Types",
    disableLoader: false,
    disableSwal: true,
  });

export const fetchMeetingLinkByUserId = async ({
  params,
  pathParams: { id, uuid },
  body,
}) => {
  return await postData({
    endpoint: `/v1/Meeting/Verify/${id}/${uuid}`,
    body,
    params,
    disableLoader: false,
    disableSwal: true,
  });
};

export const remindParticipant = async ({ id, body }) =>
  await postData({
    endpoint: `/v1/Participant/${id}/Remind`,
    body,
    disableLoader: true,
    disableSwal: false,
  });

export const addNewMeeting = async ({ body, params }) =>
  await postData({
    endpoint: body.rDates
      ? "/v1/Event/AddRecurrence"
      : "/v1/Event/MeetingEvent",
    body: body,
    disableLoader: false,
    disableSwal: params,
  });

export const addParticipantsToMeeting = async ({ body, id }) =>
  await postData({
    endpoint: `/v1/Event/${id}/AddParticipants`,
    body: body,
  });

export const editExistingMeeting = async ({ body, id }) =>
  await putData({
    endpoint: body.options ? `/v1/Event/Recurrence/${id}` : `/v1/Event/${id}`,
    body: body,
  });

export const searchParticipants = async ({ params, body, meetingId }) =>
  await postData({
    endpoint: `/v1/Event/${meetingId}/AddParticipants`,
    body: body,
    params: params,
    disableLoader: false,
    disableSwal: true,
  });

export const getMeetingLink = async ({ params, meetingId, body }) => {
  return meetingId
    ? await postData({
        endpoint: `/v1/Meeting/Join/${meetingId}`,
        body,
        disableLoader: true,
        disableSwal: false,
      })
    : await postData({
        endpoint: `/v1/Meeting/Join`,
        params,
        disableLoader: false,
        disableSwal: true,
      });
};

export const deleteParticipantsReq = async (id) =>
  await deleteData({
    endpoint: `/v1/Participant/${id}`,
  });

export const getActiveRoomListReq = async () =>
  await fetchData({
    endpoint: `/v1/ConfEvent/roomList`,
    disableSwal: true,
  });

export const getActiveParticipantsReq = async (meetingId, id) =>
  await fetchData({
    endpoint: `/v1/ConfEvent/room/${meetingId}/${id}`,
    disableSwal: true,
  });

export const addEventsTypesReq = async (body) =>
  await postData({
    endpoint: "/v1/Event/AddType",
    body,
    disableLoader: true,
    disableSwal: false,
  });

export const editEventsTypesReq = async (body, params) =>
  await postData({
    endpoint: "/v1/Event/EditEventType",
    body,
    params,
    disableLoader: true,
    disableSwal: false,
  });

export const deleteEventsTypesReq = async (id) =>
  await deleteData({
    endpoint: `/v1/Event/DeleteEventType`,
    params: { id },
    disableLoader: true,
    disableSwal: false,
  });

export const liberateParticipant = async ({ id }) =>
  await putData({
    endpoint: `/v1/Participant/${id}/Liberate`,
  });

export const addNoteToParticipant = async ({ body, id }) =>
  await putData({
    endpoint: `/v1/Participant/${id}/SetNote`,
    body,
  });

export const sendSMS = async (body) =>
  await postData({
    endpoint: "/v1/Participant/Remote/SMSRemind",
    body,
  });

export const cancelEvent = async ({ id, body }) =>
  await putData({
    endpoint: `/v1/Event/${id}/Cancel`,
    body,
  });

export const sendPartySignature = async (body) =>
  await postFormData({
    endpoint: "/v1/Work/SaveSignPhoto",
    body,
    disableSwal: true,
  });
