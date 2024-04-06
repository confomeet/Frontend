import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  typoDetails: {
    fontSize: theme.globals.fontSize.xs + 2,
    color: "#444444cf!important",
    marginBottom: "4px",

    [theme.breakpoints.down("600")]: {
      fontSize: theme.globals.fontSize.xs + 2,
    },
  },
  labelPosition: {
    top: "12px",
    left: "15px",
    right: "auto",
    width: "fit-content",
    padding: "0 10px 0 5px",
    position: "relative",
    minWidth: "4%",
    background: "#fff",
    zIndex: 1,
  },
  translateBox: {
    flexWrap: "nowrap",
    [theme.breakpoints.down("768")]: {
      flexWrap: "wrap",
    },
  },
  translateBoxNew: {
    display: "flex",
    flexDirection: "column",
    direction: "ltr",
    "& .MuiFormControl-root": {
      border: "1px solid #ccc",
      borderRadius: "7px",
      width: "100%",
      height: "55px",
      "& > div": {
        height: "100%",
        padding: "8px 30px",
      },
    },
  },
  Typo: {
    fontSize: theme.globals.fontSize.s - 1,
  },
  dialogContent: {
    "& .MuiDialog-paperWidthSm": {
      width: 700,
      minHeight: 315,
      borderRadius: 10,
      position: "relative",
      padding: 16,
      "&:before": {
        content: "''",
        position: "absolute",
        width: 7,
        height: 187,
        right: 0,
        top: "25%",
        borderRadius: "15px 0px 0px 15px",
        background: `${theme.palette.primary.main}!important`,
      },
      "&:after": {
        content: "''",
        position: "absolute",
        width: 7,
        height: 187,
        left: 0,
        top: "25%",

        background: `${theme.palette.primary.main}!important`,

        borderRadius: "0px 15px 15px 0px",
      },
    },
    "& .MuiDialogActions-root": {
      justifyContent: "flex-start",
      "& .MuiButton-containedPrimary": {
        width: 130,
        height: 35,

        borderRadius: 12,
      },
    },
    "& .MuiDialog-paper": {
      margin: "5%",
    },
  },

  title: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "baseline",

    "& .MuiIconButton-root": {
      background: "#C24848",
      color: "#fff",
      width: 35,
      height: 35,
      transition: "all .5s ease-in-out",
      "&:hover": { transform: "rotate(360deg)" },
    },
    "& .MuiTypography-h6": {
      fontSize: theme.globals.fontSizeM,
      textAlign: "right",
      fontWeight: 700,
    },
    "& .MuiDivider-root": {
      height: 1.5,

      backgroundColor: `${theme.palette.primary.main}!important`,
      width: "82%",
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("425")]: {
        width: "45%",
      },
      [theme.breakpoints.between("425", "768")]: {
        width: "60%",
      },
    },
  },
  DialogActionsBox: {
    "& .MuiDialogActions-root": {
      padding: "16px",
      [theme.breakpoints.up("768")]: {
        padding: "s32px !important",
      },
    },
  },
  globe: {
    boxShadow: "none",
    margin: theme.spacing(1),
    width: 40,
    height: 40,
    minWidth: 40,
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "1px solid",
    borderColor: `${theme.palette.primary.main}!important`,
    "& i": {
      fontSize: theme.globals.fontSizeXXL,
      color: `${theme.palette.primary.main}!important`,
    },
    "&:hover": {
      "& i": {
        color: "#fff",
      },
    },
  },

  text: {
    flexDirection: "column",
    display: "flex",
    margin: theme.spacing(1),
    "& .MuiFormHelperText-root.Mui-error": {
      background: "#fff",
      padding: " 7px 2px",
    },

    "& .MuiFormControl-root": {
      background: "#fff",
      width: "100%",
      borderRadius: 5,
      "& .MuiInputBase-input": {
        height: "40px",
        padding: "8px 20px",
        border: "1px solid #ccc",
        borderRadius: 7,
        textAlign: "left",
        direction: theme.direction === "rtl" ? "ltr" : "",
      },
    },
  },

  editorbox: {
    "& .rdw-editor-main": {
      height: "100px !important",

      overflowX: "hidden",
      overflowY: "auto",
    },
  },
  editortypo: {
    textAlign: "left",
    margin: "0px 10px",
  },
  textNew: {
    flexDirection: "column",
    display: "flex",
    "& .MuiFormControl-root": {
      background: "#f0f0f0",
      width: "100%",
      height: "48px",
      borderRadius: "5px",
      "& .MuiInputBase-input": {
        textAlign: "left",
        padding: "8px",
        direction: theme.direction === "rtl" ? "ltr" : "",
      },
    },
    "& .MuiTypography-body1": {
      marginBottom: "8px",
      fontWeight: "500",
      margin: "10px 0!important",

      [theme.breakpoints.between("320", "600")]: {
        fontSize: theme.globals.fontSize.xs + 2,
      },
      [theme.breakpoints.between("320", "768")]: {
        margin: "0",
        alignItems: "flex-start",
      },
    },
  },
  formikTranslationGrid: {
    display: "flex",
    [theme.breakpoints.up("600")]: {
      "& >div:first-child": {
        marginBottom: "8px",
      },
    },
  },
  formikTranslationLabel: {
    color: "#1F2945!important",

    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    fontWeight: "bold!important",
    paddingBottom: "8px",
    textAlign: theme.direction === "rtl" ? "start" : "start",
  },
  formikTranslationInputar: {
    width: "98.4%",
    "& p": {
      textAlign: theme.direction === "rtl" ? "start" : "start",
    },
  },
  formikTranslationInputen: {
    width: "98.4%",
    "& p": {
      textAlign: theme.direction === "rtl" ? "end" : "start",
    },
  },
}));
export default useStyles;
