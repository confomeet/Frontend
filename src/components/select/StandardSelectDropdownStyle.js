import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  optionsStyle: {
    width: "100%",
    display: "flex",
    justifyContent: theme.direction === "rtl" ? "end" : "start",
  },
  descriptionStyle: {},

  MuiAutocompletePopper: {
    textAlign: "left !important",
    display: "flex !important",
    justifyContent: "flex-start !important",
    backgroundColor: "red",
  },
  formControl: {
    overflow: "hidden",
    "& > div": {
      display: "flex",
      justifyContent: "flex-end!important",
      "& > div": {
        display: "flex",
        justifyContent: "flex-start!important",
        paddingRight: "0px!important",
        "& > input": {
          fontWeight: 200,
          minWidth: "min-content!important",
        },
      },
    },
    "& > label": {
      transition: "all 0.3s ease-in-out",
      color: "#797C85",
      transform: "translate(0, 20px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right: theme.direction === "rtl" ? "0 !important" : "inherit !important",
      "& .MuiFormLabel-asterisk": {
        color: theme.globals.colors.delete,
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      // color: `${theme.globals.colors.primary}!important`,
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiFormHelperText-root": {
      padding: "6px 20px",
      fontSize: theme.globals.fontSize.xs + 1,
    },
  },
  MuiAutocomplete: {
    hasPopupIcon: {},
  },
  roundTypeSelect: {
    "& .MuiAutocomplete-option": {
      fontSize: 5,
    },
    "& .MuiAutocomplete-endAdornment": {
      right: theme.direction === "rtl" ? "-9px!important" : "inherit",
      left: theme.direction === "ltr" ? "80%!important" : "inherit",
    },
    "& .MuiInput-input": {
      color: "#000!important",
    },

    width: "100%",
    "& .MuiAutocomplete-input:first-child": {
      padding: "0px 0px!important",
      fontSize: theme.globals.fontSize.s - 2,
      margin: "0 5px",
      [theme.breakpoints.between("1600", "1650")]: {
        fontSize: theme.globals.fontSize.s - 2,
      },
    },
    "& .MuiAutocomplete-input*": { color: "#000!important" },

    "& .MuiGrid-justify-xs-space-around": {
      display: "flex",
      alignItems: "flexEnd",
    },
    "& .MuiAutocomplete-tag": {
      [theme.breakpoints.down("950")]: {
        margin: "7px 2px",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#9c9c9c",
    },
    "& .MuiFormControl-root": {
      borderRadius: "7px",

      "& > div": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontWeight: "500",
        minHeight: "30px",
        padding: "0px 0px!important",
      },
      "& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot":
        {
          height: "100%",
          borderRadius: "10px",
        },
    },
    "& .MuiSvgIcon-root": {},
    "& .MuiInput-underline:before": {
      borderBottom: "none!important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none!important",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none!important",
    },
  },
}));
export default useStyles;
