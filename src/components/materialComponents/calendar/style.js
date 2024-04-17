import { makeStyles } from "@mui/styles";
const calendarStyle = makeStyles((theme, isRTL) => ({
  calendar: {
    boxShadow: "none!important",
    [theme.breakpoints.down("600")]: {
      margin: "0px!important",
    },
    "& .Cell-dayOfWeek": {
      fontSize: "15px!important",

      margin: "10px!important",
      padding: "8px!important",
      paddingBottom: "8px!important",
      [theme.breakpoints.down("600")]: {
        height: 50,
        margin: "0px!important",
      },
      [theme.breakpoints.down("400")]: {
        fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
        padding: "5px 0!important",
      },
    },
    "& .MuiTableCell-sizeMedium": {
      borderRight: "1px solid #e9e9e9!important",
      borderLeft: "1px solid #e9e9e9!important",
      borderTop: "1px solid #e9e9e9!important",
      borderBottom: "1px solid #e9e9e9!important",
      [theme.breakpoints.down("600")]: {
        height: "50px!important",
      },
    },
    "& .MuiTypography-subtitle ": {
      fontSize: theme.globals.fontSize.xs,
      whiteSpace: "nowrap",
    },
    "& .MuiTable-root": {
      [theme.breakpoints.down("600")]: {
        minWidth: "270px !important",
      },
    },

    "& tr": {
      "& td:firser-child": {
        borderLeft: "none",
      },
    },
    "& .MuiToolbar-root": {
      backgroundColor: "#fff",
      borderRadius: "15px 15px 0 0",
      borderBottom: "none!important",
      direction: "rtl",
      padding: "0",
      zIndex: "5",
      width: "fit-content",
      marginRight: "auto",
      [theme.breakpoints.down("600")]: {
        zIndex: "0",
      },
    },
    "& .MainLayout-container": {
      "& > div": {
        "& .MainLayout-flexRow .MainLayout-inlineFlex .MainLayout-relativeContainer .Container-container":
          {
            "& .Appointment-appointment": {
              minWidth: "fit-content",
            },

            "& > div": {
              "& .HorizontalAppointment-content": {
                padding: "0",
                height: "100%",
              },
              "& .Appointment-appointment": {
                width: "100%",
                minWidth: "100%",
                border: "none!important",
                "& .MuiBox-root": {
                  fontSize: theme.globals.fontSize.s - 2,
                  textAlign: "center",
                  textTransform: "capitalize",
                  color: "#000",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  "& svg": {
                    border: "1px solid ",
                    borderColor: `${theme.palette.primary.main}!important`,
                    borderRadius: "50%",
                    padding: "3px",
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    width: "22px",
                    height: "22px",
                    margin: "0 10px 0 0px",
                  },
                },
              },
              "& > div": {
                "& .Appointment-appointment": {
                  backgroundColor: "#E9F2FD",
                  color: "#000",
                  borderLeft: "2px solid #a7803d",
                  borderRadius: 0,
                  "& .MuiBox-root": {
                    fontWeight: 700,
                    fontSize: theme.globals.fontSize.s,
                    textTransform: "capitalize",
                    color: "#000",
                  },
                },
              },
            },
          },
      },
    },
    "& .MuiPaper-root": {
      height: "auto",
    },
    "& .Demo-addButton": {
      float: "right",

      textTransform: "capitalize",
    },
    "& .MuiDrawer-paper": {
      left: "auto",
      right: 18,
      top: 64,
      bottom: 0,
    },
  },
  DayWeekCalendar: {
    borderRadius: "15px!important",
    boxShadow: "none!important",
    "& .Cell-dayOfWeek": {
      height: 35,
      [theme.breakpoints.down("600")]: {
        height: 20,
      },
      [theme.breakpoints.down("400")]: {
        fontSize: `${theme.globals.fontSize.xs - 1}px!important`,
        padding: "5px 0!important",
      },
    },

    "& .MuiTypography-subtitle ": {
      fontSize: theme.globals.fontSize.xs,
      whiteSpace: "nowrap",
    },
    "& .MuiTable-root": {
      [theme.breakpoints.down("600")]: {},
    },
    "& .MuiTableCell-root.Cell-cell": {
      maxWidth: "30px",
      width: "30px!important",
    },
    "& .MuiTable-root.Table-table": {
      minWidth: "230px",
    },
    "& .Label-emptyLabel": {
      height: "0px",
    },
    "& .Layout-timeScaleContainer": {
      maxWidth: "50px!important",
    },
    "& .Layout-ticks": {
      width: "0!important",
    },
    "& .Label-text": {
      [theme.breakpoints.down("600")]: {
        fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
      },
    },
    "& .Layout-timeScaleContainer": {
      maxWidth: "35px!important",
    },
    "& tr": {
      "& td:firser-child": {
        borderLeft: "none",
      },
    },
    "& .MuiToolbar-root": {
      backgroundColor: "#fff",
      borderRadius: "15px 15px 0 0",
      borderBottom: `1px solid ${theme.globals.colors.borderLight}`,
      direction: "rtl",
    },
    "& .MainLayout-container": {
      "& > div": {
        "& .MainLayout-flexRow .MainLayout-inlineFlex .MainLayout-relativeContainer .Container-container":
          {
            "& .Appointment-appointment": {
              minWidth: "fit-content",
            },

            "& > div": {
              "& .HorizontalAppointment-content": {
                padding: "0",
                height: "100%",
              },
              "& .Appointment-appointment": {
                width: "100%",
                minWidth: "100%",
                border: "none!important",
                "& .MuiBox-root": {
                  fontSize: theme.globals.fontSize.s - 2,
                  textAlign: "center",
                  textTransform: "capitalize",
                  color: "#000",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  "& svg": {
                    border: "1px solid ",
                    borderColor: `${theme.palette.primary.main}!important`,
                    borderRadius: "50%",
                    padding: "3px",
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    width: "22px",
                    height: "22px",
                    margin: "0 10px 0 0px",
                  },
                },
              },
              "& > div": {
                "& .Appointment-appointment": {
                  backgroundColor: "#E9F2FD",
                  color: "#000",
                  borderLeft: "2px solid #a7803d",
                  borderRadius: 0,
                  "& .MuiBox-root": {
                    fontWeight: 700,
                    fontSize: theme.globals.fontSize.s,
                    textTransform: "capitalize",
                    color: "#000",
                  },
                },
              },
            },
          },
      },
    },
    "& .MuiPaper-root": {
      height: "auto",
    },
    "& .Demo-addButton": {
      float: "right",

      textTransform: "capitalize",
    },
    "& .MuiDrawer-paper": {
      left: "auto",
      right: 18,
      top: 64,
      bottom: 0,
    },
  },
  reminderBox: {
    "& svg": {
      backgroundColor: "transparent!important",
      border: "none!important",
      color: "#a7c5ff!important",
      margin: "0 !important",
    },
  },
  EventTitle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",

    fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
  },
  EventTitleBox: {
    backgroundColor: "#F4F5F9",
    borderRadius: "5px 5px 0 0",
    padding: "0px 10px 0",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    height: "44px",
    fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    fontWeight: "bold",
    alignItems: "center",
    display: "flex",
  },
  EventDetails: {
    marginBottom: "4px",
    "& .MuiBox-root": {
      justifyContent: "space-between",
    },
    "& span": {
      margin: "10px 0 !important",
    },
    "& button": {
      backgroundColor: "#ecf0f8",
      justifyContent: "center",
      display: "flex",
      alignItems: "center",
      padding: "0px 0",
      marginBottom: "10px",
      minWidth: "75px",
      "& svg": {
        fontWeight: "bold",
        fontSize: `${theme.globals.fontSize.s + 4}px!important`,
      },
    },
  },
  EventInfo: {
    padding: "0 10px",
  },
  calendarCard: {
    width: "98%",
    margin: "30px auto",
    padding: "15px 5px 30px",
    boxShadow: " 0px 2px 23px rgb(181 181 181 / 17%)",
    "& svg": {
      color: `${theme.palette.primary.main}!important`,
    },
    "& .MuiDivider-root": {
      width: "13px",
      height: "4px",
      backgroundColor: `${theme.palette.primary.main}!important`,
      marginRight: "5px",
    },
    [theme.breakpoints.up("600")]: {
      display: "none",
    },
  },
  isTopic: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px",
  },
  statusBox: {
    display: "flex",
    height: "24px",
    alignItems: "center",
    padding: "2px 5px 2px 0",
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "5px",
    backgroundColor: "#F5F6FA",
    borderRadius: "20px 0 0 20px",
  },
  statusBoxCircul: {
    display: "flex",
    height: "20px",
    alignItems: "center",
    padding: "2px 5px 2px 0",
    width: "94%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "5px!important",
    backgroundColor: "#F5F6FA",
    borderRadius: "20px",
  },
  isChunckBox: {
    backgroundColor: "#f7f0e9",
    height: "24px",

    borderRight: "3px solid",
    borderColor: "#c7b8aa!important",
  },
  ChunckBoxBg: {
    width: " 100%",
    backgroundColor: "#f7f0e9",
    height: "24px",
  },
  eventsGroup: {
    color: `${theme.palette.primary.main}!important`,
    width: "90%",
    margin: "auto",
    borderRadius: "20px",
    height: "25px!important",
    marginBottom: "5px!important",
    "& span": {
      fontSize: "12px",
    },
  },
  AppointBtn: {
    borderRadius: "20px!important",
    border: "1px solid !important",
    borderColor: `${theme.palette.primary.main}!important`,
    width: "100%",
  },
}));
export default calendarStyle;
