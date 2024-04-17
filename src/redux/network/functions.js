import actions from "../actions";
import { store } from "../store";

const { loadingReturned, setAlertMessage } = actions;

export const getCurrentUserIP = async () => {
  const res = await fetch(`https://geolocation-db.com/json/`, {
    method: "GET",
  });
  return res.json();
};

export const getGeneralHeaders = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const profileInfo = profile ? profile : null;
  const Authorization = profileInfo ? `Bearer ${profileInfo.token} ` : null;
  const lang = window.getAppLang();
  return { Authorization, lang };
};

export const getErrorMsgFromException = (obj) => {
  let msg = "";
  if (obj.error) {
    if (Array.isArray(obj.error)) obj.error.map((err) => (msg += `${err}`));
    else msg = obj.error;
  } else if (obj.errors) {
    for (let err in obj.errors) {
      obj.errors[err].map((er) => (msg += `${er}`));
    }
  }
  return msg;
};

export const getSearchQueries = () => {
  let obj = {};
  let searchParams = window.location.search;
  if (searchParams[0] === "?") searchParams = searchParams.substring(1);
  let propss = searchParams.split("&");
  propss.map((p) => {
    let pair = p.split(/=(.+)/);
    obj[pair[0].toLowerCase()] = pair[1];
  });
  return obj;
};

export const handleNotification = ({ title, message, success }) => {
  window.dispatch(
    setAlertMessage({
      severity: success ? "success" : "error",
      text: message,
    })
  );
};

export const handleApiResponseMessage = ({
  success,
  disableLoader,
  disableSwal,
  messageArr,
}) => {
  if (!disableLoader) store.dispatch(loadingReturned());
  if (disableSwal) return;
  return handleNotification({ message: messageArr.join("\n"), success });
};

export const checkTimeValue = (time, minTime, minDate) => {
  const now = new Date();
  const newMinDate = new Date(minDate);
  const nowHH = now.getHours();
  const nowMM = now.getMinutes();
  let currentMinTime = minTime;
  if (!currentMinTime) currentMinTime = `${nowHH}:${nowMM}`;
  let [currentMinTimeHH, currentMinTimeMM] = currentMinTime
    .split(":")
    .map((e) => Number(e));
  let [timeHH, timeMM] = time.split(":").map((e) => Number(e));
  if (
    now.getMonth() === newMinDate.getMonth() &&
    now.getFullYear() === newMinDate.getFullYear() &&
    now.getDay() === newMinDate.getDay() &&
    (timeHH < currentMinTimeHH ||
      (timeHH === currentMinTimeHH && timeMM < currentMinTimeMM))
  )
    return false;
  return true;
};

export const isEmail = (email) => {
  return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
};

export const checkFullDate = (date2, date1) => {
  let newDate1;
  if (date1) newDate1 = new Date(date1.slice(0, -1));
  else {
    newDate1 = new Date();
  }

  const newDate2 = new Date(date2.slice(0, -1));
  if (newDate1.getFullYear() > newDate2.getFullYear())
    return { time: true, date: false };

  if (
    newDate1.getFullYear() === newDate2.getFullYear() &&
    newDate1.getMonth() > newDate2.getMonth()
  )
    return { time: true, date: false };

  if (
    newDate1.getFullYear() === newDate2.getFullYear() &&
    newDate1.getMonth() === newDate2.getMonth() &&
    newDate1.getDate() > newDate2.getDate()
  )
    return { time: true, date: false };

  if (newDate1.getTime() > newDate2.getTime())
    return { time: false, date: true };
  return { time: true, date: true };
};

export const calculateNextThirtyMin = (interval, timeZone) => {
  const timeStampCurrentOrOldDate = Date.now();
  const timeStampStartOfDay = new Date().setHours(0, 0, 0, 0);
  const timeDiff = timeStampCurrentOrOldDate - timeStampStartOfDay;
  const mod = Math.ceil(timeDiff / interval);

  const date = new Date(timeStampStartOfDay + mod * interval);

  const currentTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timeZone,
  });

  return currentTime;
};

export const checkTimeValue0 = (time, minTime) => {
  const now = new Date();
  const nowHH = now.getHours();
  const nowMM = now.getMinutes();
  let currentMinTime = minTime;
  if (!currentMinTime) currentMinTime = `${nowHH}:${nowMM}`;
  let [currentMinTimeHH, currentMinTimeMM] = currentMinTime
    .split(":")
    .map((e) => Number(e));
  let [timeHH, timeMM] = time.split(":").map((e) => Number(e));
  if (
    timeHH < currentMinTimeHH ||
    (timeHH === currentMinTimeHH && timeMM < currentMinTimeMM)
  )
    return false;
  return true;
};

export const handleApiFinalResult = async ({
  swalMessage,
  successResult,
  disableLoader,
  disableSwal,
  finalResult,
}) => {
  await handleApiResponseMessage({
    messageArr: swalMessage,
    success: successResult,
    disableLoader,
    disableSwal,
  });
  return finalResult;
};

export const getSearchParams = (params) =>
  Object.entries(params || {})
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&");

export const getFullURL = ({ baseURL, endpoint, params }) => {
  const searchParams = getSearchParams(params);
  const url = `${baseURL}${endpoint}?${searchParams}`;
  return url;
};

const generateColumnData = (data) => {
  let columnData = [];
  return new Promise((resolve, reject) => {
    if (!data.length) resolve([]);
    Object.keys(data[0]).map((row) => {
      let singleDataObj = {
        Id: row,
        name: row,
        label: row.toUpperCase(),
      };

      if (["I.D.", "id", "*"].includes(row))
        singleDataObj.options = {
          display: "excluded",
        };

      if (["I.D.", "id"].includes(row)) singleDataObj.Identity = true;

      columnData.push(singleDataObj);
    });
    resolve(columnData);
  });
};

export const getTableRowsAndColumns = async (data) => {
  let ROWS = [],
    COLUMNS = [];
  if (!(data && data.length)) return { ROWS, COLUMNS };
  COLUMNS = await generateColumnData(data);
  ROWS = data.map((x) => {
    return Object.values(x);
  });
  return { ROWS, COLUMNS };
};

export const getDatesDiffernces = (date1, date2) => {
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.ceil(Difference_In_Days);
};

export const handleSubEvebtsFilter = (data, subEventsAperance) => {
  if (subEventsAperance === true) {
    return data;
  } else if (subEventsAperance === false) {
    const newData = data.filter((row) => !row.parentEventId);
    return newData;
  }
};

export const convertToBlob = (obj) => {
  if (!obj) return null;
  return new Blob([obj]);
};

export const convertToFile = (obj) => {
  if (Object.isObjectEmpty(obj)) return null;
  return new File([convertToBlob(obj)], obj?.fileName || "", {
    lastModified: new Date().getTime(),
    type: "image/png",
    id: obj?.id,
  });
};
