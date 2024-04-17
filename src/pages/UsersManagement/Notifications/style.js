import { makeStyles } from "@mui/styles";

export const eventsStyles = makeStyles((theme) => ({
  listIcon: {
    backgroundColor: "transparent!important",
    fontSize: theme.globals.fontSize.s,
    color: `${theme.globals.colors.textBasic}!important`,
    position: "absolute",
    width: "auto!important",
    height: "auto!important",
  },
  cabinetList: {
    overflow: "visible",
    position: "relative!important",
    "& .MuiListItem-root": {
      cursor: "pointer",
    },
  },

  myEvents: {
    position: "relative!important",
    height: "100%!important",
    marginBottom: "0px",
    marginTop: "0px",

    marginRight:
      theme.direction === "rtl" ? "20px !important" : "20px !important",
    marginLeft:
      theme.direction === "rtl" ? "20px !important" : "20px !important",

    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
        [theme.breakpoints.down("sm")]: {
          width: "auto!important",
        },
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
    },
  },
  EventsBox: {
    position: "relative!important",
    height: "100%!important",
    marginBottom: "0px",
    marginTop: "0px",

    marginRight:
      theme.direction === "rtl" ? "20px !important" : "20px !important",
    marginLeft:
      theme.direction === "rtl" ? "20px !important" : "20px !important",

    [theme.breakpoints.down("sm")]: {
      marginRight: "8px!important",
      marginLeft: "8px!important",
    },
    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
        [theme.breakpoints.down("sm")]: {
          width: "auto!important",
        },
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.globals.fontSize.xs + 1,
        },
      },
    },
  },
  relativeBox: {
    position: "relative",
  },

  smMdBoxSub: {
    flexDirection: "row",
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      marginTop: "750px!important",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse!important",
      minWidth: "100%",
      margin: "auto",
    },
  },

  smMdBoxIndex: {
    flexDirection: "row",
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "none!important",
      marginTop: "750px!important",
      width: "100%",
      marginRight: "-215px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex!important",
      backgroundColor: "#fff",
      marginBottom: "20px",
      borderRadius: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse!important",
      minWidth: "100%",
      margin: "auto",
    },
  },

  ToggleButtonsBox: {
    [theme.breakpoints.between("sm", "md")]: {
      backgroundColor: "#f5f6fa!important",
    },
  },

  FlagButton: {
    [theme.breakpoints.between("900", "1400")]: {
      display: "none",
    },
    "& svg": {
      color: "#A3A3A3",
    },
  },
  FlagButtonHeader: {},
  SearchBoxUpsmIcon: {
    borderRadius: "10px",
    backgroundColor: "#ecf0f8",
    [theme.breakpoints.between("sm", "md")]: {
      backgroundColor: "#fff",
      height: "46px",
      margin: "0 5px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      display: "none",
    },
    "& svg": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      color: "#A3A3A3",
      padding: "8px",
      [theme.breakpoints.down("sm")]: {
        width: "38px",
        height: "37px",
      },
    },

    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },

  SearchBoxUpsm: {
    borderRadius: "10px",
    backgroundColor: "#ecf0f8",
    position: "absolute",

    margin: "355px 0px 0 0",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      backgroundColor: "#fff",
      margin: "0px!important",
    },
    [theme.breakpoints.between("600", "900")]: {},
    [theme.breakpoints.between("sm", "md")]: {
      display: "none!important",
    },
    "& svg": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "44px",
      height: "44px",
      color: "#6c6e72",
      padding: "8px",
      [theme.breakpoints.down("sm")]: {
        width: "38px",
        height: "37px",
      },
    },

    [theme.breakpoints.up("md")]: {
      display: "none!important",
    },
  },
  SearchFeildsUpSm: {
    [theme.breakpoints.up("sm")]: {
      display: "none!important",
    },
  },
  SearchFeildsdownSm: {
    [theme.breakpoints.down("sm")]: {
      display: "none!important",
    },
  },
  myEventsHeader: {
    position: "relative!important",
    height: "100%!important",
    marginBottom: "0px",
    marginTop: "0px",
    [theme.breakpoints.down("400")]: {
      marginRight:
        theme.direction === "rtl" ? "0px !important" : "0px !important",
    },
    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
        [theme.breakpoints.down("sm")]: {
          width: "auto!important",
        },
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
    },
  },

  RecurringSelectBox: {
    width: "100%",
    "& .MuiAutocomplete-popper": {
      direction: theme.direction === "rtl" ? "ltr!important" : "ltr!important",
    },
    "& .MuiAutocomplete-root ": {},
    "& .MuiFormControl-root": {
      borderbottom: "1px solid #d5d5d5!important",
      width: "100%",
      borderRadius: "5px",
      height: "auto",
    },
  },
  selectBox: {
    width: "100%",
    "& .MuiAutocomplete-root ": {},
    "& .MuiFormControl-root": {
      border: "1px solid #d5d5d5!important",
      padding: "5px",
      width: "100%",
      borderRadius: "5px",
      height: "47px",
    },
  },

  MeetingButtons: {
    marginLeft: "47px!important",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px!important",
    },
    [theme.breakpoints.up("1400")]: {
      display: "none",
    },
  },

  hideHeader: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("1480")]: {
      display: "none",
    },
  },
  titlepara: {
    padding: "0 10px",
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "90%",
    "& svg": {
      color: theme.globals.colors.primary,
    },
  },

  ReccuringEventform: {
    padding: 0,
    [theme.breakpoints.down("sm")]: { width: "69%" },
    "& .MuiAutocomplete-endAdornment": {
      right: theme.direction === "rtl" ? "0 !important" : "inherit",
      left: theme.direction === "ltr" ? "88%!important" : "inherit",
    },
  },

  button: {
    borderRadius: "12px!important",
    height: 40,
    marginLeft: "8px!important",
    border: `1px solid ${theme.globals.colors.borderLight}!important`,
    color: `${theme.globals.colors.textDark}!important`,
  },

  titleTypography: {
    fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    marginInlineStart: "10px!important",
    fontWeight: "bolder!important",
    whiteSpace: "nowrap",
    lineHeight: 1.2,
    [theme.breakpoints.down("475")]: {
      fontSize: `${theme.globals.fontSize.s + 2}px!important`,
    },
  },
  titleButtonGrid: {
    gap: 10,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleButton: {
    maxWidth: "50%",
    minWidth: "118px !important",
  },
  detaielsMainGrid: {
    marginTop: "25px!important",
    padding: "0px!important",
    justifyContent: "space-around",
  },
  addingGrid: {
    position: "relative",
    backgroundColor: "#ffffff",
    borderRadius: "25px",
    padding: "20px",
  },
  detailesTitle: {
    position: "absolute",
    left: "0px",
  },
  parentEventGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    position: "absolute",
    top: "0px",
    width: "100%",
  },
  back: {
    color: "#FC2E53!important",
    width: "55px!important",
    minWidth: "45px!important",
    border: "none!important",
    cursor: "pointer",
    height: "45px",
    display: "flex",
    fontSize: "42px!important",
    alignItems: "center",
    borderRadius: "13px!important",
    justifyContent: "center",
    backgroundColor: "#F5F6FA!important",
  },
  popUpParticipants: {
    "& .ReminderIcon": {
      color: "#0054ed!important",
      margin: "0 3px 0 3px!important",
      cursor: "pointer",
    },
  },
  myUsers: {
    position: "relative!important",
    height: "fit-content",
    marginBottom: "0px",
    marginTop: "0px",

    marginRight:
      theme.direction === "rtl" ? "20px !important" : "20px !important",
    marginLeft:
      theme.direction === "rtl" ? "20px !important" : "20px !important",
    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
    },
  },
}));
