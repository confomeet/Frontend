import { makeStyles } from "@mui/styles";

const alertStyle = makeStyles((theme) => ({
  customHeight: {
    "& .MuiDialog-paperWidthSm": {
      height: "inherit",

      minWidth: "290px",
    },
  },
  AlertBox: {
    zIndex: "2000 !important",
    position: "fixed",
  },
  alertNotes: {
    width: "100%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-root": {
      width: "100%",
    },

    "& .MuiInputBase-input": {
      textAlign: theme.direction === "rtl" ? "left" : "right",
    },
  },
  AlertextBox: {
    minHeight: "0px",
    margin: "20px 0px",
    overflowY: "scroll",
    height: "122px",
    wordWrap: "break-word",
    width: "100%",
    textAlign: "justify",
    direction: "ltr",
    display: "flex",
    padding: "10px 0px",
    justifyContent: "center",
    [theme.breakpoints.between("320", "400")]: {
      margin: "20px 0px 0px",
    },
  },
  dialogContent: {
    zIndex: "2000 !important",
    position: "fixed",
    "& .MuiDialog-paperWidthSm": {
      minWidth: 290,
      width: "100%",
      maxWidth: "max-content!important",
      minHeight: 325,
      borderRadius: 4,
      position: "relative",
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
  DialogContentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    [theme.breakpoints.between("320", "400")]: {
      width: "auto",
    },
    [theme.breakpoints.between("400", "500")]: {
      minWidth: "318px",
      width: "auto",
    },
    [theme.breakpoints.between("500", "600")]: {
      minWidth: "350px",
      width: "auto",
    },
  },
  popTheDialogBtn: { width: 37, height: 37, minWidth: 37, boxShadow: "none" },
  title: {
    justifyContent: "space-between",
    flexDirection: theme.direction === "rtl" ? "row" : "row-reverse",
    display: "flex",
    alignItems: "center",

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
      whiteSpace: "nowrap",
    },
    "& .MuiDivider-root": {
      height: 1.5,

      backgroundColor: `${theme.palette.primary.main}!important`,
      minWidth: "60%",
      margin: theme.spacing(0, 1),
      flexGrow: 1,
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
    fontWeight: "bold !important",
    fontSize: `${theme.globals.fontSizeM}!important`,
    width: "100%",
  },
  AlertAgree: {
    "& .MuiButton-contained": {
      color: `${theme.palette.primary.main}!important`,
      boxShadow: "none",
      border: "1px solid",
      borderColor: `${theme.palette.primary.main}!important`,
      borderRadius: "34px",
      width: theme.direction === "rtl" ? "173px" : "173px",
      whiteSpace: "nowrap",
      fontWeight: "bold",
      backgroundColor: "#ffffff",
      margin: "20px 6px 20px",
      [theme.breakpoints.between("320", "768")]: {
        margin: "15px 6px 10px",
      },
      "&:hover": {
        boxShadow: "none !important",
        backgroundColor: "#ffffff !important",
      },
    },
    [theme.breakpoints.down("768")]: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column-reverse",
      marginTop: "22px",
    },
  },
  Alertext: {
    textAlign: "left",
    fontSize: theme.globals.fontSizeXS,
    borderRadius: "20px",
  },
}));
export default alertStyle;
