import { makeStyles } from "@mui/styles";

const drawerStyle = makeStyles((theme) => ({
  lightMeuBox: {
    height: "100%",
    "& .MuiPaper-root": {
      position: "relative",
      backgroundColor: theme.globals.colors.primary,
    },
    "& .MuiButtonBase-root": {
      "&:hover": {
        backgroundColor: "inherit!important",
      },
    },
    "& #nav-icon3": {
      "& span": {
        background: "#fff",
      },
    },
    "& .MuiDrawer-docked": {
      transition: "all 0.3s ease-in-out",
      height: "100%",
    },
    "& a": {
      "& .MuiListItemIcon-root": {
        paddingBottom: "16px",
        borderBottom: "0.6px solid #F2F2F2!important",
      },

      "&:hover": {
        transform: "scale(1.15)",
        transition: "all 0.3s ease-in-out",
        "& .MuiListItemButton-root": {
          paddingBottom: "0!important",
        },
      },
    },
    "& a.active": {
      transform: "scale(1.15)",
      transition: "all 0.3s ease-in-out",
      "&:before": {
        content: "''",
        position: "absolute",
        width: "50%",
        height: 5,
        right: 14,
        bottom: "0",

        background: `${theme.palette.primary.main}!important`,
      },
      "& .MuiListItemButton-root": {
        paddingBottom: "0!important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      color: `${theme.palette.primary.main}!important`,
      "& ul": {
        display: "none",
      },
      "& .MuiPaper-root": {
        position: "relative",
        width: "48px!important",
        background: "initial",
        border: "none",
        "& #nav-icon3": {
          width: "25px",
          marginInlineStart: "10px",
          "& span": {
            background: theme.globals.colors.primary,
          },
        },
      },
    },
  },
  OpenedLightMeuBox: {
    height: " 100%",
    "& .MuiPaper-root": {
      position: "relative",
      backgroundColor: "#fff",
      height: "100%",
      borderRight:
        theme.direction === "rtl" ? "1px solid rgba(0, 0, 0, 0.12)" : "",
      borderLeft:
        theme.direction === "rtl" ? "" : "1px solid rgba(0, 0, 0, 0.12)",
    },
    "& .MuiButtonBase-root": {
      "&:hover": {
        backgroundColor: "#f2f2f2!important",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        paddingInlineStart: "50px",
      },
    },
    "& .MuiButtonBase-root.active": {
      backgroundColor: "#f2f2f2!important",
      transition: "all 0.3s ease-in-out",
      cursor: "pointer",
      paddingInlineStart: "50px",
    },
    "& #nav-icon3": {
      "& span": {
        backgroundColor: theme.globals.colors.primary,
      },
    },
    "& .MuiDrawer-docked": {
      height: " 100%",
      transition: "all 0.3s ease-in-out",
      [theme.breakpoints.down("600")]: {
        width: "100%",
      },
    },
    "& a": {
      [theme.breakpoints.down("600")]: {
        width: "90%",
      },
    },
    [theme.breakpoints.between("600", "1024")]: {
      position: "absolute",
    },
  },
  OpenedLightMainBoxResponsive: {
    zIndex: 6,
    backgroundColor: "rgba(0, 0, 0, 0.43)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  lightMeuBoxNone: {
    display: "none",
  },
  listItemText: {
    flex: "none!important",
  },

  listItemIcon: {
    fontSize: "30px",
    height: "100%",
    color: "#fff!important",

    display: "flex",
    justifyContent: "center",
  },
  openedListItemIcon: {
    fontSize: "30px",
    height: "100%",
    color: `${theme.globals.colors.primary}!important`,
    display: "flex",
    justifyContent: "center",
  },
  listItemButton: {
    padding: "0!important",
  },
}));
export default drawerStyle;
