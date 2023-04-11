import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  rootMultiSelected: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
    },
    "& .MuiFormControl-root": {
      margin: "0px",
      marginTop: "0px",
    },
    "& .MuiChip-filled": {
      border: "1px solid rgba(0, 0, 0, 0.08)!important",
      backgroundColor: "transparent",
    },
    "& > div": {
      "& > div": {
        "& > label": {
          transition: "all 0.3s ease-in-out",

          left: theme.direction === "rtl" ? "-0px" : "inherit !important",
          right:
            theme.direction === "rtl"
              ? "unset !important"
              : "inherit !important",
        },
        "& > .MuiInputLabel-shrink": {
          transition: "all 0.3s ease-in-out!important",

          left: theme.direction === "rtl" ? "-34px" : "inherit !important",
          right:
            theme.direction === "rtl"
              ? "unset !important"
              : "inherit !important",
        },
        "& > div": {
          padding: "0!important",
          marginTop: "17px!important",
          minHeight: "40px",
        },
      },
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      top: "54px",
    },
    "& .MuiFormLabel-asterisk": {
      color: theme.globals.colors.danger,
    },
  },
  optionsStyle: {
    width: "100%",
    display: "flex",
    justifyContent: theme.direction === "rtl" ? "end" : "start",
  },
}));
export default useStyles;
