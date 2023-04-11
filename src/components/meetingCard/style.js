import { makeStyles } from "@mui/styles";
export const cardStyle = makeStyles((theme, isRTL) => ({
  card: {
    width: 324,
    height: 265,
    // borderRadius: "14px!important",

    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // overflow: "visible!important",
    // cursor: "pointer",
    // marginTop: "15px",
    direction: theme.direction === "rtl" ? "ltr" : "ltr",
    "& .partyAvatarBox": {
      "& .MuiAvatar-circular": {
        height: "35px!important",
        width: "35px!important",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        color: "#ccc",
        margin: "0 -2px!important",
        fontSize: theme.globals.fontSize.s,
      },
    },
    "& .MuiButton-startIcon": {
      marginRight: "8px!important",
      marginLeft: "8px!important",
    },

    [theme.breakpoints.down("400")]: {
      width: "280px",
      minWidth: "280px",
    },
    // "&:before": {
    //   position: "absolute",
    //   content: '""',
    //   width: "80%",
    //   height: 3,
    //   backgroundColor: theme.globals.colors.primary,
    //   left: 0,
    //   right: 0,
    //   margin: "auto",
    // },
    "& .order": {
      position: "absolute",
      left: 0,
      right: 0,
      margin: "auto",
      width: 42,
      height: 42,
      borderRadius: "50%",
      border: "5px solid #f5f6fa",
      top: -20,
      backgroundColor: "#fff",
    },
    "& .order.wpxhite": {
      color: theme.globals.colors.textDark,

      backgroundColor: theme.palette.background.default,
    },
    "& .order.primary": {
      backgroundColor: theme.globals.colors.primary,
      color: theme.globals.colors.textWhite,
    },
    "& .ListBox": {
      maxHeight: "390px!important",
      "& .MuiList-root": {
        maxHeight: "390px!important",
      },
      "& .ListGroup": {
        minWidth: "215px!important",
        borderRight: "1px solid #e0e0e0!important",
      },
      "& .MuiListItem-root": {
        backgroundColor: "#e9f2fd!important",
        borderRadius: "10px!important",
        margin: "0 10px!important",
        width: "200px!important",
      },
    },
    "& .participants": {
      // width: "100%",
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        fontSize: theme.globals.fontSize.xs + 1,
        backgroundColor: "#FFF",
        color: "grey",
        border: "1px solid #ccc",
      },
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.success,
        color: "#44b700",
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
    "& .isModerator": {
      // width: "100%",
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        fontSize: theme.globals.fontSize.xs + 1,
        backgroundColor: "#F2F5FC",
        color: "grey",
      },
      "& .MuiBadge-badge": {
        backgroundColor: "inherit",
        width: 32,
        height: 22,
        fontSize: theme.globals.fontSize.xs + 1,
        color: "orange!important",
        boxShadow: "none!important",
      },
    },
    "& .unActiveParticipants": {
      // width: "100%",
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        fontSize: theme.globals.fontSize.xs + 1,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        color: "grey",
        marginRight: theme.direction === "rtl" ? "0" : "-8px",
        // marginLeft: theme.direction === "rtl" ? "0" : "-8px",
      },
      "& .MuiBadge-badge": {
        backgroundColor: theme.globals.colors.textDarkGrey,
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        // "&::after": {
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "100%",
        //   borderRadius: "50%",
        //   animation: "ripple 1.2s infinite ease-in-out",
        //   border: "1px solid currentColor",
        //   content: '""',
        // },
      },
    },
    "& .header-wrap": {
      display: "flex",
      // flexDirection: "column",

      justifyContent: "space-between",
      alignItems: "center",

      // height: "110px",
      // cursor: "pointer",
      "& svg": {
        color: "#D9D9D9",
      },
      "& .MuiButtonBase-root": {
        padding: "0 8px",
        backgroundColor: "#fff",
      },
    },
    "& .MuiCardHeader-title": {
      textOverflow: "ellipsis",
      overflow: "hidden",
      // maxWidth: "255px",
      fontSize: "15.2px",

      display: "-webkit-box",

      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
      fontWeight: "bold",
      // minHeight: "70px",
      width: "100%",
    },
    "& .MuiCardHeader-subheader ": {
      // color: theme.globals.colors.textDark,
      // fontSize: "12px !important",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "312px",
    },

    "& .MuiSpeedDial-root": {
      flexDirection: "row-reverse",
      position: "relative",
      "& .MuiSpeedDial-fab": {
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "#888",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
          fontSize: theme.globals.fontSize.xs * 2,
        },
      },
      "& .MuiSpeedDial-actions": {
        position: "absolute",
        top: 30,
        right: -8,
      },
    },

    "& .status": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.success,
    },
    "& .MuiCardContent-root ": {
      padding: "12px 0 0px",
      cursor: "pointer",
      flex: "auto",
      "& .MuiBox-root": {
        marginInlineStart: "0px!important",
      },
      "& svg": {
        fontSize: theme.globals.fontSize.s,
        marginInlineEnd: theme.spacing(1),
        color: theme.globals.colors.primary,
      },
      "& .subtitleBold": {
        color: "#2D313E",
        fontSize: theme.globals.fontSize.s - 2,
        fontWeight: "400",
        fontWeight: "bold",
      },
    },
    "& .MuiCardHeader-root ": {
      flex: "auto",
      padding: 0,
      width: "100%",
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
      "& .MuiCardHeader-content": {
        width: "100%",
      },
    },
    "& .MuiCardHeader-action": {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      position: "absolute",
    },
    "& .light-btn": {
      // backgroundColor: theme.palette.background.default,
      textTransform: "capitalize",
      color: theme.globals.colors.textDark,
      "& .MuiButton-startIcon": {
        marginRight: 8,
        // marginLeft: -2,
        color: theme.globals.colors.primary,
      },
    },
    "& .primary": {
      color: theme.globals.colors.primary,
    },
    "& .delete": {
      color: theme.globals.colors.delete,
    },
    "& .disabled": {
      color: theme.globals.colors.captionText,
    },
    "& .caption": {
      fontSize: theme.globals.fontSize.xs + 2,
      color: theme.globals.colors.captionText,
    },
    "& hr": {
      // margin: "4px 16px 4px 0",
      borderColor: theme.globals.colors.borderLight,
    },
    "& .MuiTypography-subtitle ": {
      color: "#5a5a5a",
      fontSize: theme.globals.fontSize.s - 3,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      minWidth: "100px",
      fontWeight: "300",
    },

    "& .MuiTypography-subtitle1 ": {
      color: theme.globals.colors.textDark,
      fontSize: theme.globals.fontSize.s - 1,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& .MuiCardActions-root ": {
      display: "flex",
      padding: "0 4px 8px",
      // position: "absolute",
      zIndex: "2",
      bottom: "0",
      width: "100%",
      justifyContent: "center",

      [theme.breakpoints.down("400")]: {
        justifyContent: "center!important",
      },
      "& button": {
        [theme.breakpoints.down("400")]: {
          // width: "125px",
        },
      },
    },
    "& *": {
      fontFamily: theme.globals.fontFamily,
    },
    "& .card-title": {
      fontWeight: 600,
      color: theme.globals.colors.textDark,
      textTransform: "capitalize",
    },
  },
  cardSubTopic: {
    width: "100%",
    display: "-webkit-box",
    overflow: "hidden",
    fontSize: "14.2px!important",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
  },
  dateSection: {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    "& > hr": {
      width: "100%",
    },
  },
  cardActionsButtons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "baseline",
    "& button": {
      color: "#599ced!important",
      minWidth: "50px!important",
      "&:hover": {
        backgroundColor: "inherit!important",
      },
    },
  },
  preison: {
    cursor: "pointer",
    "& svg": {
      color: "#808080bf",
      margin: "0px 14px 0 14px",
    },
  },
  ListBox: {
    // flexDirection: isRTL ? "row" : "row-reverse",
    // maxHeight: "418px!important",
    // justifyContent: "center",
    // alignItems: "center",
    "& .MuiList-root": {
      // maxHeight: "368px!important",
    },
    "& .MuiTypography-subtitle ": {
      color: "#7C7C7C!important",
      // fontSize: theme.globals.fontSize.s - 3,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      fontWeight: "300",
    },
    "& .ListGroup": {
      paddingTop: "0!important",
      // borderRight: "1px solid #e0e0e0!important",
      // maxHeight: "360px!important",
    },
    "& .Scroll": {
      maxHeight: "368px!important",
      overflowY: "auto",
      borderRight: theme.direction === "rtl" ? "1px dashed #ccc!important" : "",
      borderLeft: theme.direction === "rtl" ? "" : "1px dashed #ccc!important",
    },
    "& .time": {
      margin: "0!important",
      color: "#7C7C7C",
      fontSize: theme.globals.fontSize.s,
    },
    "& .active": {
      backgroundColor: "#F5F6FA!important",
      // borderRadius: "10px!important",
      margin: "0px 15px!important",
      width: "265px!important",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      borderBottom: "1px dashed #ccc",
      paddingTop: "4px",
      paddingBottom: "4px",
      height: "40px",
    },
    "& .oneListItem": {
      // borderRadius: "10px!important",
      margin: "0px 15px!important",
      width: "265px!important",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      borderBottom: "1px dashed #ccc",
      paddingTop: "4px",
      paddingBottom: "4px",
      height: "40px",
    },
    "& .MuiTypography-root": {
      color: "#505457",
      fontWeight: "bold",
      textOverflow: "ellipsis",
      maxWidth: "230px",
      fontSize: theme.globals.fontSize.s,
      overflow: "hidden",
      whiteSpace: "nowrap",
      direction: "ltr",
      marginTop: "4px",
    },
    "& .MuiListItemText-root": {
      margin: "0",
    },
    "& .onHoverCard": {
      borderLeft: "1px dashed #ccc",
      "& .MuiCardHeader-subheader": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        // width: "312px",

        "& .MuiTypography-body2 ": {
          color: theme.globals.colors.textDark,
          fontSize: `${theme.globals.fontSize.xs}px!important`,
          textAlign: "start",
        },
      },
      "& button": {
        padding: "0!important",
      },
    },
    "& .light-btn ": {
      "& svg": {
        fontSize: `${theme.globals.fontSize.xs * 2}px!important`,
      },
    },
    "& .align-baseline": {
      alignItems: "center",
    },
  },
  calenderHeaderActionButtons: {
    top: "-45px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "0 45px",
    // marginRight: theme.direction === "rtl" ? "54%" : "45px",
    // right: "50%",
    [theme.breakpoints.down("400")]: {
      margin: "0 55px 0 0px",
    },
    "& .MuiButtonBase-root": {
      color: "#7c7c7c82",
      padding: "8px 0 0 8px",
    },
  },
  cardHeaderActionButtons: {
    // top: "-77px",
    color: "#9A9A9A",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "0 45px",
    // right: "50%",
    [theme.breakpoints.down("400")]: {
      margin: "0 55px 0 0px",
    },
    "& .MuiButtonBase-root": {
      color: "#7c7c7c82",
      padding: "8px 0 0 8px",
    },
  },
  cardMiniActionButtons: {
    color: "#9A9A9A",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // margin: "0 45px",
    // right: "50%",
    // [theme.breakpoints.down("400")]: {
    //   margin: "0 55px 0 0px",
    // },
    "& .MuiButtonBase-root": {
      color: "#7c7c7c82",
      // padding: "8px 0 0 8px",
    },
    "& button": {
      backgroundColor: " #f5f6fa",

      borderRadius: "5px",
      margin: "0 3px",
      width: "35px!important",
      height: "35px!important",
    },
  },
}));
