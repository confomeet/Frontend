import { makeStyles } from "@mui/styles";

const fieldsDialogStyle = makeStyles((theme) => ({
  customHeight: {
    "& .MuiDialog-paperWidthSm": {
      height: "inherit",
    },
  },
  AlertextBox: {
    overflowY: "scroll",
    height: "100px",
    margin: "20px 0px",
  },

  dialogContent: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 500,
      maxWidth: "max-content!important",
      minHeight: "min-content",
      borderRadius: 4,
      position: "relative",
      boxShadow: "none!important",
      [theme.breakpoints.down("768")]: {
        minHeight: 265,
      },
      "& .MuiDialog-paper ": {
        margin: "0px !important",
      },
      [theme.breakpoints.down("600")]: {
        minWidth: "95%",
        margin: "0px !important",
        width: "95%",
      },
    },
    "& .MuiDialogActions-root": {
      justifyContent: theme.direction === "rtl" ? "flex-start" : "flex-end",
      "& .MuiButton-containedPrimary": {
        width: 130,
        height: 35,
        marginBottom: "2%",
        borderRadius: 12,
      },
    },
    "& .MuiDialogContent-root": {
      direction: theme.direction === "rtl" ? "ltr" : "rtl",
      paddingTop: "20px!important",
    },
  },
  visitsDialogContent: {
    "& .MuiDialog-paperWidthSm": {
      width: "70%",
      minWidth: 500,
      maxWidth: "75%!important",
      minHeight: 325,
      borderRadius: 20,
      position: "relative",
      background: "#f7f7f7",
      [theme.breakpoints.down("768")]: {
        minHeight: 265,
      },
      "& .MuiDialog-paper ": {
        margin: "0px !important",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: 10,
        height: "50%",
        right: 0,
        top: "25%",
        borderRadius: "15px 0px 0px 15px",
        background: `${theme.palette.primary.main}!important`,
      },
      "&:after": {
        content: "''",
        position: "absolute",
        width: 10,
        height: "50%",
        left: 0,
        top: "25%",

        background: `${theme.palette.primary.main}!important`,

        borderRadius: "0px 15px 15px 0px",
      },

      [theme.breakpoints.down("600")]: {
        minWidth: "95%",
        margin: "0px !important",
        width: "95%",
      },
    },
    "& .MuiDialogActions-root": {
      justifyContent: theme.direction === "rtl" ? "flex-start" : "flex-end",
      "& .MuiButton-containedPrimary": {
        width: 130,
        height: 35,
        marginBottom: "2%",
        borderRadius: 12,
      },
    },
  },
  popTheDialogBtn: { width: 37, height: 37, minWidth: 37, boxShadow: "none" },
  title: {
    justifyContent: "space-between",
    flexDirection: theme.direction === "rtl" ? "row" : "row-reverse",
    display: "flex",
    alignItems: "center",

    "& .MuiIconButton-root": {
      background: theme.globals.colors.primary,
      color: "#fff",
      width: 35,
      height: 35,
      transition: "all .6s ease-in",
      "&:hover": {
        transform: "rotate(360deg)",
        background: theme.globals.colors.danger,
      },
    },
    "& .MuiTypography-h6": {
      fontSize: theme.globals.fontSizeM,
      textAlign: "right",
      fontWeight: 700,
      whiteSpace: "nowrap",
      [theme.breakpoints.down("768")]: {
        fontSize: theme.globals.fontSizeS,
      },
    },
    "& .MuiDivider-root": {
      height: 1.5,

      backgroundColor: `${theme.palette.primary.main}!important`,
      minWidth: "60%",
      margin: theme.spacing(0, 1),
      flexGrow: 1,
      [theme.breakpoints.down("768")]: {
        minWidth: "40%",
      },
    },
  },

  text: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    padding: "14px",
    margin: theme.spacing(1),
    "& .MuiFormControl-root": {
      backgroundColor: "#F8F8F8",
      width: "80%",

      borderRadius: 10,
      "& .MuiInputBase-input": {
        height: 35,
        textAlign: "left",
        padding: "8px",
      },
    },
  },
  Alertitle: {
    color: "#2D2D2D",
    fontWeight: "bold",
    fontSize: theme.globals.fontSizeM,
    width: "100%",
  },
  AlertAgree: {
    "& .MuiButton-contained": {
      color: `${theme.palette.primary.main}!important`,
      boxShadow: "none",
      border: "1px solid",
      borderColor: `${theme.palette.primary.main}!important`,
      borderRadius: "34px",
      width: "146px",
      fontWeight: "bold",
      backgroundColor: "#ffffff",
      margin: "0px 6px 20px",
    },
  },
  Alertext: {
    textAlign: "left",

    fontSize: theme.globals.fontSizeXS,

    borderRadius: "20px",
  },
}));
export default fieldsDialogStyle;
