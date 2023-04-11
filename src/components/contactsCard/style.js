import { makeStyles } from "@mui/styles";

export const contactsCardStyle = makeStyles((theme) => ({
  ContactCard: {
    width: 324,
    height: 240,
    borderRadius: "4px!important",

    margin: theme.spacing(1, 1),
    border: "1px solid #DCDCDC",
    transition: "all 0.3s ease-in-out!important",
    [theme.breakpoints.down("400")]: {
      width: "280px",
      minWidth: "280px",
      margin: theme.spacing(0, 0, 1, 0),
      height: "fit-content",
    },
    "&:hover": {
      transform: "scale(1.03)",
    },
    "& .copyOutlineButton": {
      "& svg": {
        rotate: "270deg",
      },
    },
    "& .MuiTypography-body2": {
      width: "210px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      color: "#393939",
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    },

    [theme.breakpoints.down("1340")]: {
      justifyContent: "center",
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

    "& *": {
      fontFamily: theme.globals.fontFamily,
    },
    "& .status": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.success,
      border: "2px solid #fff",
      position: "absolute",
      top: 1,
      right: 3,
    },
    "& .status-online": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.success,
      border: "2px solid #fff",
      position: "absolute",
      top: 1,
      right: 3,
    },
    "& .status-offline": {
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.warning,
      border: "2px solid #fff",
      position: "absolute",
      top: 1,
      right: 3,
    },

    "& .MuiList-root": {
      backgroundColor: "transparent",
    },
    "& .MuiCardHeader-root": {
      padding: "8px 8px 0",
    },
    "& .MuiCardContent-root": {
      paddingBottom: 8,
      paddingTop: 8,
      paddingInlineStart: "0!important",
      paddingInlineEnd: "30!important",

      [theme.breakpoints.down("400")]: {
        paddingBottom: 0,
      },
    },
    "& .MuiCardHeader-avatar": {
      margin: "0!important",
      "& .MuiSvgIcon-root": {
        color: " #D9D9D9",
      },
    },
    " & .MuiListItem-root": {
      color: "inherit",
      width: "100%",
      height: "42px",
      margin: "0",
      display: "flex",
      padding: "0",
      borderRadius: "0px",
      backgroundColor: "transparent",

      borderTop: "0.5px dashed rgba(220, 220, 220, 0.62)",
    },
    "& .MuiListItemIcon-root": {
      color: `${theme.globals.colors.primary}!important`,
      minWidth: "22px!important",

      height: "20px!important",
      width: "80px!important",
      fontSize: `${theme.globals.fontSize.xs * 2 - 2}px!important`,

      "& svg": {
        margin: "0!important",
      },
    },
    "& .MuiListItemButton-root ": {
      padding: 0,
      height: 30,
    },
    "& .MuiListItemText-root": {
      textAlign: "start",

      margin: "0!important",
      "& .MuiTypography-root ": {
        fontSize: theme.globals.fontSize.s - 2,
      },
    },
    "& .MuiAvatar-root ": {
      width: 63,
      height: 63,
      backgroundColor: "#F6FAFF",
      overflow: "visible",
      color: "#2D313E",
      marginInlineEnd: "10px",
      fontWeight: "bold",
      [theme.breakpoints.down("600")]: {
        width: 50,
        height: 50,
      },
    },
    "& button": {
      width: 40,
      height: 40,
      minWidth: 40,
      borderRadius: "50%",
      transition: "all .5s ease-in-out",
      "& span": { textTransform: "capitalize" },
      "&:hover": {
        "& .MuiFab-primary": {
          backgroundColor: `${theme.palette.primary.main}!important`,
        },
      },
      "& i": {
        fontSize: theme.globals.fontSizeS,

        "&:before": {
          transform: "rotate(0deg)",
          display: "block",
          transition: "all 0.5s ease-in-out",
        },
      },
    },
    "& .MuiCardActions-root": {
      justifyContent: "space-evenly",
      "& .MuiButton-root": {
        width: "45%",
        color: "#012241",
        gap: "5px",
        "&:hover": {
          borderRadius: "40px",
        },
        "& .MuiButton-startIcon": {
          color: theme.globals.colors.primary,
          margin: "0px!important",
        },
        "&:last-child": {
          "& .MuiButton-startIcon": {
            transform: "rotateY(180deg)",
          },
        },
      },
    },
  },
  ContactCardDetails: {
    justifyContent: "center",
    [theme.breakpoints.down("400")]: {
      width: "calc(100% - 120px)",
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
}));
