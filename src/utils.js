import moment from "moment";
import "moment/locale/ar";
import actions from "redux/actions";
import { RRule } from "rrule";
import ar from "./translations/ar.json";
import en from "./translations/en.json";
import camelCase from "lodash/camelCase";
const {
  clearAuthUser,
  joinMeeting,
  openVideoFrame,
  setPhraseLoader,
  clearPhraseLoader,
} = actions;

const languages = ["ar", "en"];
export const dispatchWantedAction = (action, data) => {
  if (!action) return;
  if (!data) return window.dispatch(actions[camelCase(action)]());
  return window.dispatch(actions[camelCase(action)](data));
};
export const getSagaActions = (action, type = "worker") => {
  if (!action) return;
  return type === "worker" ? actions[camelCase(action)] : actions[action];
};

export const isObjectEmpty = (obj) => !obj || Object.keys(obj).length === 0;

export const isFullArray = (arr) => Array.isArray(arr) && arr.length > 0;

export const getArrChunk = (arr = [], len = 2) => {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
};
export const filterList = (list, key, value) => {
  if (!list || !Array.isArray(list)) return [];
  return list.filter((e) => e[key] === value);
};
export const findElementInList = (list, key, value) => {
  if (!list || !Array.isArray(list)) return null;
  return filterList(list, key, value)[0] || null;
};

export const getCurrentTimeZoneDate = (date) => {
  var ms_per_minute = 60 * 1000;
  date.setTime(date.getTime() - date.getTimezoneOffset() * ms_per_minute);
  return date;
};

export const getAdjastISOString = (date) =>
  date && date.toISOString().slice(0, -5);

const addZeroPadding = (num, size = 2) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

export const getManualISOString = (date) => {
  if (!date) return;
  const year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  return `${year}-${addZeroPadding(month)}-${addZeroPadding(
    day
  )}T${addZeroPadding(hours)}:${addZeroPadding(minutes)}:${addZeroPadding(
    seconds
  )}`;
};

export const getAppointmentBlocks = (appointment, maxDays = 1) => {
  const { startDate, endDate } = appointment;
  let result = [];
  let s = getCurrentTimeZoneDate(new Date(startDate));
  let adjustedEnd = getCurrentTimeZoneDate(new Date(endDate));
  while (s < adjustedEnd) {
    let e = getCurrentTimeZoneDate(
      new Date(
        s.getFullYear(),
        s.getMonth(),
        s.getDate() + maxDays - 1,
        23,
        59,
        59
      )
    );
    result.push({
      ...appointment,
      isChunck: result.length > 0,
      isStart: result.length === 0,
      isEnd: e > adjustedEnd,
      startDate: getAdjastISOString(s),
      endDate: getAdjastISOString(e <= adjustedEnd ? e : adjustedEnd),
    });
    s.setDate(s.getDate() + maxDays);
    s.setHours(0);
    s.setMinutes(0);
    s.setSeconds(0);
    s = getCurrentTimeZoneDate(s);
  }

  return result;
};

export const getCorrentFingerPrint = () => {
  let correntFingerPrint = localStorage.getItem("finger-print") || null;
  return correntFingerPrint;
};

export const getAppLang = () => {
  let appLang = localStorage.getItem("lang");
  if (!languages.includes(appLang)) appLang = window.defualtLang;

  return appLang;
};

export const getDeepValue = (obj, path) => {
  let val = obj;
  path?.split(".").map((prop) => {
    if (!val || val[prop] === undefined) return;
    val = val[prop];
  });
  return typeof val === "object" ? path : val;
};

export const getTransaltion = (key) => {
  let trimmedKey = key?.trim() || "";
  let TRANSLATION_OBJ = getAppLang() === "ar" ? { ...ar } : { ...en };
  return getDeepValue(TRANSLATION_OBJ, trimmedKey);
};

export const getMultiTransaltion = (...keys) => {
  if (!keys || !Array.isArray(keys)) return;

  let vlaues = [];
  for (const key of keys) vlaues.push(Object.translate(key.trim()));

  return vlaues.join(" ");
};

export const getListItemsForDropDownMenu = (
  arr,
  idProp,
  mainTextProp,
  secondaryTextProp,
  descProp
) => {
  if (!Array.isArray(arr)) return [];
  return arr.map((e, idx) => ({
    ...e,
    id: idProp ? e[idProp] : idx + 1,
    elIdx: idx,
    text:
      getDeepValue(e, mainTextProp) ||
      (secondaryTextProp ? getDeepValue(e, secondaryTextProp) : null),
    description: descProp ? getDeepValue(e, descProp) : null,
  }));
};

export const getModifiedCountries = (list, isRTL) =>
  getListItemsForDropDownMenu(
    list || [],
    "cntId",
    isRTL ? "cntCountryAr" : "cntCountryEn"
  );

export const getModifiedContacts = (list) =>
  getListItemsForDropDownMenu(list || [], "id", "displayName");

export const getModifiedUsers = (list) =>
  getListItemsForDropDownMenu(list || [], "id", "fullName", null, "email");

export const getModifiedUserGroups = (list) =>
  getListItemsForDropDownMenu(list || [], "id", "groupName");

export const getModifiedContact = (list) =>
  getListItemsForDropDownMenu(list || [], "id", "value");

export const getThisMonth = () => {
  const date = new Date();
  const year = date.getFullYear(),
    month = date.getMonth();
  var startDate = new Date(year, month, 1, 12, 0, 0);
  var endDate = new Date(year, month + 1, 0, 12, 0, 0);
  return { startDate, endDate };
};

export const getAMonth = (d) => {
  const date = new Date(d);
  const year = date.getFullYear(),
    month = date.getMonth();
  var startDate = new Date(year, month, 1, 12, 0, 0);
  var endDate = new Date(year, month + 1, 0, 12, 0, 0);

  return { startDate, endDate };
};

const getLastMonth = () => {
  const date = new Date();
  const year = date.getFullYear(),
    month = date.getMonth();
  var startDate = new Date(year, month - 1, 1, 12, 0, 0);
  var endDate = new Date(year, month, 0, 12, 0, 0);
  return { startDate, endDate };
};

const getNextMonth = () => {
  const date = new Date();
  const year = date.getFullYear(),
    month = date.getMonth();
  var startDate = new Date(year, month + 1, 1, 12, 0, 0);
  var endDate = new Date(year, month + 2, 0, 12, 0, 0);
  return { startDate, endDate };
};

const getStartDayOfWeek = (d = new Date()) => {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

const getStartDayOfNextWeek = (d = new Date()) => {
  const startDayOfThisWeek = getStartDayOfWeek();
  const currentDateValue = startDayOfThisWeek.getDate();
  return new Date(startDayOfThisWeek.setDate(currentDateValue + 7));
};

const getStartDayOfLastWeek = (d = new Date()) => {
  const startDayOfThisWeek = getStartDayOfWeek();
  const currentDateValue = startDayOfThisWeek.getDate();
  return new Date(startDayOfThisWeek.setDate(currentDateValue - 7));
};

export const getThisWeek = () => {
  var currentDate = getStartDayOfWeek();
  const currentDateValue = currentDate.getDate();
  const currentDay = currentDate.getDay();
  var startDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 1)
  );
  var endDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 7)
  );
  startDate = new Date(startDate.setHours(12, 0, 0));
  endDate = new Date(endDate.setHours(12, 0, 0));
  return { startDate, endDate };
};

export const getAWeek = (date) => {
  var currentDate = getStartDayOfWeek(date);
  const currentDateValue = currentDate.getDate();
  const currentDay = currentDate.getDay();
  var startDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 1)
  );
  var endDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 7)
  );
  startDate = new Date(startDate.setHours(12, 0, 0));
  endDate = new Date(endDate.setHours(12, 0, 0));
  return { startDate, endDate };
};

const getLaskWeek = () => {
  var currentDate = getStartDayOfLastWeek();
  const currentDateValue = currentDate.getDate();
  const currentDay = currentDate.getDay();

  var startDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 1)
  );
  var endDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 7)
  );

  startDate = new Date(startDate.setHours(12, 0, 0));
  endDate = new Date(endDate.setHours(12, 0, 0));
  return { startDate, endDate };
};

const getNextWeek = () => {
  var currentDate = getStartDayOfNextWeek();
  const currentDateValue = currentDate.getDate();
  const currentDay = currentDate.getDay();

  var startDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 1)
  );
  var endDate = new Date(
    currentDate.setDate(currentDateValue - currentDay + 7)
  );

  startDate = new Date(startDate.setHours(12, 0, 0));
  endDate = new Date(endDate.setHours(12, 0, 0));
  return { startDate, endDate };
};

export const getADay = (date) => {
  var startDate = moment(date);
  startDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  var endDate = moment(startDate).set({ hour: 23, minute: 59, second: 59 });
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  return { startDate, endDate };
};

export const getToday = () => {
  return getADay(moment());
};

const getTomorrow = () => {
  return getADay(moment().add(1, "days"));
};

const getYesterday = () => {
  return getADay(moment().add(-1, "days"));
};

export const getDateRanges = () => ({
  today: getToday(),
  yesterday: getYesterday(),
  tomorrow: getTomorrow(),
  thisWeek: getThisWeek(),
  lastWeek: getLaskWeek(),
  nextWeek: getNextWeek(),
  thisMonth: getThisMonth(),
  lastMonth: getLastMonth(),
  nextMonth: getNextMonth(),
});

export const handleCode401 = async () => {
  const lang = window.getAppLang();
  await localStorage.clear();
  await localStorage.setItem("lang", lang);
  await sessionStorage.removeItem("OTP_INFO");
  window.location.reload();
};
export const handleCode403 = () => {};

export const joinByMeetingLink = ({ link, shouldSignout, shouldRedirect }) => {
  if (shouldSignout) window.dispatch(clearAuthUser());
  window.dispatch(openVideoFrame({ link }));
  if (shouldRedirect) window.navigateTo("/Lilac");
};

export const goToMeeting = (appointment) => {
  window.dispatch(
    joinMeeting({ params: { meetingId: appointment.meetingId } })
  );
};

export const getSearchQueries = () => {
  let obj = {};
  let searchParams = window.currentLocation.search;
  if (searchParams[0] === "?") searchParams = searchParams.substring(1);
  let propss = searchParams.split("&");
  propss.map((p) => {
    let pair = p.split(/=(.+)/);
    obj[pair[0].toLowerCase()] = pair[1];
  });
  return obj;
};

export const getParentEvent = (data, event) => {
  if (!event || !event.parentEventId) return null;
  return findElementInList(data, "id", event.parentEventId);
};

export const getSubEvents = (data, event) => {
  if (!event || event.parentEventId) return [];
  return filterList(data, "parentEventId", event.id);
};
export const handleViewEvents = (events, size = 2, allEvents = []) => {
  if (!events || !Array.isArray(events)) return [];
  let dates = {};
  let finalEvents = [];
  events.map((ev) => finalEvents.push(...getAppointmentBlocks(ev)));

  finalEvents.map((ev) => {
    const eventWithParent = {
      ...ev,
      eventParent: getParentEvent(allEvents, ev),
      subEvents: getSubEvents(allEvents, ev),
    };
    let currentDate = eventWithParent.startDate.split("T")[0];
    if (currentDate in dates) {
      dates[currentDate].push(eventWithParent);
      return 0;
    }
    dates[currentDate] = [eventWithParent];
    return 1;
  });
  finalEvents = [];
  let more = [];
  for (var date in dates) {
    if (dates[date].length <= size) {
      finalEvents.push(...dates[date]);
      continue;
    }
    more = dates[date].splice(size);
    finalEvents.push(...dates[date], {
      topic: `${more.length} ${Object.translate("LABEL.EVENTS_MORE")}`,
      startDate: `${date}T23:58:00`,
      endDate: `${date}T23:59:59`,
      eventsGroup: [...dates[date], ...more],
    });
  }
  return finalEvents;
};

export const loadScriptByURL = (id, url, callback = () => {}) => {
  const isScriptExist = document.getElementById(id);
  if (isScriptExist) {
    callback();
    return;
  }

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.id = id;
  script.onload = () => callback();
  document.body.appendChild(script);
};

export const getInvitationText = (appointment) => {
  return `${window.location.origin}${process.env.PUBLIC_URL}/join?meetingId=${
    appointment.meetingId
  }${appointment.password ? "&password=" + appointment.password : ""}`;
};

export const displayDate = (date, format) => {
  const locale = getAppLang() === "ar" ? "ar" : "en";
  if (!format) {
    format = locale === "ar" ? "DD MMM YYYY,  hh:mm A" : "MMM DD,YYYY  hh:mm A";
  }
  moment.locale(locale);
  return moment(date).format(format);
};

export const generateRRule = (ruleProps = {}) => new RRule({ ...ruleProps });

export const Reccuringdata = RRule;

export const RepeatList = [
  { id: 1, title: "RRule.DAILY", freq: RRule.DAILY },
  { id: 2, title: "RRule.WEEKLY", freq: RRule.WEEKLY },
  { id: 3, title: "RRule.MONTHLY", freq: RRule.MONTHLY },
];

export const ReccuringDays = [
  { id: 1, title: "RRule.MO", day: RRule.MO },
  { id: 2, title: "RRule.TU", day: RRule.TU },
  { id: 3, title: "RRule.WE", day: RRule.WE },
  { id: 4, title: "RRule.TH", day: RRule.TH },
  { id: 5, title: "RRule.FR", day: RRule.FR },
  { id: 6, title: "RRule.SA", day: RRule.SA },
  { id: 7, title: "RRule.SU", day: RRule.SU },
];

export const DaysRankingList = [
  { id: 1, title: "RRule.FIRST" },
  { id: 2, title: "RRule.SECOND" },
  { id: 3, title: "RRule.THIRD" },
  { id: 4, title: "RRule.FORTH" },
  { id: 5, title: "RRule.FIFTH" },
];

export const getRepeatList = () =>
  RepeatList.map((e) => ({ ...e, text: Object.translate(e.title) }));
export const getReccuringDays = () =>
  ReccuringDays.map((e) => ({ ...e, text: Object.translate(e.title) }));
export const getDaysRankingList = () =>
  DaysRankingList.map((e) => ({ ...e, text: Object.translate(e.title) }));

export const generateDatesByRRlu = (startRule, endRule) => {
  const startList = startRule.all();
  const endList = endRule.all();
  let datesList = startList.map((startDateTime, idx) => ({
    startDateTime: getManualISOString(startDateTime),
    endDateTime: getManualISOString(endList[idx]),
  }));
  return datesList;
};

export const handleNoValue = (value) =>
  value || Object.translate("VALUE.NO_VALUE");

export const handleUnkownValue = (value) =>
  value || Object.translate("VALUE.UNKNOWN");

export const scrollIntoRef = (event, anchorRef, block = "end") => {
  if (anchorRef) {
    const anchor = (event?.target?.ownerDocument || document).querySelector(
      anchorRef
    );

    if (anchor)
      anchor.scrollIntoView({
        behavior: "smooth",
        block,
      });
  }
};

export const getPotentialParticipants = (data, relatedUsersIds, authUser) => {
  if (!data) return [];
  if (data.subEventCount > 0) {
    const eventWithCabin = data.subEvents.find((e) =>
      e.participants.map((p) => p.userType).includes(4)
    );

    return (
      eventWithCabin?.participants.filter(
        (p) =>
          relatedUsersIds.includes(p.userId) ||
          relatedUsersIds.includes(p.groupIn) ||
          authUser.userId === p.userId ||
          authUser.userId === p.groupIn
      ) || []
    );
  }
  return data.participants.filter(
    (p) =>
      relatedUsersIds.includes(p.userId) ||
      relatedUsersIds.includes(p.groupIn) ||
      authUser.userId === p.userId ||
      authUser.userId === p.groupIn
  );
};

export const openBase64InNewTab = (base64) => {
  var w = window.open("about:blank");

  setTimeout(() => {
    w.document.body.appendChild(w.document.createElement("iframe")).src =
      base64;
  }, 0);
};

export const patchMeetingId = (meetindId) => {
  return (`${meetindId}` || "").includes("C")
    ? `${meetindId}`.split("C")[1]
    : meetindId;
};

export const handlePhraseLoader = (severity = "info", text) => {
  if (!text) return window.dispatch(clearPhraseLoader());
  return window.dispatch(
    setPhraseLoader({
      severity,
      text,
    })
  );
};
