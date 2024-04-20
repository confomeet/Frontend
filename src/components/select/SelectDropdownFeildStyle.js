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
    borderRadius: 7,
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
        },
      },
      "& > label": {
        transition: "all 0.3s ease-in-out",
        color: "#797C85",
        transform: "translate(0, 20px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
      "& .MuiInputLabel-shrink": {
        transition: "all 0.3s ease-in-out!important",

        fontSize: "12.5px!important",
        zIndex: 2,
        transform: "translate(0, 0px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "unset !important" : "inherit !important",
      },
    },
    "& .MuiFormHelperText-root": {
      padding: "6px 20px",
      fontSize: theme.globals.fontSize.xs + 1,
    },
    "& .MuiAutocomplete-endAdornment": {
      marginLeft: "80%!important",
      top: "calc(50% - 18px)!important",
    },
  },
  MuiAutocomplete: {
    hasPopupIcon: {},
  },
  roundTypeSelect: {
    "& .MuiAutocomplete-option": {
      fontSize: 5,
    },
    "& .MuiChip-root": {},
    width: "100%",
    "& .MuiAutocomplete-input:first-child": {
      fontSize: theme.globals.fontSize.s - 2,
      [theme.breakpoints.between("1600", "1650")]: {
        fontSize: theme.globals.fontSize.s - 2,
      },
    },
    "& .MuiAutocomplete-input*": { color: "#000!important", opacity: 2 },
    "& .MuiInput-input": {
      color: "#000!important",
    },
    "& .MuiGrid-justify-xs-space-around": {
      display: "flex",
      alignItems: "flexEnd",
    },
    "& .MuiAutocomplete-tag": {
      [theme.breakpoints.down("950")]: {
        margin: "7px 2px",
      },
    },
    "& .MuiFormControl-root": {
      borderRadius: "7px",

      "& > div": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "4px",
        fontWeight: "500",
        minHeight: "55px",
        padding: "8px!important",
      },
      "& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot":
        {
          height: "100%",
          borderRadius: "10px",
        },
    },
    "& .MuiSvgIcon-root": {},
  },
  RoundedSelect: {
    width: "100%",
    "& .MuiFilledInput-root": {
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      width: "100%",
      height: 52,

      textAlign: theme.direction === "rtl" ? "start" : "end",
      [theme.breakpoints.down("768")]: {
        height: 40,
      },
    },
    "& .MuiSvgIcon-root": { fill: "#989898" },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select": {
      "& span": { fontSize: theme.globals.fontSizeXS, float: "left" },
    },
  },
  selectContent: { "& span": { width: "100%" } },
  GreyBoxPicker: {
    margin: "0 0px",
    "& input": {
      fontSize: theme.globals.fontSizeXXS + 1,
      minHeight: "52px",
      border: "1px solid #bdbdbd",
      width: "100%",
      textAlign: theme.direction === "rtl" ? "end" : "inherit",
      height: "75%",
      minWidth: "145px",
      padding: "0 14px",
      borderRadius: "4px",
    },
    "& .react-datepicker-popper": {
      zIndex: 1000,
    },
    "& .react-datepicker__input-container": {
      borderRadius: "50px",
      display: "flex",
      justifyContent: "space-around",
      height: "52px",
    },
    "& .react-datepicker__close-icon": {
      "&:after": {
        backgroundColor: `${theme.palette.primary.main}!important`,
      },
    },
    "& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range":
      {
        backgroundColor: `${theme.palette.primary.main}!important`,
      },
    "& .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected":
      {
        backgroundColor: `${theme.palette.primary.main}!important`,
      },
    "& span": {
      fontSize: `${theme.globals.fontSizeXS}px!important`,
      fontWeight: "bold",
    },
    "& .MuiTypography-body1": {},
    "& p": {
      fontSize: `${theme.globals.fontSizeXS}px!important`,
      fontWeight: "bold",
      lineHeight: "2!important",
    },
  },
  labelPicker: {
    fontSize: `${theme.globals.fontSizeXXS}px!important`,
  },
}));
export default useStyles;
