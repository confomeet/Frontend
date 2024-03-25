import confomeetLogo from "assets/images/logo.png";
import debounce from "lodash.debounce";
import {
  Reccuringdata,
  dispatchWantedAction,
  displayDate,
  findElementInList,
  generateRRule,
  getAdjastISOString,
  getAppLang,
  getArrChunk,
  getCorrentFingerPrint,
  getCurrentTimeZoneDate,
  getManualISOString,
  getMultiTransaltion,
  getSagaActions,
  getTransaltion,
  goToMeeting,
  handlePhraseLoader,
  isFullArray,
  isObjectEmpty,
  scrollIntoRef,
} from "./utils";

window.domain = process.env.PUBLIC_URL;

// window.domain = `https://localhost:7167`;

// window.domain = `https://callpp.infostrategic.com/meet`;
// window.domain = "https://lilacmeet.infostrategic.com/meet";

window.scrollIntoRef = scrollIntoRef;
window.officialLogo = confomeetLogo;
// window.defualtLang = "ar";
window.defualtLang = "en";

window.currentZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
window.getAppLang = getAppLang;
window.goToMeeting = goToMeeting;
window.getCorrentFingerPrint = getCorrentFingerPrint;
window.debounce = debounce;
window.handlePhraseLoader = handlePhraseLoader;
window.dispatchWantedAction = dispatchWantedAction;
window.getSagaActions = getSagaActions;

Object.isObjectEmpty = isObjectEmpty;
Object.translate = getTransaltion;
Object.multiTranslate = getMultiTransaltion;

Date.getAdjastTime = getCurrentTimeZoneDate;
Date.displayDate = displayDate;
Date.getAdjastISOString = getAdjastISOString;
Date.getManualISOString = getManualISOString;
Date.generateRRule = generateRRule;
Date.Reccuringdata = Reccuringdata;

Array.findElementInList = findElementInList;
Array.getArrChunk = getArrChunk;
Array.isFullArray = isFullArray;

localStorage.setItem("lang", getAppLang());
