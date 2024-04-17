import * as ACTION_TYPES from "../actions/actionTypes";
import { combineReducers } from "redux";
import { themeList } from "../../constantData/theme";
import allActions from "../actions";
const { logOut } = allActions;

const currentTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : themeList[0];

let authUser = localStorage.getItem("profile") || null;
if (!authUser) {
  const regex = new RegExp(`(^|; )authUser=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match && match.length >= 3 && match[2]) {
    try {
      authUser = atob(unescape(match[2]))
      localStorage.setItem("profile", authUser);
    } catch (e) {
      console.error("Parsing authUser from cookie failed: " + e);
      authUser = null;
    }
  }
}
if (authUser) authUser = JSON.parse(authUser);

const appLang = window.getAppLang();

const initialState = {
  subHeader: null,
  link: null,
  partyId: null,
  correntBrowserFingerPrint: window.getCorrentFingerPrint(),
  authUser,
  appLang,
  currentTheme,
  themeList,
  isDark: Boolean(JSON.parse(localStorage.getItem("isDark"))),
  isRTL: appLang !== window.defualtLang,

  appDateFormat: "MMM D, YYYY",
  sideMenuToggle: false,
  pageTitle: "PAGES.DEFAULT",
  alertMessage: {
    open: false,
    severity: "info",
    text: "",
  },
  appRowsPerPage: 10,
  phraseLoader: {
    open: false,
    severity: "info",
    text: "",
  },
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SUB_HEADER:
      return {
        ...state,
        subHeader: action.subHeader,
      };
    case ACTION_TYPES.OPEN_VIDEO_FRAME:
      return {
        ...state,
        link: action.link,
      };
    case ACTION_TYPES.SET_INVESIGATION_PARTY_ID:
      return {
        ...state,
        partyId: action.partyId,
      };

    case ACTION_TYPES.OPEN_PDF_VIEWER:
      return {
        ...state,
        base64PDF: action.base64PDF,
      };

    case ACTION_TYPES.SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {
          open: true,
          severity: action.severity,
          text: action.text,
        },
      };

    case ACTION_TYPES.CLEAR_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: {
          open: false,
          severity: "info",
          text: "",
        },
      };
    case ACTION_TYPES.SET_HEADER_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.pageTitle,
      };

    case ACTION_TYPES.SET_LANG:
      localStorage.setItem("lang", action.lang);
      return {
        ...state,
        appLang: action.lang,
        isRTL: action.lang !== window.defualtLang,
      };

    case ACTION_TYPES.CLEAR_AUTH_USER:
      sessionStorage.removeItem("OTP_INFO");
      localStorage.removeItem("profile");
      localStorage.removeItem("firebase-token");
      localStorage.removeItem("finger-print");
      localStorage.removeItem("default_view");
      localStorage.removeItem("NavigateToDefaultOnSignIn");
      document.cookie = 'authUser=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      if (action.performLogOut) {
        console.log("aciton.performLogOut=true");
        setTimeout(() => window.dispatch(logOut({redirectUri: window.domain + '/login'})), 0);
      } else {
        window.navigateTo("/login");
      }
      return {
        ...state,
        authUser: null,
      };

    case ACTION_TYPES.SET_AUTH_USER:
      localStorage.setItem("profile", JSON.stringify(action.authUser));
      return {
        ...state,
        authUser: action.authUser,
      };

    case ACTION_TYPES.OPEN_SIDE_MENU:
      return {
        ...state,
        sideMenuToggle: true,
      };
    case ACTION_TYPES.CLOSE_SIDE_MENU:
      return {
        ...state,
        sideMenuToggle: false,
      };
    case ACTION_TYPES.DARK_THEME:
      return {
        ...state,
        isDark: action.payload,
      };

    case ACTION_TYPES.SET_DIRECTION:
      return {
        ...state,
        isRTL: action.payload,

        currentTheme: {
          ...state.currentTheme,
          direction: action.payload === true ? "rtl" : "ltr",
        },
      };

    case ACTION_TYPES.CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };

    case ACTION_TYPES.GET_THEME_LIST:
      return {
        ...state,
        themeList: action.payload.length ? action.payload : state.themeList,
      };

    case ACTION_TYPES.INCREASE_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xl: state.currentTheme.elements.fontSize.xl + 1,
              lg: state.currentTheme.elements.fontSize.lg + 1,
              m: state.currentTheme.elements.fontSize.m + 1,
              s: state.currentTheme.elements.fontSize.s + 1,
              xs: state.currentTheme.elements.fontSize.xs + 1,
            },
          },
        },
      };

    case ACTION_TYPES.DECREASE_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xl: state.currentTheme.elements.fontSize.xl - 1,
              lg: state.currentTheme.elements.fontSize.lg - 1,
              m: state.currentTheme.elements.fontSize.m - 1,
              s: state.currentTheme.elements.fontSize.s - 1,
              xs: state.currentTheme.elements.fontSize.xs - 1,
            },
          },
        },
      };

    case ACTION_TYPES.RESET_FONT:
      return {
        ...state,
        currentTheme: {
          ...state.currentTheme,
          elements: {
            ...state.currentTheme.elements,
            fontSize: {
              ...state.currentTheme.elements.fontSize,
              xl: state.currentTheme.elements.fontSizeG[0],
              lg: state.currentTheme.elements.fontSizeG[1],
              m: state.currentTheme.elements.fontSizeG[2],
              s: state.currentTheme.elements.fontSizeG[3],
              xs: state.currentTheme.elements.fontSizeG[4],
            },
          },
        },
      };

    case ACTION_TYPES.SET_PHRASE_LOADER:
      return {
        ...state,
        phraseLoader: {
          open: true,
          severity: action.severity,
          text: action.text,
        },
      };

    case ACTION_TYPES.CLEAR_PHRASE_LOADER:
      return {
        ...state,
        phraseLoader: {
          open: false,
          severity: "info",
          text: "",
        },
      };
    default:
      return state;
  }
};

export default combineReducers({
  settings,
});
