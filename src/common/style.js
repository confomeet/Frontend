import { makeStyles } from "@mui/styles";

const drawerStyle = makeStyles((theme) => ({
  ////////lilac2023Style

  videoHeader: {
    padding: 0,
    border: "0.6px solid #dcdcdc",
    borderTop: "none",

    justifyContent: "space-between",

    [theme.breakpoints.up("1200")]: {
      margin: "0 20px 0px",
      minHeight: "85px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "66px",
      padding: "0!important",
      marginInlineStart: "48px",
      "& button": {
        minWidth: "40px",
        padding: 0,

        "& .MuiAvatar-root": {
          width: "30px",
          height: "30px",
        },
      },
    },
    "& .language": {
      fontFamily: theme.direction === "rtl" ? "Poppins" : "Cairo",
      [theme.breakpoints.down("sm")]: {
        minWidth: "40px!important",
        padding: "0",
      },
    },
  },
  headerMainIcons: {
    display: "flex",
    "& svg": {
      color: theme.globals.colors.primary,
    },
    "& .MuiDivider-root": {
      marginTop: "12px",
      marginBottom: "12px",
    },
    "& button": {
      padding: "12px 16px!important",
      [theme.breakpoints.down("sm")]: {
        padding: "12px 8px!important",
      },
    },
  },
  headerMainIconsWithoutAuth: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      justifyContent: "center",
    },
    "& svg": {
      color: theme.globals.colors.primary,
    },
    "& .MuiDivider-root": {
      marginTop: "12px",
      marginBottom: "12px",
    },
    "& button": {
      width: "56px",
      height: "56px",
      padding: "7px 7px!important",
      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
  },
  userTypoHeader: {
    color: "#1F2945",
    paddingInlineStart: "8px",
    fontSize: `${theme.globals.fontSize.s}px!important`,
    fontWeight: "bold!important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  ////////////////////
  rootMainAppBar: {
    zIndex: "5!important",
    // height: 80,
    width: "100%!important",
    backgroundColor: `${theme.palette.background.default}7`,
    backdropFilter: "blur(20px)",
    justifyContent: "center",
    position: "relative!important",
    " & .MuiIconButton-sizeLarge svg": {
      fontSize: theme.globals.fontSize.xs * 2,
    },
    "& .logo": {
      width: "150px",
      "& > img": {
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        marginInlineEnd: "16px",
      },
      [theme.breakpoints.between("600", "1024")]: {
        width: "100px",
      },
    },
    "& .pageTitle": {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    "& .langText": {
      margin: "0 10px!important",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "transparent!important",
      position: "fixed!important",
      border: "none",
    },
  },
  rootMainAppBarWithoutAuth: {
    height: 80,
    width: "100%!important",
    // backgroundColor: `${theme.palette.background.default}`,
    backgroundColor: "#0E3663",
    backdropFilter: "blur(20px)",
    justifyContent: "start",
    "& svg": {
      color: "#fff",
      [theme.breakpoints.down("900")]: {
        color: theme.globals.colors.primary,
      },
    },
    " & .MuiIconButton-sizeLarge svg": {
      fontSize: theme.globals.fontSize.xs * 2,
    },
    "& .logo": {
      padding: theme.spacing(4),
      borderTop: `1px solid ${theme.globals.colors.borderPrimary}`,
      position: "relative",
    },
    "& .pageTitle": {
      display: "none",
    },

    "& .logo": {
      width: 140,
    },
    "& .langText": {
      margin: "0 10px!important",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "transparent!important",
      height: 0,
      border: "none",
      "& .MuiContainer-root ": {
        padding: 0,
        position: "relative",
      },

      "& .logo": {
        display: "none",
      },
    },
  },
  SubBoxHeader: {
    width: "100%!important",
    zIndex: "2",
    "& .titleMainGrid": {
      margin: "20px 0 0",
      // paddingInlineEnd: "16px!important",
      backgroundColor: "#ffffff",
      // height: 70,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .buttonBox": {
        // marginInlineEnd: "12px",
        "& button": {
          minWidth: "45px!important",
          padding: "0!important",
          margin: "0!important",
          "&:hover": {
            backgroundColor: "#F6FAFF!important",
          },
        },
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 10px!important",
      },
      "& .title:before": {
        left: 8,
      },
    },
    "& .profileMainGrid": {
      width: "100%",
      // padding: "0 16px!important",
      backgroundColor: "#ffffff",
      borderRadius: 15,
      // height: 73,
      marginBottom: "15px!important",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "45px",
        marginLeft: "auto",
        marginRight: "auto",
        // width: "95%",
        borderRadius: 10,
      },
      "& .title:before": {
        left: 8,
      },
    },
    "& .titleMainView": {
      width: "100%",
      padding: "0 16px!important",
      backgroundColor: "#ffffff",
      height: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        minHeight: "60px",
        height: "fit-content!important",
        flexWrap: "wrap!important",
        marginTop: "45px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "95%",
        borderRadius: 10,
        padding: "0!important",
      },
      "& .title:before": {
        left: 8,
      },
      "& .d-flex": {
        "& button": {
          width: "54px",
          justifyContent: "start",
          padding: "4px",
        },
      },
    },
    "& .buttonBox": {
      display: "flex",
      "& button": {
        whiteSpace: "nowrap",
        fontSize: theme.globals.fontSize.xs,
        padding: "5px 8px !important",
        height: "40px",
        "&:hover": {
          backgroundColor: "#fff",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "5px 6px !important",
          fontSize: theme.globals.fontSize.xs - 1,
        },
      },
    },
    "& .titleIconGird": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        // justifyContent: "space-evenly",
      },
      "& button": {
        borderRadius: "4px!important",
        margin: "0 4px",
      },
    },
    "& .leftArrowBack": {
      transform: " rotate(180deg)",
    },
    "& .titleIconBox": {
      cursor: "pointer",
      display: "flex",
      color: theme.globals.colors.primary,
      alignItems: "center",
      fontSize: "28px",
      height: "40px",
      minWidth: "45px",
      justifyContent: "end",
      "&:hover": {
        backgroundColor: "#F6FAFF!important",
      },
      [theme.breakpoints.down("475")]: {
        height: "40px",
        fontSize: theme.globals.fontSize.m + 2,
        borderRadius: "10px",
        margin: "0 4px!important",
        minWidth: "fit-content",
      },
    },
    "& .titleBox": {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
      justifyContent: "center",
      "& svg": {
        color: theme.globals.colors.primary,
      },
    },
    "& .titlepara": {
      padding: "0 10px",
      width: "100%",
      whiteSpace: "nowrap",
    },

    "& .titleTypography": {
      fontSize: "22px!important",
      fontWeight: "bolder!important",
      whiteSpace: "nowrap",

      [theme.breakpoints.down("475")]: {
        fontSize: `${theme.globals.fontSize.m}px!important`,
      },
    },
    "& .button": {
      height: 40,
      marginLeft: "8px!important",
      border: "none",
      color: `${theme.globals.colors.primary}!important`,
      "&:hover": {
        border: "none",
        backgroundColor: "#fff!important",
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: "4px!important",
      },
    },
    "& .back": {
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
    "& .statisticsTitleRange": {
      marginBottom: "20px",
      [theme.breakpoints.up("600")]: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  },
  notificationIcon: {
    zIndex: 1000,
  },

  SubHeaderRoot: {
    // minHeight: "70px",
    // width: "100%!important",
    display: "flex",
    alignContent: "center",
    margin: "0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "70px 8px 0",
    },
    "& .pageTitle": {
      color: theme.globals.colors.textDark,
      fontWeight: 600,
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      margin: "0 24px",
      whiteSpace: "nowrap",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.between("sm", "md")]: {
        margin: "0 24%",
      },
    },
    "& .MuiButton-startIcon": {
      marginRight: "8px!important",
      marginLeft: "8px!important",
      [theme.breakpoints.down("sm")]: {
        marginRight: "4px!important",
        marginLeft: "4px!important",
      },
    },
  },
  SubHeaderRootWithoutAuth: {
    // minHeight: "70px",
    // width: "100%!important",
    display: "flex",
    alignContent: "center",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "200px",
    },
    "& .pageTitle": {
      color: theme.globals.colors.textDark,
      fontWeight: 600,
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      margin: "0 24px",
      whiteSpace: "nowrap",

      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.between("sm", "md")]: {
        margin: "0 24%",
      },
    },
    "& .MuiButton-startIcon": {
      marginRight: "8px!important",
      marginLeft: "8px!important",
      [theme.breakpoints.down("sm")]: {
        marginRight: "4px!important",
        marginLeft: "4px!important",
      },
    },
  },
  titleHeader: {
    minWidth: "288px",
    display: "flex",
    margin: "0 20px 20px 20px",
    alignItems: "center",
    fontSize: `${theme.globals.fontSize.xs - 2}px!important`,
    position: "relative",
    height: 70,
    borderRadius: 15,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      minWidth: "0px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      backgroundColor: "inherit",
    },
    "& button": {
      color: theme.globals.colors.primary,
      backgroundColor: theme.palette.background.default,
      position: "absolute",
      width: 42,
      height: 40,
      border: `3px solid ${theme.globals.colors.bgLight}`,
      left: 24,
      bottom: -22,
      zIndex: 2,
      [theme.breakpoints.down("sm")]: {
        left: 6,
        bottom: 27,
        backgroundColor: theme.globals.colors.bgLight,
        height: 38,
        borderRadius: 10,
      },
      [theme.breakpoints.between("sm", "md")]: {
        left: "0px",
        bottom: "9px",
        height: "55px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        width: "55px",
      },
    },
  },
  inheader: {
    display: "contents",

    [theme.breakpoints.down("sm")]: {
      backgroundColor: "transparent",
      borderRadius: "0 0 10px 10px",
      height: "80px",
      padding: "0!important",
      width: "100%",
      display: "flex",
    },
  },

  drawer: {
    [theme.breakpoints.up("900")]: {
      height: " 100%",
    },
    "& .pageTitle": {
      color: theme.globals.colors.textDark,
      fontWeight: 600,
      width: "100%",
      margin: "0 24px",
    },

    "& .MuiList-root": {
      flex: "auto",
    },

    "& .drawer-header": {
      display: "flex",

      alignItems: "center",
      fontSize: theme.globals.fontSize.xs - 2,
      position: "relative",
      marginBottom: theme.spacing(2),
      height: 80,
      borderRadius: 15,
      backgroundColor: theme.palette.background.default,
      "& button": {
        color: theme.globals.colors.textLight,
        backgroundColor: theme.palette.background.default,
        position: "absolute",
        width: 40,
        height: 40,
        border: `6px solid ${theme.globals.colors.bgLight}`,
        left: 24,
        bottom: -22,
        zIndex: 2,
      },
    },
    "& .MuiListItem-root": {
      color: theme.globals.colors.textBasic,
      height: 60,
      backgroundColor: theme.globals.colors.bgLight,
      margin: theme.spacing(0, "auto", 1),
      padding: 0,
      display: "flex",
      borderRadius: 4,
      transition: "all 0.3s ease-in-out!important",
      [theme.breakpoints.down("sm")]: {
        borderRadius: "5px",
        height: 46,
      },
      "&:hover": {
        transform: "scale(1.03)",
        "& .MuiListItemIcon-root": {
          color: theme.globals.colors.primary,
        },
      },
      "& .MuiListItemText-root ": {
        margin: theme.spacing(1, 0),
        textAlign: "start",
        "& span": {
          whiteSpace: "nowrap",
        },
      },
      "& .MuiSvgIcon-root": {
        margin: theme.spacing(1, 2),
      },
      "& .MuiListItemIcon-root": {
        width: 58,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.globals.colors.textGrey,
        fontSize: theme.globals.fontSize.lg,
        borderRadius: 15,
        [theme.breakpoints.down("sm")]: {
          borderRadius: "10px",
          height: 46,
          width: 50,
        },
      },
    },
    "& .MuiListItem-root.active": {
      backgroundColor: theme.globals.colors.primary,
      "& svg": {
        color: "#fff",
      },
      "& span": {
        color: "#fff",
      },
      "&  .MuiListItemText-root": {
        color: theme.globals.colors.primary,
      },
      "& .MuiListItemIcon-root": {
        color: theme.globals.colors.primary,
      },
    },
    "& .MuiCollapse-root": {
      marginLeft: "40px",
    },
    "& .MuiDrawer-docked": {
      margin: "0!important",
    },
    "& .MuiDrawer-paper": {
      position: "relative!important",
      backgroundColor: "transparent",
      border: "none",
      transform: "translateX(0)!important",
      zIndex: 1,

      [theme.breakpoints.down("1200")]: {
        boxShadow: "1px 0px 16px -6px #adadad !important",
        backgroundColor: "#fff",
      },
      "& .MuiList-root": {
        overflowY: "auto",
        padding: "12px",
        [theme.breakpoints.down("sm")]: {
          backgroundColor: theme.palette.background.default,
        },
        [theme.breakpoints.down("1600")]: {
          maxHeight: "800px",
          backgroundColor: "#fff",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      "& .MuiDrawer-paper": {
        width: "100%!important",
        margin: "auto",
        boxShadow: "-1px 0px 16px -6px #adadad!important",
        height: "100%",
        zIndex: "111!important",
      },
    },
  },
  drawerclosed: {
    "& .MuiDrawer-paper": {
      display: "none",
    },
  },
  footer: {
    minHeight: 50,
    display: "flex",
    alignItems: "center",
  },
  internalDrawer: {
    width: 360,
    position: "relative",
    zIndex: 1,
    borderRadius: 15,
    marginInlineEnd: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "8px!important",
    },
    [theme.breakpoints.between("600", "750")]: {
      width: "286px",
    },
    "& .MuiCardHeader-content ": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0px 0 0 -17px",
      },
    },
    "& > button": {
      padding: 0,
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "auto!important",
        marginRight: "0!important",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .all-details": {
      borderRadius: 4,
      width: "100%",
      border: `1px solid ${theme.globals.colors.borderGrey}`,
      "& .date": {
        fontWeight: "500!important",
        fontSize: theme.globals.fontSize.xs + 1,
        [theme.breakpoints.down("sm")]: {
          backgroundColor: "#f5f6fa",
          height: "30px",
          fontWeight: "bold!important",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "7px",
        },
        [theme.breakpoints.between("320", "350")]: {
          fontSize: theme.globals.fontSize.xs - 0.5,
        },
        [theme.breakpoints.between("351", "450")]: {
          fontSize: theme.globals.fontSize.xs,
        },
        [theme.breakpoints.between("451", "500")]: {
          fontSize: theme.globals.fontSize.xs + 1,
        },
        [theme.breakpoints.between("501", "600")]: {
          fontSize: theme.globals.fontSize.xs + 1,
        },
        [theme.breakpoints.between("601", "750")]: {
          fontSize: theme.globals.fontSize.xs,
        },
      },
      "& .counter": {
        width: 100,
        height: 83,
        border: `1px solid ${theme.globals.colors.borderLight}`,
        borderRadius: 4,
        overflow: "hidden",
        [theme.breakpoints.down("350")]: {
          width: 84,
        },
        [theme.breakpoints.between("350", "400")]: {
          width: 95,
        },
        [theme.breakpoints.between("400", "450")]: {
          minWidth: 84,
          width: 110,
        },
        [theme.breakpoints.between("450", "475")]: {
          minWidth: 84,
          width: 125,
        },
        [theme.breakpoints.between("475", "500")]: {
          minWidth: 84,
          width: 135,
        },
        [theme.breakpoints.between("500", "525")]: {
          minWidth: 84,
          width: 145,
        },
        [theme.breakpoints.between("525", "550")]: {
          minWidth: 84,
          width: 155,
        },
        [theme.breakpoints.between("550", "575")]: {
          minWidth: 84,
          width: 160,
        },
        [theme.breakpoints.between("575", "600")]: {
          minWidth: 84,
          width: 170,
        },
        [theme.breakpoints.between("600", "750")]: {
          width: "87px!important",
        },
        "& .MuiTypography-root ": {
          height: 34,
          color: theme.globals.colors.textWhite,
          fontSize: theme.globals.fontSize.s,

          [theme.breakpoints.down("400")]: {
            fontSize: theme.globals.fontSize.xs,
          },
          [theme.breakpoints.between("401", "600")]: {
            fontSize: theme.globals.fontSize.xs + 2,
          },
          [theme.breakpoints.between("600", "750")]: {
            fontSize: theme.globals.fontSize.s - 1.5,
          },
        },
        "& .MuiTypography-root.primary": {
          backgroundColor: theme.globals.colors.primary,
        },
        "& .MuiTypography-root.success": {
          backgroundColor: theme.globals.colors.success,
        },
        "& .MuiTypography-root.warning": {
          backgroundColor: theme.globals.colors.warning,
        },
        "& .figures": {
          padding: "0 8px",
          "& span": {
            width: 30,
            height: 30,
          },
          "& .figure": {
            fontSize: theme.globals.fontSize.m,
            fontWeight: 600,
          },
          "& .icon": {
            fontSize: theme.globals.fontSize.m,
            textAlign: "right",
          },
          "& .icon.warning": {
            color: theme.globals.colors.warning,
          },
          "& .icon.success": {
            color: theme.globals.colors.success,
          },
          "& .icon.primary": {
            color: theme.globals.colors.primary,
          },
        },
      },
    },
    "& .event-times": {
      backgroundColor: theme.globals.colors.bgLight,
      width: "100%",
      height: 38,
      borderRadius: 5,
      marginBottom: 8,
      "& p": {
        fontWeight: 600,
        width: "100%",
        textAlign: "center",
      },
      "& hr": {
        marginInline: 16,
      },
    },
    "& .back": {
      width: 35,
      height: 35,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.bgLight,
      transform: theme.direction === "rtl" ? "rotate(180deg)" : "",
      [theme.breakpoints.down("600")]: {
        display: "none",
      },
      "& svg": {
        fontSize: theme.globals.fontSize.s,
        color: theme.globals.colors.delete,
      },
    },
    "& .backHeader": {
      width: 35,
      height: 35,
      borderRadius: "10px",
      backgroundColor: "#fff",
      [theme.breakpoints.up("600")]: {
        display: "none",
      },
      "& svg": {
        fontSize: theme.globals.fontSize.s + 6,
        color: theme.globals.colors.delete,
      },
    },
    "& .details-header": {
      width: "100%",
      display: "flex",
      marginBottom: 16,
      "& >div": {
        width: "100%",
      },
    },
    "& .header-buttons": {
      width: "34%",
      display: "flex",
      justifyContent: "end",
    },
    "& .parent-tilte": {
      textAlign: "start",
      fontSize: theme.globals.fontSize.s,
      fontWeight: 600,
      width: "250px",
    },

    "& .active": {
      position: "relative",
      overflow: "visible",
      "&:after": {
        position: "absolute",
        content: '""',

        top: 0,
        bottom: 0,
        margin: "auto",
        width: 12,
        height: "90%",
        right: -6,
        borderRadius: "0 20px 20px 0",
        zIndex: -1,

        [theme.breakpoints.up("600")]: {
          backgroundColor: theme.globals.colors.primary,
        },
      },
      "& .tringle": {
        display: "block!important",
        position: "absolute",
        left: -16,
        height: "100%",

        "&:before": {
          position: "absolute",
          content: '""',

          top: 0,
          bottom: 0,
          margin: "auto",
          width: 0,
          height: 0,
          zIndex: 2,
          [theme.breakpoints.up("600")]: {
            borderRight: "8px solid #fff",
            borderLeft: "8px solid transparent",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
          },
        },
        "&:after": {
          position: "absolute",
          content: '""',

          top: 0,
          bottom: 0,
          margin: "auto",
          width: 0,
          height: 0,
          left: -1,
          [theme.breakpoints.up("600")]: {
            borderRight: "8px solid #bfbfbf",
            borderLeft: "8px solid transparent",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
          },
        },
      },
    },
  },
  start: {
    height: 50,
    borderRadius: "4px!important",
    marginBottom: "8px !important",
    backgroundColor: `${theme.globals.colors.bgGreen}!important`,
    fontSize: theme.globals.fontSize.m,
    padding: "16px!important",
    "& svg": {
      color: "#fff!important",
    },
    "& p": {
      color: "#fff!important",
      fontWeight: "bold!important",
      [theme.breakpoints.down("450")]: {
        fontSize: theme.globals.fontSize.xs,
      },
    },
    [theme.breakpoints.down("600")]: {
      height: 36,
      borderRadius: "10px!important",
      width: "138px!important",
      marginRight: "0!important",
      marginLeft: "auto!important",
    },
    [theme.breakpoints.between("600", "750")]: {
      margin: "0px 0 8px!important",
    },
    "&:hover": {
      backgroundColor: `${theme.globals.colors.success}!important`,
    },
  },
}));
export default drawerStyle;
