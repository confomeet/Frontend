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
window.scrollIntoRef = scrollIntoRef;
window.officialLogo = confomeetLogo;
window.defualtLang = (() => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.match('ru'))
    return 'ru';
  else
    return 'en';
})();

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
