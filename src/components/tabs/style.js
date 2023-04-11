import { makeStyles } from "@mui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "& .Mui-selected ": {
      background: "#FFFFFF !important",
      border: "1px solid!important",
      borderColor: `${theme.palette.primary.main}!important`,
      boxSizing: "border-box",
      borderRadius: "15px !important",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root": {
      minWidth: "unset",
      maxWidth: "unset",
      width: "100%",
      flexShrink: 1,
      minHeight: 125,
      backgroundColor: "#f8f8f8",
      borderRadius: 15,
      border: "1px solid #e4e4e4",
      padding: "16px",
      alignItems: "flex-start",
      "&:first-child": {
        margin: theme.spacing(0, 2, 0, 0),
        [theme.breakpoints.down("700")]: {
          margin: "0px 0px 10px 0px",
        },
      },
    },
    "& .MuiTabs-root": {
      "& div": {
        "& .MuiTabs-flexContainer": {
          justifyContent: "center",
          "& .MuiTab-wrapper": { alignItems: "flex-start" },
          [theme.breakpoints.down("700")]: {
            flexDirection: "column",
          },
        },
      },
    },
    "& .MuiTabs-flexContainer": {
      "& span": {
        fontSize: theme.globals.fontSizeXS,

        textAlign: "left",

        color: "#818181",
        [theme.breakpoints.down("414")]: {
          fontSize: theme.globals.fontSizeXXS + 1,
        },
        [theme.breakpoints.between("414", "480")]: {
          fontSize: theme.globals.fontSizeXS,
        },
        [theme.breakpoints.between("480", "576")]: {
          fontSize: theme.globals.fontSizeXS + 1,
        },
        [theme.breakpoints.between("576", "768")]: {
          fontSize: theme.globals.fontSizeS,
        },
      },
    },
  },
  title: {
    fontWeight: "700",
    fontSize: theme.globals.fontSizeXS,

    textAlign: "left",

    color: "#6D6D6D",
  },
  sectionHeading: {
    fontSize: theme.globals.fontSizeS,
    fontWeight: "700",
    [theme.breakpoints.down("414")]: {
      fontSize: theme.globals.fontSizeXXS,
    },
    [theme.breakpoints.between("414", "480")]: {
      fontSize: theme.globals.fontSizeXXS + 1,
    },
    [theme.breakpoints.between("480", "576")]: {
      fontSize: theme.globals.fontSizeXS,
    },
    [theme.breakpoints.between("576", "768")]: {
      fontSize: theme.globals.fontSizeXS + 1,
    },
  },
  drapZoneHolder: {
    padding: theme.spacing(3),
    "& .MuiDropzoneArea-root": {
      borderRadius: 15,
      minHeight: 350,
      "&:focus": { outline: "none" },
      "& .MuiDropzoneArea-icon": {
        color: "#dfdfdf",
        width: "50%",
        height: 170,
      },
      "& .MuiDropzoneArea-text": {
        fontSize: theme.globals.fontSizeL,
        fontWeight: "700",
        color: "#dcdcdc",
      },
    },
  },

  note: {
    color: "#e04041",
    width: "100%",
    fontSize: theme.globals.fontSize.xs + 2,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
  },
  frame: { border: "none !important" },
}));

export default useStyles;
