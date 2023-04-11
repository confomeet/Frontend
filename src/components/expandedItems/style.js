import { makeStyles } from "@mui/styles";

const style = makeStyles((theme) => ({
  expandedCard: {
    borderRadius: 10,
    marginBottom: 16,
    width: "95%",
    position: "relative",
    cursor: "pointer",
    "& .MuiCardHeader-title": {
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
      lineHeight: "21px!important",
    },
    "& .MuiListItem-root": {
      width: "100%",
      height: "30px",
      margin: 0,
      "& .MuiListItemText-primary": {
        fontSize: theme.globals.fontSize.s - 2,
      },
      "& .MuiListItemIcon-root": {
        minWidth: "30px",
        width: "30px",
        height: "auto",
        fontSize: "inherit",
        backgroundColor: "transparent",
      },
      "& .MuiListItemText-root ": {
        margin: 0,
      },
    },
    "& .MuiCardHeader-root": {
      paddingBottom: 0,
    },
    "& .MuiCollapse-root": {
      margin: 0,
    },
    "& .MuiCardActions-root": {
      padding: "0 16px 0",
      "& .send-invite": {
        color: theme.globals.colors.warning,
        fontSize: theme.globals.fontSize.s - 4,
        padding: "4px 0",

        "& .MuiButton-startIcon": {
          fontSize: theme.globals.fontSize.s - 2,
          marginRight: 4,
          marginLeft: 0,
        },
      },
    },
    "& .MuiCardHeader-subheader": {
      marginRight: -8,
      "& button": {
        padding: 4,
        marginRight: 0,
      },
      "& .MuiTypography-body2 ": {
        color: theme.globals.colors.textDark,
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
    },
    "& .MuiCardHeader-action": {
      marginTop: 8,
      marginRight: 0,
      position: "absolute",
      right: 18,
    },
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
    },
  },
  miniExpandedCard: {
    borderRadius: 10,
    marginBottom: 16,
    position: "relative",
    cursor: "pointer",
    borderBottom: `1px solid ${theme.globals.colors.borderGrey}`,

    "& .MuiCardHeader-title": {
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
      lineHeight: "21px!important",
    },
    "& .MuiListItem-root": {
      width: "100%",
      height: "30px",
      margin: 0,
      "& .MuiListItemText-primary": {
        fontSize: theme.globals.fontSize.s - 2,
      },
      "& .MuiListItemIcon-root": {
        minWidth: "30px",
        width: "30px",
        height: "auto",
        fontSize: "inherit",
        backgroundColor: "transparent",
      },
      "& .MuiListItemText-root ": {
        margin: 0,
      },
    },
    "& .MuiCardHeader-root": {
      paddingBottom: 0,
    },
    "& .MuiCollapse-root": {
      margin: 0,
    },
    "& .MuiCardActions-root": {
      padding: "0 16px 0",
      "& .send-invite": {
        color: theme.globals.colors.warning,
        fontSize: theme.globals.fontSize.s - 4,
        padding: "4px 0",

        "& .MuiButton-startIcon": {
          fontSize: theme.globals.fontSize.s - 2,
          marginRight: 4,
          marginLeft: 0,
        },
      },
    },
    "& .MuiCardHeader-subheader": {
      marginRight: -8,
      "& button": {
        padding: 4,
        marginRight: 0,
      },
      "& .MuiTypography-body2 ": {
        color: theme.globals.colors.textDark,
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
    },
    "& .MuiCardHeader-action": {
      marginTop: 8,
      marginRight: 0,
      position: "absolute",
      right: 18,
    },
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
    },
  },
  subEventsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "10px",
    backgroundColor: theme.palette.background.default,
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
    },
    "& .badgeFullName": {
      fontWeight: "bold",
      fontSize: theme.globals.fontSize.s - 1,
    },
    "& .badgeJobName": {
      color: "#808080bf",
      fontSize: theme.globals.fontSize.s - 2,
    },
    "& .popup": {
      backgroundColor: "#f5f6fa",
      width: "35px",
      height: "35px",
      "& svg": {
        color: "#7c7c7c82",
      },
    },
    "& .MuiList-root": {
      padding: " 0 10px 0",
    },
  },
  appEventsContainer: {
    backgroundColor: "#fff",
    marginTop: "10px",
    borderRadius: "5px",
    padding: "10px",
  },
  miniEventsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: "10px",
    borderBottom: "1px solid #dedfe2",

    [theme.breakpoints.up("600")]: {
      display: "none",
    },
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
      margin: "7px 5px 0 0",
    },
    "& .badgeFullName": {
      fontWeight: "bold",
      fontSize: theme.globals.fontSize.s - 1,
      color: "#000000cf",
    },
    "& p": {
      fontSize: theme.globals.fontSize.s - 3,
      color: "#a7a7a7",
    },
    "& .badgeJobName": {
      color: "#808080bf",
      fontSize: theme.globals.fontSize.s - 2,
    },
    "& .popup": {
      backgroundColor: "#f5f6fa",
      width: "35px",
      height: "35px",
      "& svg": {
        color: "#7c7c7c82",
      },
    },
    "& .MuiList-root": {
      padding: " 0 10px 0",
    },
  },
  partyAccordTypo: {
    fontWeight: "bold!important",
    fontSize: `${theme.globals.fontSize.s - 1}px!important`,
  },
  partyAccordNum: {
    fontWeight: "bold!important",
    padding: "0 20px!important",
  },
  partyAccordIcon: {
    color: "#ED6262",
    fontSize: theme.globals.fontSize.s,
    backgroundColor: "#f5f6fa",
    borderRadius: "50%",
  },
  partyAccordion: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    borderRadius: "7px",
  },
  subPartyAccordion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& button": {
      padding: "8px 4px 8px 4px",
    },
    "& svg": {
      width: "30px",
      height: "30px",
    },
  },
  popup: {
    "& button": {
      backgroundColor: "#f5f6fa!important",
      width: "35px!important",
      minWidth: "35px!important",
      height: "35px!important",
      border: "none!important",
      padding: 0,
      "& svg": {
        color: "#7c7c7c82",
        fontSize: theme.globals.fontSize.s,
        width: "35px",
        height: "19px",
      },
    },
  },
  partyList: {
    "& svg": {
      backgroundColor: "#f5f6fa!important",
      width: "35px",
      height: "35px",
      padding: "7px",
      borderRadius: "5px",
    },
    "& span": {
      fontSize: theme.globals.fontSize.s - 2,
    },
    "& li": {
      padding: "4px 0 0 ",
    },
  },
  partyPhone: {
    minWidth: "45px!important",

    "& svg": {
      color: "green",
    },
  },
  partyMail: {
    minWidth: "45px!important",
    "& svg": {
      color: "orange",
    },
  },
  partyMailText: {
    width: "90%",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  partyChat: {
    "& svg": {
      color: theme.globals.colors.primary,
    },
  },
  partyInfo: {
    borderBottom: "1px dashed #ddd",
    padding: "5px 0px 10px",
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
    },
    "& h2": {
      padding: "0 5px!important",
      fontWeight: "bold",
      fontSize: theme.globals.fontSize.s - 1,
    },
    "& p": {
      fontSize: theme.globals.fontSize.s - 2,
      color: "#7C7C7C!important",
    },
  },
  closeBox: {
    width: "47px",
    height: "43px",
    borderRadius: "50%",
    marginTop: "-170px",
    backgroundColor: "#fff",
    zIndex: "27",
    position: "fixed",
    marginBottom: "10px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    textAlign: "center",
    borderBottom: "4px solid #7f7f7f",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "4px solid #7f7f7f",
    borderLeft: "4px solid #7f7f7f",
    "& svg": {
      color: "#FC2E53!important",
      fontSize: theme.globals.fontSize.xs * 2,
    },
  },
}));
export default style;
