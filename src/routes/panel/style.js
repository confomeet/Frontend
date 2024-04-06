import { makeStyles } from "@mui/styles";

const drawerStyle = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down("600")]: {
      padding: "0 8px",
    },
    "& .MuiAppBar-root": {
      zIndex: 1200,
      height: 64,
      boxShadow: "none",
      borderBottom: `1px solid ${theme.globals.colors.borderLight}`,
      backgroundColor: theme.palette.background.default,
    },
    "& .MuiDrawer-paper": {
      backgroundColor: theme.palette.secondary.main,
      border: "none",
      "& .MuiList-root": {
        height: "55%",
        overflowY: "auto",
        padding: "16px 8px !important",
      },
    },
    "& .logo": {
      width: "70%",
      margin: "auto",
      display: "block",
      padding: theme.spacing(4),
      borderTop: `1px solid ${theme.globals.colors.borderPrimary}`,
      position: "relative",
      "& :before": {
        content: '""',
        position: "absolute",

        borderStyle: "solid",
        borderWidth: "11px 11px 0",
        borderColor: "#b7b7b7 transparent transparent",
      },
      "& :after": {
        content: '""',
        position: "absolute",

        borderStyle: "solid",
        borderWidth: "10px 10px 0",
        borderColor: "#fff transparent transparent",
      },
    },

    "& .drawer": {
      "& .MuiList-root": {
        flex: "auto",
      },
      "& button": { color: theme.globals.colors.textLight, alignSelf: "end" },
      "& .avatar": {
        width: 107,
        borderRadius: 25,
        border: "7px solid",
        boxShadow: "0px 10px 10px rgba(37, 73, 130, 0.19)",
        textTransform: "capitalize",
        height: 107,
      },
      "& .userName": {
        color: theme.globals.colors.textLight,
        margin: theme.spacing(2, 0),
        fontSize: theme.globals.fontSize.m,
        textTransform: "capitalize",
      },
    },
    "& .MuiListItem-root": {
      color: theme.globals.colors.textBasic,
      height: 60,
      backgroundColor: `${theme.palette.background.default}8`,

      margin: theme.spacing(3, "auto"),
      padding: 0,
      width: "90%",
      display: "flex",
      borderRadius: 15,

      "& .MuiListItemText-root ": {
        margin: theme.spacing(1, 2),
        color: theme.globals.colors.textBasic,
        textAlign: "start",
      },
      "& .MuiSvgIcon-root": {
        margin: theme.spacing(1, 2),
      },
      "& .MuiListItemIcon-root": {
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${theme.palette.background.default}4`,
        color: theme.globals.colors.textGrey,
        fontSize: theme.globals.fontSize.lg,
        borderRadius: 15,
      },
    },
    "& .MuiListItem-root.active": {
      background: theme.palette.background.default,

      "& .MuiListItemIcon-root": {
        backgroundColor: theme.globals.colors.bgBlue,
        color: theme.globals.colors.textWhite,
      },
    },
    "& .MuiCollapse-root": {
      marginLeft: "40px",
    },
    "& main": {},
  },
  notificationIcon: {
    zIndex: 1000,
  },
  header: {
    justifyContent: "end",

    "& .language": {
      fontFamily: theme.direction === "rtl" ? "Poppins" : "Cairo",
    },
  },
}));
export default drawerStyle;
