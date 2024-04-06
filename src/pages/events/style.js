import { makeStyles } from "@mui/styles";

export const eventsStyles = makeStyles((theme, isRTL) => ({
  filtersSwitchers: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  addGroupSelect: {
    "& > div": {
      "& > div": {
        "& > label": {
          transition: "all 0.3s ease-in-out",
          color: "#797C85",
          transform: "translate(0, 20px) scale(1)!important",
          left: "0",

          "& .MuiFormLabel-asterisk": {
            color: theme.globals.colors.delete,
          },
        },
      },
    },

    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "0",
      left: "unset",
    },
    "& .MuiInputBase-root": {
      padding: "0!important",
    },
  },
  headerEventsButtons: {
    display: "flex",
    alignItems: "end",
    "& svg": {
      color: `${theme.globals.colors.primary}!important`,
    },
    "& .MuiBox-root": {
      "& button": {
        "&:after": {
          position: "absolute",
          content: '""',
          width: 1,
          height: 21,

          backgroundColor: "rgba(0, 0, 0, 0.12)",
          right: 0,
        },
      },
    },
  },
  appointmentTitleButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .MuiDivider-root": {
      margin: "12px 4px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  findValueFeild: {
    padding: "0 24px",
    marginTop: "8px!important",
    marginBottom: "16px!important",
    [theme.breakpoints.down("sm")]: {
      padding: "0 8px",
      marginTop: "12px!important",
    },
    "& .MuiFormControl-root": {
      display: "flex",
      alignItems: "center",

      height: "100%",
      justifyContent: "center",
      width: "100%",
    },
    "& .MuiInput-root": {
      width: "100%",

      fontSize: "14px",
      "& input": {
        padding: "4px 0",
      },
    },
  },
  addEventPartyBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imUsersBox: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: `${theme.globals.colors.primary}!important`,
      marginInlineEnd: "10px",
      fontSize: theme.globals.fontSize.lg,
    },
  },
  borderSectionBox: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  badgeBox: {
    display: "grid",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",

    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
    },
  },
  titletimeZone: {
    fontSize: `${theme.globals.fontSize.xs + 0.5}px!important`,
  },
  timeZoneBox: {
    width: "100%",
    borderBottom: "1px solid #A4A4A4",
    "& .MuiFormControl-root ": {
      width: "100%",
    },
    "& .singleValue": {
      fontSize: `${theme.globals.fontSize.s - 1}px!important`,
      margin: "0!important",
      color: "#1F2945!important",
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
      },
    },
    "&  .css-13cymwt-control": {
      border: "none!important",
      backgroundColor: "transparent",
      "&  .css-1fdsijx-ValueContainer": {
        "&:focus-visible": {
          border: "none!important",
        },
      },
    },
    "& .css-1nmdiq5-menu": {
      zIndex: "3!important",
    },
    "& .css-t3ipsp-control": {
      border: "none!important",
      boxShadow: "none!important",
    },
    "& .css-16xfy0z-control": {
      backgroundColor: "#fff!important",
      borderColor: "#fff",
    },
    "& .css-1fdsijx-ValueContainer": {
      padding: "0!important",
    },
  },
  badgeBoxDate: {
    display: "grid",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",
  },
  repeatByAny: {
    marginBottom: "20px",
    minWidth: "48%",
  },
  weeksBox: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  daysBox: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  untilBox: {
    minWidth: "50%",
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  monthBox: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  listIcon: {
    backgroundColor: "transparent!important",
    fontSize: theme.globals.fontSize.s,
    color: `${theme.globals.colors.textBasic}!important`,
    position: "absolute",
    width: "auto!important",
    height: "auto!important",
  },
  searchitemBox: {
    width: "100%!important",
    margin: "0 0 20px ",
    border: "1px solid #DCDCDC",
    borderRadius: "4px",
    padding: "10px 20px",
    "& .MuiGrid-root": {
      paddingInlineEnd: "20px",
      [theme.breakpoints.down("sm")]: {
        paddingInlineEnd: "0px",
        marginBottom: "8px",
      },
    },
    "& svg": {
      color: theme.globals.colors.primary,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 16px",
    },
    "& .MuiFormGroup-root": {
      flexWrap: "nowrap",
      "& .MuiFormControlLabel-root": {
        margin: "0",
        whiteSpace: "nowrap",
      },
    },
  },
  notificationsMainBox: {
    position: "relative!important",
    height: "fit-content",
    marginBottom: "0px",
    marginTop: "0px",

    "& .internal-header-filter": {
      display: "flex!important",
      alignItems: "center!important",
      marginBottom: theme.spacing(2),
      justifyContent: "space-between",
      flexWrap: "wrap!important",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap!important",
      },

      "& .search": {
        height: "50px!important",
        borderBottom: `1px solid #a4a4a4`,

        margin: theme.spacing(0, 1, 0, 0),
        flex: "auto!important",
        minWidth: "208px!important",

        [theme.breakpoints.down("md")]: {
          margin: theme.spacing(0, 0, 0, 0),
        },
        "& .MuiSelect-select ": {
          padding: "0!important",
          backgroundColor: "inherit!important",
        },

        "& .MuiInput-root ": {
          fontSize: theme.globals.fontSize.s - 2,
          color: `${theme.globals.colors.textDarkGrey}!important`,
        },
        "& input ": {
          fontSize: theme.globals.fontSize.s - 2,
          WebkitTextFillColor: `${theme.globals.colors.textDarkGrey}!important`,
          color: `${theme.globals.colors.textDarkGrey}!important`,
          textOverflow: "ellipsis!important",
          minWidth: "80px!important",
        },
        "& .MuiDivider-root ": {
          marginInline: "4px!important",
        },
        "&  .MuiInput-underline:before": {
          display: "none!important",
        },
        "&  .MuiInput-underline:after": {
          display: "none!important",
        },
        "& svg": {
          fontSize: theme.globals.fontSize.xs * 2,
          color: "#A3A3A3!important",
          cursor: "pointer!important",
          color: `${theme.globals.colors.primary}!important`,
        },
        "& .MuiFormControl-root": {
          width: "100%",
        },
      },
      "& .autosearch": {
        flex: "auto!important",
        height: "50px!important",
        padding: "0px!important",
        border: `1px solid ${theme.globals.colors.borderGrey}`,

        "& div": {
          padding: "0px 0 0 3px !important",
          minHeight: "48px!important",
          borderRadius: "10px !important",
        },
      },
      "& .searchitem": {
        minWidth: "216px!important",
        borderRadius: "4px !important",
        "& .MuiInput-root": {
          color: "#363636!important",
        },
      },
    },
  },
  displayBox: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    alignItems: "end",
    marginBottom: "12px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "95px 1fr",
    },
  },
  advancedBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20px",
    "& .MuiAutocomplete-root": {
      borderBottom: "0.82px solid #A4A4A4",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0 0",
    },
  },

  eventsSwitch: {
    margin: "0 20px",

    [theme.breakpoints.down("sm")]: {
      margin: "0",
      width: "100%",
    },
    [theme.breakpoints.between("700", "800")]: { width: "93%" },
    "& .groupByPage": {
      "& .MuiPaper-root": {
        border: "0.965293px solid #DCDCDC",
        transition: "all 0.3s ease-in-out!important",
        padding: "16px 12px 0 12px",
        "&:hover": {
          transform: "scale(1.03)",
        },
      },
      "& .MuiPagination-ul": {
        "& .Mui-selected": {
          borderRadius: "50%",
        },
        "& li": {
          "& .MuiPaginationItem-previousNext": {
            width: "35px",
            height: "35px",
            border: "1px solid #ccc",
            borderRadius: "50%",
          },
        },
      },
    },
  },
  mainEventContainer: {
    width: "100%!important",
    display: "flex!important",
    flexDirection: "row-reverse!important",
    flexWrap: "nowrap!important",
    margin: "0px!important",
    [theme.breakpoints.down("960")]: {
      flexDirection: "column!important",
    },
  },
  addRemoveBox: {
    width: "45px",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    borderRadius: "4px",
    "& svg": {
      color: theme.globals.colors.primary,
      fontSize: "22px",
    },
    "&:hover": {
      backgroundColor: "#F6FAFF",
      "& svg": {
        transform: "scale(1.20)",
      },
    },
  },
  searchIconox: {
    width: "45px",
    position: "relative",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7px",
    transition: "all 0.3s ease-in-out",
    "&:before": {
      width: "1px",
      height: "20px",
      content: '""',
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      right: "0px",
    },
    "& div": {
      margin: "inherit",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#F6FAFF",
      "& svg": {
        color: "#fff",
        transform: "scale(1.10)",
      },
    },

    [theme.breakpoints.up("sm")]: {
      height: "45px",
    },
  },
  mainContainer: {
    width: "100%",
    flexDirection: "column",
  },
  boxPagination: {
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiGrid-item": {
      display: "flex!important",
      justifyContent: "center!important",
    },
    "& button": {
      height: "35px!important",
      backgroundColor: "#fff!important",
      color: `${theme.globals.colors.primary}!important`,
    },
    "& .Mui-selected": {
      borderRadius: "50%",
    },
    "& li": {
      "& .MuiPaginationItem-previousNext": {
        width: "35px",
        height: "35px",
        border: "1px solid #ccc",
        borderRadius: "50%",
      },
    },

    "& p": {
      fontSize: theme.globals.fontSize.xs + 1,
    },
    "& .MuiPaginationItem-root": {
      border: "none",
    },
  },
  partyNoteDialog: {
    "& .MuiDialogActions-root": {
      display: "flex",
      justifyContent: "center",
    },
    "& button": {
      boxShadow: "none!important",
      marginBottom: "20px!important",
    },
  },
  cabinetList: {
    overflow: "visible",
    position: "relative!important",
    "& .MuiListItem-root": {
      cursor: "pointer",
    },
    "& svg": {
      color: theme.globals.colors.primary,
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
  smMdBox: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.between("sm", "md")]: {
      display: "none!important",
      marginTop: "750px!important",
      width: "100%",
      marginRight: "-215px",
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
  filtersBox: {
    height: "50px",
    border: "1px solid #e1e1e1",
    zIndex: "3",
    "& .MuiDivider-root ": {
      marginTop: "16px!important",
      marginBottom: "12px!important",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    "& div": {
      "& >hr:first-child": {
        display: "none",
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderTop: "1px solid #e0e0e0",
      borderBottom: "1px solid #e0e0e0",
      marginTop: "8px",
    },
  },
  FlagButton: {
    "& svg": {
      color: "#A3A3A3",
    },
  },
  FlagButtonHeader: {},
  SearchBoxUpsmIcon: {
    borderRadius: "10px",
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

  SearchFeildsBox: {
    padding: "10px 0",
    border: "0.6px solid #DCDCDC",
    marginBottom: 60,
    "& .searchBtnsBox": {
      marginInlineEnd: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
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

  searchContainer: {
    margin: "auto!important",

    [theme.breakpoints.down("sm")]: {
      width: "auto",

      height: "fit-content",
      display: "flex!important",
      justifyContent: "center",
      alignItems: "center",
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
  searchBtnsBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "fit-content",
    marginTop: "18px!important",
    marginBottom: "8px!important",
    [theme.breakpoints.down("sm")]: {
      padding: "6px 0!important",
    },
    [theme.breakpoints.between("600", "1200")]: {
      marginTop: "8px!important",
    },
    "& .searchbtn": {
      backgroundColor: theme.globals.colors.primary,
      color: "#fff",
      marginInlineEnd: "8px",
      "&:hover": {
        border: "1px solid",
        borderColor: theme.globals.colors.primary,
        backgroundColor: "#fff",
        color: theme.globals.colors.primary,
      },
    },
    "& .clearbtn": {
      border: "1px solid",
      borderColor: theme.globals.colors.primary,
      "&:hover": {
        backgroundColor: theme.globals.colors.primary,
        color: "#fff",
      },
    },
    "& .medium-btn": {
      [theme.breakpoints.down("sm")]: {
        minWidth: "120px!important",
      },
    },
  },
  notifiBtnsBox: {
    width: "fit-content!important",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "fit-content",
    marginTop: "20px!important",
    marginBottom: "10px!important",
    marginInlineEnd: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "6px 0!important",
    },
    [theme.breakpoints.between("600", "1200")]: {
      marginTop: "8px!important",
    },
    "& .searchbtn": {
      backgroundColor: theme.globals.colors.primary,
      color: "#fff",
      marginInlineEnd: "8px",
      "&:hover": {
        border: "1px solid",
        borderColor: theme.globals.colors.primary,
        backgroundColor: "#fff",
        color: theme.globals.colors.primary,
      },
    },
    "& .clearbtn": {
      border: "1px solid",
      borderColor: theme.globals.colors.primary,
      "&:hover": {
        backgroundColor: theme.globals.colors.primary,
        color: "#fff",
      },
    },
    "& .medium-btn": {
      [theme.breakpoints.down("sm")]: {
        minWidth: "120px!important",
      },
    },
  },
  internalHeader: {
    minHeight: "70px",
    justifyContent: "space-between",
    alignItems: "center!important",

    padding: "5px 0!important",
    flexWrap: "nowrap!important",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap-reverse!important",
      padding: "5px 0 0 !important",
      marginBottom: theme.spacing(0),
      justifyContent: "right",

      "& .MuiButtonGroup-root ": {
        width: "100%!important",

        [theme.breakpoints.down("sm")]: {
          border: "none!important",
          borderRadius: "10px!important",
          height: "45px!important",
        },
      },
    },
    [theme.breakpoints.between("sm", "md")]: {
      justifyContent: "end",
      marginBottom: "0!important",

      "& .MuiGrid-container": {
        flexWrap: "nowrap!important",
        width: "100%",
        justifyContent: "space-between",
      },
    },
    [theme.breakpoints.between("900", "1400")]: {
      justifyContent: "space-between",
    },

    "& .MuiFormControl-root": {
      flex: "auto!important",
      minWidth: "50px!important",
    },

    "& .internalSwitcherSub": {
      display: "flex!important",
      flexDirection: isRTL ? "row" : " row-reverse",
      justifyContent: "center!important",
      alignItems: "baseline!important",
      maxWidth: "241px!important",
      padding: "3px!important",
      marginRight: "8px!important",
      "& .MuiFormControlLab:el-root": {
        margin: "0 !important",
      },
      "& .formControl": {
        borderBottom: "none!important",
      },
      "& .MuiFormControlLabel-root": {
        marginRight: "0!important",
        marginLeft: "0!important",
      },
    },

    "& .subSwitchercontainer": {
      display: "flex",
      alignItems: "baseline",
      [theme.breakpoints.down("sm")]: {
        marginTop: "15px!important",
      },
    },
    "& .subswitcher": {
      minWidth: "140px",
      "& span": {
        fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
        whiteSpace: "nowrap!important",
      },
      "& .MuiFormControlLabel-label": {},
      "& .MuiFormControlLabel-root": {
        marginRight: "0!important",
        marginLeft: "0!important",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.between("sm", "md")]: {
        minWidth: "126px!important",
      },
    },

    "& .MuiButtonGroup-root ": {
      borderRadius: " 16px!important",
      marginInlineEnd: " 8px!important",

      "& button": {
        color: "rgba(0, 0, 0, 0.6)",
        textTransform: "capitalize!important",
        border: "none",
        minWidth: " 55px!important",
        marginInline: "2px!important",
        fontWeight: "600!important",
        transition: "all 0.3s ease-in-out",

        "&:hover": {
          backgroundColor: "transparent!important",
          color: `${theme.palette.primary.main}!important`,
          transform: "scale(1.15)",
        },
        [theme.breakpoints.between("600", "650")]: {
          minWidth: " 45px!important",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "0",
          minWidth: "30px!important",
          marginInlineEnd: "8px!important",
          "& span": {
            fontSize: theme.globals.fontSize.xs + 1,
          },
        },
      },

      "& .active": {
        color: `${theme.palette.primary.main}!important`,
        transition: "none",

        "& .filterLabel": {
          borderBottom: "3px solid",
          borderBottomColor: `${theme.palette.primary.main}!important`,
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        },

        "&:hover": {
          transform: "none",
        },
      },
    },
    "& .MuiToggleButtonGroup-root ": {
      "& .MuiToggleButton-root": {
        border: "none!important",
        width: "45px!important",
        height: "45px!important",
        borderRadius: "4px!important",
        fontSize: theme.globals.fontSize.s + 2,
        transition: "all 0.3s ease-in-out",

        [theme.breakpoints.down("sm")]: {
          fontSize: theme.globals.fontSize.s,
        },
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#F6FAFF",
          "& svg": {
            color: "#fff",
            transform: "scale(1.10)",
          },
        },
        [theme.breakpoints.down("sm")]: {
          height: "34px!important",
        },
        [theme.breakpoints.between("sm", "md")]: {
          backgroundColor: " #fff",
        },
      },
      "& .Mui-selected": {
        backgroundColor: "#F6FAFF",
        "&:hover": {
          backgroundColor: theme.globals.colors.primary,
          "& svg": {
            color: "#fff",
          },
        },
        "& svg": {
          color: theme.globals.colors.primary,
        },
      },
    },

    "& .descSection": {
      display: "flex!important",
      flexDirection: "column!important",
    },
  },
  switchContainer: {
    display: "grid!important",
    width: "100%",
    gridTemplateColumns: "repeat(5,1fr)!important",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)!important",
    },
    [theme.breakpoints.between("600", "1000")]: {
      gridTemplateColumns: "repeat(3,1fr)!important",
    },
  },
  recuuringContainer: {
    display: "grid!important",

    width: "100%",
    gridTemplateColumns: "repeat(3,1fr)!important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  eventContainer: {
    backgroundColor: "#fff",
    paddingInlineStart: "30px",
    width: "65%!important",
    borderLeft: "1px dashed #ccc",
    [theme.breakpoints.down("900")]: {
      margin: "0 auto",
      width: "100%!important",
      borderLeft: "none!important",
    },
    [theme.breakpoints.between("600", "900")]: {
      padding: "20px",
    },
    [theme.breakpoints.down("600")]: {
      padding: "0",
    },
  },
  sectionFirstGrid: {
    display: "flex",
    flexDirection: "column!important",

    [theme.breakpoints.down("sm")]: {
      padding: "0 2px",
      width: "100%",
    },
  },

  badgeBoxDescription: {
    margin: "20px 0",
    gridTemplateColumns: " 110px 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "95px 1fr",
    },
    "& input": {
      borderBottom: "0.5px solid",
      borderBottomColor: `${theme.globals.colors.primary}54!important`,
      width: "-webkit-fill-available",
    },
  },
  editTitle: {
    color: "#393939",
    fontSize: theme.globals.fontSize.s - 1,

    width: "75%",
  },
  PartyTitle: {
    color: "#000",
    fontSize: theme.globals.fontSize.s + 2,
    whiteSpace: "nowrap",
    paddingBottom: "5px",
    borderBottom: "5px solid",
    borderBottomColor: `${theme.globals.colors.primary}54!important`,
    width: "fit-content",
    maxHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.globals.fontSize.s,
    },
  },
  PartyTypo: {
    fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    whiteSpace: "nowrap",
    fontWeight: "bolder!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: `${theme.globals.fontSize.s + 2}px!important`,
    },
  },
  emailBox: {
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
      padding: "0 10px!important",
    },
    "& .MuiInputBase-root": {
      padding: "0!important",
    },
    "& .MuiAutocomplete-endAdornment": {
      position: "relative!important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      margin: "5px auto",
    },

    "& > div": {
      "& > div": {
        "& > label": {
          transition: "all 0.3s ease-in-out",

          transform: "translate(0, 20px) scale(1)!important",
          left: theme.direction === "rtl" ? "0px !important" : "",
          right:
            theme.direction === "rtl" ? "0 !important" : "inherit !important",
          "& .MuiFormLabel-asterisk": {
            color: theme.globals.colors.delete,
          },
        },
      },
      "& .MuiInputLabel-shrink": {
        transition: "all 0.3s ease-in-out!important",
        fontSize: "12.5px!important",
        zIndex: 2,
        transform: "translate(0, 0px) scale(1)!important",
        left: theme.direction === "rtl" ? "0px !important" : "",
        right:
          theme.direction === "rtl" ? "unset !important" : "inherit !important",
      },
    },
  },
  btnBox: {
    marginTop: "12px",
  },
  internalSwitcher: {
    display: "flex!important",
    flexDirection: isRTL ? "row" : " row-reverse",

    justifyContent: "center!important",
    alignItems: "baseline!important",

    padding: "3px 0!important",

    flexWrap: "nowrap!important",
    marginRight: "3px!important",
    "& >label": {
      marginLeft: "0",
    },
    "& > input": {
      "& > div": {
        opacity: "0.",
      },
    },
  },
  switchercontainer: {
    display: "flex",

    justifyContent: "space-between",
    [theme.breakpoints.up("600")]: {
      alignItems: "end",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px!important",
      flexDirection: "column",
      width: "100%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("350")]: {
      justifyContent: "inherit",
    },
  },
  addEventButton: {
    width: "45px!important",
    minWidth: "45px!important",
    height: "45px!important",
    borderRadius: "4px!important",
    fontSize: theme.globals.fontSize.s + 2,

    marginTop: "4px!important",
    transition: "all 0.3s ease-in-out!important",
    "&:hover": {
      backgroundColor: "#F6FAFF",
      cursor: "pointer",
      "& svg": {
        color: "#fff",
        transform: "scale(1.10)",
      },
    },
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "38px!important",
      width: "37px!important",
      minWidth: "37px!important",
      marginBottom: "0px",

      marginLeft: "8px",
      marginRight: "4px",
    },
  },
  searchbtn: {
    border: "1px solid",
    backgroundColor: theme.globals.colors.primary,
    borderRadius: "15px !important",
    color: "#fff!important",
    display: "flex!important",
    justifyContent: "space-evenly!important",
    "& span": {
      color: "#fff",
    },
    "& svg": {
      fontSize: `${theme.globals.fontSize.m + 2}px!important`,
      color: "#fff",
    },
  },

  clearbtn: {
    border: "1px solid #ddd!important",
    borderRadius: "15px !important",
    margin: "0 10px!important",
    display: "flex!important",
    justifyContent: "space-evenly",
    color: "#232323!important",
    "& span": {
      color: "#000!important",
    },
    "& svg": {
      fontSize: `${theme.globals.fontSize.m + 2}px!important`,
    },
  },
  SubTitleEdit: {
    color: "#7C7C7C",
    fontSize: theme.globals.fontSize.xs + 2,
    margin: "4px 0 0px",
  },
  FirstSection: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "0 2px",
    },
  },
  nameFeild: {
    marginBottom: "20px",
    "& .MuiFormHelperText-root": {
      zIndex: "2",
      position: "absolute",
      textAlign: "inherit",
      top: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      margin: "5px auto 24px",
    },
  },
  ButtonGroupGrid: {
    borderRadius: "10px",
    padding: "40px 0 60px",
    justifyContent: "flex-end!important",
    width: "100%",
    display: "flex",

    [theme.breakpoints.down("900")]: {
      display: "none",
    },
    "& button": {
      margin: "0 0px 0 10px",
    },
  },
  ButtonGroupGridDown900: {
    borderRadius: "10px",
    padding: "40px 0 60px",
    flexDirection: "row-reverse!important",
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "center",

    [theme.breakpoints.up("900")]: {
      display: "none",
    },
    "& button": {
      margin: "0 0px 0 10px",
    },
  },
  MeetingButtons: {
    marginLeft: "47px!important",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px!important",
    },
    [theme.breakpoints.up("1480")]: {
      display: "none",
    },
  },

  hideHeader: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("1450")]: {
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
    width: "100%",
    "& svg": {
      color: theme.globals.colors.primary,
    },
  },
  PartyTable: {
    width: "100%",

    backgroundColor: "white!important",
  },
  ReccuringEventform: {
    width: "100%",
    display: "flex",
  },
  eventForm: {
    margin: "10px 20px",
    [theme.breakpoints.down("600")]: {
      margin: "0px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 10,
      paddingLeft: 0,
    },
    "& .MuiButton-startIcon": {
      marginRight: "8px!important",
    },
    "& .details-section": {
      "& .section": {
        backgroundColor: theme.palette.background.default,
        borderRadius: " 10px!important",
        padding: "16px!important",
        marginBottom: "8px!important",
      },
    },
    "& .ParticipSection": {
      display: "flex!important",
      width: "100%",
      flexDirection: "column!important",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },

    "& .Descriptionsection": {
      display: "flex",
      flexDirection: "row!important",
      alignItems: "baseline",
      height: "max-content!important",
      margin: "40px 10px 0px 10px!important",
      "& .MuiSvgIcon-root": {
        color: "#656565",
        width: "20px",
        margin: "0 15px 0 0",
      },
    },
    "& .readOnlysection": {
      display: "flex",
      flexDirection: "row",
      alignItems: "end",
      height: "30px",
      margin: "0 10px 0px 10px",
      [theme.breakpoints.down("sm")]: {
        margin: "0 0 10px 0",
      },
      "& svg": {
        color: theme.globals.colors.primary,
        width: "40px",
        fontSize: "20px",
      },
    },
    "& .typeSection": {
      border: "1px solid #d5d5d5",
      width: "96%",
      margin: "auto",
      borderRadius: "0 0 4px 4px",
      padding: "0 10px  0 10px",
      height: "40px",
      "& .MuiAutocomplete-listbox": {
        border: "2px solid grey",
        minHeight: 400,
        backgroundColor: "green!important",
        fontSize: theme.globals.fontSize.s + 2,
        //hover discussed above
        "& > div": {
          justifyContent: isRTL ? "start!important" : "end!important",
        },
        "& li": {
          border: "2px solid green!important",
          borderRadius: 4,
        },
      },
    },
    "& .typeSection2": {
      margin: "auto",
      height: "40px",
      "& .MuiAutocomplete-listbox": {
        border: "2px solid grey",
        minHeight: 400,

        fontSize: theme.globals.fontSize.s + 2,
        "& > div": {
          justifyContent: isRTL ? "start!important" : "end!important",
        },
        "& li": {
          border: "2px solid green!important",
          borderRadius: 4,
        },
      },
    },
    "& .typeSectionBox": {
      display: "flex",
      marginBottom: "16px",
      width: "100%",
      alignItems: "center",
      "& svg": {
        color: `${theme.globals.colors.primary}!important`,
        marginInlineEnd: "10px",
        fontSize: theme.globals.fontSize.lg,
      },
    },

    "& .borderSectionDown600": {
      display: "grid",
      alignItems: "end",
      marginBottom: "16px",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "95px 1fr",
      },
      "& .MuiAutocomplete-root": {
        borderBottom: "1px solid #b7d4f7!important",
      },
      "& .MuiInput-root": {
        width: "100%!important",
      },
    },
    "& .parentEventBox": {
      borderTop: `3px solid ${theme.globals.colors.primary}`,

      display: "flex",
      justifyContent: "center",
      width: "auto",
      minWidth: "200px",
      alignItems: "center",
    },
    "& .parasectionTimeZone": {
      display: "flex",
      flexDirection: "row",
      alignItems: "end",
      height: "30px",
      margin: "5px 10px 14px 10px",
      [theme.breakpoints.down("sm")]: {
        margin: "10px 0px 5px 0px",
      },

      "& .MuiSvgIcon-root": {
        color: "#656565",
        width: "20px",
        margin: "0 15px 0 0",
      },
    },
    "& .parasection": {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      height: "30px",
      margin: "15px 10px 5px 10px",
      [theme.breakpoints.down("sm")]: {
        margin: "15px 0px 5px 0px",
      },
      "& .MuiSvgIcon-root": {
        color: "#656565",
        width: "20px",
        margin: "0 15px 0 0",
      },
    },
    "& .parasection2": {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      height: "43px",
      margin: "0 10px 5px 10px",
      "& .MuiSvgIcon-root": {
        color: "#656565",
        width: "20px",
        margin: "0 15px 0 0",
      },
    },

    "& .DescSection": {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      margin: "15px 10px 15px 10px",
      [theme.breakpoints.down("sm")]: {
        margin: "15px 2px 5px 2px",
      },
    },

    "& .switchsection": {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      [theme.breakpoints.down("sm")]: {
        margin: "10px 0",
      },
      [theme.breakpoints.between("600", "900")]: {
        margin: "5px 0!important",
      },
      "& .MuiSwitch-root": {
        width: "50px!important",
        height: "37px!important",
      },
      "& span": {
        whiteSpace: "nowrap",
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.globals.fontSize.s - 1,
        },
      },
      "& .MuiFormControlLabel-root": {
        margin: "0!important",
        [theme.breakpoints.between("sm", "md")]: {
          width: "auto!important",
        },
      },
    },
    DescSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      margin: "15px 10px 15px 10px",
      border: "1px solid",
      borderColor: `${theme.globals.colors.primary}54!important`,
      "& > textarea": {
        direction: "rtl",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "15px 2px 5px 2px",
      },
    },
    PartyGrid: {
      padding: "0 15px",
    },

    "& .sectionGrid": {
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #C8C8C8",
      paddingLeft: "0px",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0px",
        borderRight: "0px solid #C8C8C8",
      },
    },
    "& .PartyBox": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
      overflowY: "auto",
      maxHeight: "400px",
      "& >div:first-child": {
        borderTop: "0.5px dashed #DCDCDC",
      },
    },
    "& .emailOrMobileSpan": {
      color: "#d32f2f",
      fontSize: theme.globals.fontSize.xs,
    },

    "& .userByMobile": {
      minWidth: "50px!important",
      width: "100%",

      "& .MuiButton-root ": {
        minWidth: "50px!important",
      },
    },
    "& .CheckIcon": {
      minHeight: "50px!important",
      minWidth: "50px!important",
      border: "1px solid #ccc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      fontSize: theme.globals.fontSize.xs + 2,
      color: "green",
    },

    "& .sectionThrdGrid": {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0px 0 0 ",
        width: "100%",
      },
    },

    "& .sGrid": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
    "& .sectionParty": {
      display: "flex",
      flexDirection: "row",
      minWidth: "100%",
      backgroundColor: "#f5f6fa",
      justifyContent: "space-between",
      padding: "8px 20px",
      borderRadius: "4px",
      maxHeight: "60px",
      "& svg": {
        color: `${theme.globals.colors.primary}54`,
        width: "38px",
        height: "41px",
        margin: "0 0px 0 0px",
        padding: "6px",
        borderRadius: "5px",
        cursor: "pointer",
      },
    },
    "& .eventContainerEdit": {
      backgroundColor: "#fff",
      padding: "16px 10px 16px",
      borderTop: "1px solid #ccc",
      [theme.breakpoints.down("sm")]: {
        marginTop: "26px",
        marginRight: theme.direction === "rtl" ? "auto" : "0",
        marginLeft: theme.direction === "rtl" ? "0" : "auto",
        width: "100%",
        padding: "16px 0px 16px",
      },
    },

    "& .ReccuringContainer": {
      borderRadius: "16px",
      marginTop: "10px",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: " 110px 1fr",
      "& > div": {
        "& > div": {
          "&:before": {
            borderBottomColor: `${theme.globals.colors.primary}54!important`,
          },
        },
      },
      "& .MuiChip-root": {
        width: "90px",
        border: "none",
        backgroundColor: "#fff!important",
      },
      "& .MuiChip-label": {
        padding: "0!important",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 0px 10px",
      },
    },
    "& .numberFeild": {
      "& .MuiAutocomplete-root": {
        borderBottom: "1px solid",
        borderBottomColor: `${theme.globals.colors.primary}54!important`,
      },
      "& .MuiInput-root": {
        width: "100%!important",
      },
      [theme.breakpoints.between("600", "900")]: {
        width: "76%",
      },
    },
    "& .multipleBox": {
      borderBottom: "1px solid",
      borderBottomColor: `${theme.globals.colors.primary}54!important`,
      width: "100%",
      "& .MuiInput-root": {
        width: "100%!important",
      },
    },
    "& .multipleBoxRank": {
      borderBottom: "1px solid",
      borderBottomColor: `${theme.globals.colors.primary}54!important`,
      minWidth: "100%",
      "& .MuiInput-root": {
        width: "100%!important",
      },
      [theme.breakpoints.between("600", "900")]: {
        width: "100%",
      },
      "& .MuiAutocomplete-popper": {
        direction: "ltr",
      },
    },
    "& .ParticipantsGrid": {
      display: "flex",
      flexDirection: "row",
      margin: "15px 0",
      padding: "0 30px",
      alignItems: "center",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 10px 20px",
        padding: "0 0 10px!important",
        borderBottom: "1px dashed #ddd",
      },

      "& .RecurringNote": {
        color: "red",
        fontSize: theme.globals.fontSize.s,
        whiteSpace: "nowrap",
      },
    },
    "& .ParticipantsSection": {
      display: "flex",
      flexDirection: "row",
      margin: "15px 0",
      padding: "0 20px",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10px!important",
      },

      "& .RecurringNote": {
        color: "red",
        fontSize: theme.globals.fontSize.s,

        [theme.breakpoints.down("sm")]: {
          fontSize: theme.globals.fontSize.xs,
        },
        [theme.breakpoints.up("md")]: {
          whiteSpace: "nowrap",
        },
      },
    },
    "& .badgeBoxRead": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "10px",
    },

    "& .SubNum": {
      color: `${theme.globals.colors.primary}!important`,
      fontSize: `${theme.globals.fontSize.lg}px!important`,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 17px",
      height: "27px",
      width: "27px",
      textAlign: "center",
    },
    "& .titleFld": {
      color: `${theme.globals.colors.primary}!important`,
      fontSize: `${theme.globals.fontSize.s}px!important`,
      marginRight: "10px",
      width: "110px",
      fontWeight: "400!important",
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.globals.fontSize.s - 2}px!important`,
        width: "154px",
      },
    },

    "& .titleFldDisable": {
      fontSize: `${theme.globals.fontSize.s - 2}px!important`,

      color: "rgb(71, 76, 86)",

      minWidth: "110px",
      fontWeight: "600!important",
      marginLeft: "10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.globals.fontSize.s - 2}px!important`,
        width: "119px",
      },
    },

    "& .descriptiontitleFld": {
      fontSize: `${theme.globals.fontSize.s}px!important`,
      marginRight: "10px",
      width: "110px",
      fontWeight: "400!important",
    },
    "& .typeFld": {
      color: "#888e9c!important",
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
      marginRight: "10px",
      width: "110px",
      fontWeight: "400!important",
    },
    "& .titleFld2": {
      color: theme.globals.colors.primaryPlus,
      fontSize: `${theme.globals.fontSize.s}px!important`,
      width: "105px",
      fontWeight: "400!important",
      borderBottom: "1px solid #c4c4c4",
    },

    "& .DescFld": {
      color: ` ${theme.globals.colors.primary}!important`,
      fontSize: `${theme.globals.fontSize.s}px!important`,
      marginRight: "10px",
      width: "105px",
      whiteSpace: "nowrap",
      fontWeight: "400!important",
      cursor: "pointer",
      "&:hover": {
        textShadow: "1px 1px #237CE7!important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.globals.fontSize.s - 1}px!important`,
        width: "130px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        width: "120px",
      },
    },
    " & .BoxDescFld": {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0",
      },
    },
    "& .paraTiltle": {
      color: "#393939",
      fontSize: theme.globals.fontSize.s - 1,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },

    "& .liveMeetings": {
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      width: "100%",
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.success,
        color: theme.globals.colors.success,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          animation: "ripple 1.2s infinite ease-in-out",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    },
    "& .incomingMeetings": {
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: "0 0px",
      },
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.warning,
        color: theme.globals.colors.warning,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    },
    "& .finishedMeetings": {
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      width: "100%",
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.danger,
        color: theme.globals.colors.danger,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    },
    "& .unavailableMeetings": {
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      width: "100%",
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.textDarkGrey,
        color: theme.globals.colors.textDarkGrey,
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "1px solid currentColor",
          content: '""',
        },
      },
    },
    "& .MainTitle": {
      color: " #1F2945",
      fontSize: theme.globals.fontSize.L,
      fontWeight: "bold",
      margin: "0 10px",
    },
    "& .MainTitleEdit": {
      color: " #1F2945",
      fontSize: theme.globals.fontSize.XL,
      borderBottom: "1px solid #d0d0d0",

      "& input": {
        height: 26,
        fontWeight: "bold!important",
        fontSize: theme.globals.fontSize.s + 1,
        color: `${theme.globals.colors.textDark}!important`,
        padding: "0 !important",

        [theme.breakpoints.down("475")]: {
          fontSize: theme.globals.fontSize.xs,
        },
      },
    },
    "& .SubTitle": {
      color: "#7C7C7C",
      fontSize: theme.globals.fontSize.s,
      margin: "4px 0 10px",
    },

    "& RecurringNote": {
      color: "red",
      fontSize: theme.globals.fontSize.s,
      whiteSpace: "nowrap",
    },
    "& .subSection": {
      display: "flex",
      flexDirection: "row",
      margin: "15px 0",
      padding: "0 20px 0 0",
      alignItems: "center",
    },

    "& .PartyGrid": {
      padding: "0px",
      margin: "0 0px 0 0 ",

      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0px",
        paddingRight: "0px!important",
      },
    },
    "& .openParty": {
      maxHeight: "164px",
      overflowY: "auto",
    },
    "& .openPartyContainer": {
      display: "flex",
      margin: "0 30px",
      [theme.breakpoints.down("sm")]: {
        margin: "0 8px",
      },
    },
    "& .openPartyGrid": {
      paddingRight: "8px!important",

      paddingTop: "8px!important",
      "& .sectionParty": {
        display: "flex",
        padding: "8px",
        minWidth: "100%",
        maxHeight: "60px",
        borderRadius: "4px",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        border: "1px solid",
        borderColor: `${theme.globals.colors.primary}54!important`,
      },
      "& .sectionPartyBox": {
        display: "none!important",
      },
    },
    "& .addpartyGrid": {
      paddingLeft: "20px",
      margin: "0 0px 0 0 ",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10px!important",
      },
      "& .MuiOutlinedInput-root": {
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "8px!important",
        },
      },
    },
    "& .PartyThrdGrid": {
      paddingLeft: "20px",
    },
    "& .PartyName": {
      fontSize: theme.globals.fontSize.xs + 1,
      color: "#1F2945",
      display: "flex",
      alignItems: "center",
    },
    "& .PartyMail": {
      fontSize: theme.globals.fontSize.xs + 1,
      color: "#1F2945",
    },
    "& .PartyDetails ": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      [theme.breakpoints.between("351", "400")]: {
        maxWidth: "70%",
      },
      [theme.breakpoints.between("401", "475")]: {
        maxWidth: "80%",
      },
    },
    "& .ReminderIcon": {
      color: `${theme.globals.colors.primary}!important`,
      margin: "0 3px 0 3px!important",
      padding: "8px 0 2px!important",
      cursor: "pointer",
      width: "20px!important",
    },
    "& .UserIcon": { color: `theme.globals.colors.bgGreen!important` },
    "& .isModeratorIcon": {
      color: `${theme.globals.colors.primary}!important`,
      width: "15px!important",
      backgroundColor: "white!important",
      padding: "0px!important",
      height: "15px!important",
      margin: "0 3px 0 0 !important",
    },
    "& .PartyDesc": {
      fontSize: theme.globals.fontSize.xs - 1,
      color: "#19BE96",
    },

    "& .partyContainerDisable": {
      display: "flex",
      backgroundColor: "#fff",
      padding: "10px 0px",
      [theme.breakpoints.down("sm")]: {
        width: "91%",
        marginTop: "10px",
        marginRight: theme.direction === "rtl" ? "auto" : "0",
        marginLeft: theme.direction === "rtl" ? "0" : "auto",
      },
    },
    "& form": {
      height: "100%",
    },
    "& .checked": {
      color: theme.globals.colors.primary,
    },
    "& .TagWithXImg": {
      width: "24px",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        width: "17px",
        marginInlineStart: "4px",
      },
    },

    "& .edit": {
      color: "#DEAF52",
    },
    "& .add": {
      color: theme.globals.colors.primary,
    },

    "& .image": {
      width: "80%",
      margin: "auto",
    },

    "& .title": {
      height: 40,
      fontSize: theme.globals.fontSize.s + 4,
      fontWeight: 600,
      position: "relative",
      paddingLeft: theme.spacing(2),
    },
    "& .MuiChip-label": {
      display: "flex",
      paddingInlineEnd: "12px",
    },
    "& .MuiChip-root": {
      backgroundColor: theme.globals.colors.secondary,
      color: theme.globals.colors.texrDark,

      padding: "8px",
      border: "none",
    },
    "& .css-1s2u09g-control , .css-1pahdxg-control": {
      border: "none!important",
      boxShadow: "none!important",
      borderRadius: 10,
      backgroundColor: "inherit!important",

      minHeight: "26px!important",
      fontSize: "14px",
    },
    "& .css-17adf03-Sa": {
      padding: "0 8px!important",
    },
    "& .css-tlfecz-indicatorContainer": {
      padding: "0 8px!important",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 8,
      color: theme.globals.colors.texrDark,
      padding: "0!important",
      flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
    },
    "& .MuiInputBase-multiline": {
      minHeight: 48,
      height: "auto",
      border: "0.5px solid #a4a4a4",
      padding: "10px",
    },
    "& .MuiAutocomplete-input": {
      padding: "0",
      height: "100%",
      minWidth: "70px",
    },
    "& .MuiAutocomplete-inputRoot": {
      height: "100%",
    },
    "& .textArea": {
      height: "30px",
    },
    " & .MuiSwitch-root ": {
      padding: 8,
      "& .MuiSwitch-track": {
        borderRadius: 22 / 2,
        backgroundColor: "#afafaf",
        "&:before, &:after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: 16,
          height: 16,
        },
      },
      "&:before": {
        left: 12,
      },
      "&:after": {
        right: 12,
      },
      "& .MuiSwitch-thumb": {
        boxShadow:
          "0px 0px 0px 2px rgb(0 0 0 / 7%), 0px 0px 0px 0px rgb(0 0 0 / 3%), 0px 1px 0px 0px rgb(0 0 0 / 0%)!important",
        width: 16,
        height: 16,
        margin: "1px 0",
      },
    },
    "& .date-section": {
      flex: "auto",
      padding: theme.spacing(0, 2),
      backgroundColor: theme.globals.colors.secondary,
      borderRadius: 16,
      marginTop: 8,
      "& svg": {
        fontSize: theme.globals.fontSize.xs * 2,
        color: theme.globals.colors.textGrey,
      },
      "& .MuiFormControl-root ": {
        width: "100%",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .main-event": { marginInlineEnd: "8px", color: "gold" },
    },
    "& .viewParticipantsBox": {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      gap: "5px",
      "& svg": {
        color: "#fff",
      },
    },
    "& .SubmitPartyBtn": {
      color: theme.globals.colors.primary,
    },
    "& .viewAddParticipants": {
      padding: "0 10px",
      backgroundColor: `${theme.globals.colors.primary}!important`,
      borderRadius: "10px",
      height: "43px",
      color: "#fff",
    },
    "& .viewCancelParticipants": {
      padding: "0 10px",
      backgroundColor: " #FC2E53!important",
      borderRadius: "10px",
      height: "43px",
    },
    "& .viewSubmitParticipants": {
      padding: "0 10px",
      color: `${theme.globals.colors.bgGreen}!important`,
      borderRadius: "0px",
      height: "43px",
      position: "absolute",
      right: "3px",
      top: "3px",
      gap: "5px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .addPartyBox": {
      display: "flex",
      position: "relative",
      width: "100%",
      padding: "0 10px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
  },
  partyContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",

    width: "35%",
    paddingInlineEnd: "30px",
    [theme.breakpoints.between("600", "960")]: {
      width: "100%",
      paddingInlineEnd: "20px",
      paddingInlineStart: "20px",
    },
    [theme.breakpoints.down("600")]: {
      paddingInlineEnd: "0px",
      width: "100%",
    },
  },
  partyFeilds: {
    width: "100%",
    margin: "0 auto 20px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      "& button": {
        width: "fit-content!important",
      },
    },
    "& .MuiInputBase-root": {
      backgroundColor: "inherit!important",
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
    fontSize: "22px!important",
    marginInlineStart: "5px!important",
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
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  searchContact: {
    maxWidth: "50%",
    minWidth: "118px !important",
    margin: "0 10px!important",
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  titleButtonCancel: {
    maxWidth: "50%",
    minWidth: "118px !important",
    "&:hover": {
      backgroundColor: `${theme.globals.colors.primary}!important`,
      color: "#fff",
    },
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

  loaderPhraseBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.globals.colors.primary,
    width: "100%",
    position: "absolute",
    bottom: "-2px",
    [theme.breakpoints.down("900")]: {
      bottom: "-94px",
      backgroundColor: "#fff",
    },
    [theme.breakpoints.down("600")]: {
      bottom: "68px",
      justifyContent: "flex-end",
      paddingInlineEnd: "50px",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("470")]: {
      bottom: "53px",
      backgroundColor: "transparent",
    },
  },
  clickHere: {
    color: theme.globals.colors.primary,
    whiteSpace: "nowrap",
  },

  dotPulse: {
    position: "relative",
    left: "-9987px",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: theme.globals.colors.primary,
    color: theme.globals.colors.textWhite,
    boxShadow: "9999px 0 0 -5px",
    animation: "$dotPulse 1s infinite linear",
    animationDelay: "0.25s",
    "&:before": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: theme.globals.colors.textWhite,
      color: theme.globals.colors.textWhite,
      boxShadow: "9984px 0 0 -5px",
      animation: "$dotPulseBefore 1s infinite linear",
      animationDelay: "0s",
    },
    "&:after": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: theme.globals.colors.textWhite,
      color: theme.globals.colors.textWhite,
      boxShadow: "10014px 0 0 -5px",
      animation: "$dotPulseAfter 1s infinite linear",
      animationDelay: "0.5s",
    },
  },
  "@keyframes dotPulseBefore": {
    "0%": {
      boxShadow: "9984px 0 0 -5px",
    },

    "30%": {
      boxShadow: "9984px 0 0 2px",
    },

    "60%": {
      boxShadow: "9984px 0 0 -5px",
    },
    "100%": {
      boxShadow: "9984px 0 0 -5px",
    },
  },

  "@keyframes dotPulse": {
    "0%": {
      boxShadow: "9999px 0 0 -5px",
    },

    "30%": {
      boxShadow: "9999px 0 0 2px",
    },

    "60%": {
      boxShadow: "9999px 0 0 -5px",
    },
    "100%": {
      boxShadow: "9999px 0 0 -5px",
    },
  },

  "@keyframes dotPulseAfter": {
    "0%": {
      boxShadow: "10014px 0 0 -5px",
    },

    "30%": {
      boxShadow: "10014px 0 0 2px",
    },

    "60%": {
      boxShadow: "10014px 0 0 -5px",
    },
    "100%": {
      boxShadow: "10014px 0 0 -5px",
    },
  },
}));
