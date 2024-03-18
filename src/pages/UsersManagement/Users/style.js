import { makeStyles } from "@mui/styles";

export const userStyle = makeStyles((theme, isRTL) => ({
  rootUserManagement: {
    margin: "0px 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
    "& .MuiOutlinedInput-root": {
      margin: "5px 0px 15px",
      borderRadius: "10px!important",
      height: "fit-content",
      paddingLeft: "0px !important",
    },
    "& .MuiSvgIcon-root ": {
      margin: "5px !important",
    },
    "& .MuiInputAdornment-root": {
      position: "absolute",
      left: "auto",
      right: "0px",
    },
    "& .MuiInputBase-input": {
      padding: "8px 0px",
    },
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "0px !important",
    },
    "& .MuiAutocomplete-root .MuiOutlinedInput-root": {
      padding: "9px 9px 0px 9px",
    },
    "& form": {
      marginInlineEnd: "20px",
      [theme.breakpoints.down("600")]: {
        marginInlineEnd: "0",
      },
    },
  },
  userPhoneLabel: {
    color: "rgba(0, 0, 0, 0.6)!important",
    fontWeight: "400!important",
    fontSize: "13px!important",
    whiteSpace: "nowrap",
    "& .MuiFormLabel-asterisk": {
      color: `${theme.globals.colors.danger}!important`,
    },
  },
  userPhoneEdit: {
    color: "rgba(0, 0, 0, 0.6)!important",
    fontWeight: "400!important",
    fontSize: "13px!important",
    whiteSpace: "nowrap",
    color: `${theme.globals.colors.primary}!important`,
  },

  userFieldMail: {
    "& > label": {
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiInputLabel-shrink": {
      left:
        theme.direction === "rtl" ? "-28px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },

    "& .MuiInput-root": {
      borderBottom: "1px solid",
      borderBottomColor: `${theme.globals.colors.primary}54!important`,
    },
    "& .Mui-error": {
      textAlign: "start",
    },
  },
  userField: {
    "& > label": {
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiInputLabel-shrink": {
      left:
        theme.direction === "rtl" ? "-20px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },

    "& .MuiInput-root": {
      borderBottom: "1px solid",
      borderBottomColor: `${theme.globals.colors.primary}54!important`,
    },
    "& .Mui-error": {
      textAlign: "start",
    },
  },
  userList: {
    "& svg": {
      margin: "0 5px!important",
    },
    "& .MuiChip-root": {
      backgroundColor: "rgb(245 246 250)!important",
    },
    "& > label": {
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiInputLabel-shrink": {
      left:
        theme.direction === "rtl" ? "-20px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiInput-root": {
      "&:before": {
        borderBottom: "1px solid #A4A4A4!important",

        "&:focus-visible": {
          borderBottomColor: "none!important",
        },
        "&:hover": {
          borderBottomColor: "none!important",
        },
      },
      "&:after": {
        borderBottom: "1px solid!important",
        borderBottomColor: `${theme.globals.colors.primary}54!important`,
        "&:focus-visible": {
          borderBottomColor: "none!important",
        },
        "&:hover": {
          borderBottomColor: "none!important",
        },
      },
    },
  },
  userComponentRoot: {
    "& .MuiOutlinedInput-root": {
      margin: "5px 0px 15px",
      borderRadius: "10px!important",
      height: "fit-content",
      paddingLeft: "0px !important",
    },
    "& .meduim-btn": {
      minWidth: "118px !important",
    },
    "& .MuiAutocomplete-endAdornment": {
      left: "auto!important",
      right: "0",
      top: "calc(50% - 12px)",
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
    },
  },
  userComponentRole: {
    "& .MuiOutlinedInput-root": {
      height: "43px",
      margin: "5px 0px 15px",
      borderRadius: "6px!important",
      height: "fit-content",
      paddingLeft: "0px !important",
    },
    "& .meduim-btn": {
      minWidth: "118px !important",
    },
    "& .MuiAutocomplete-endAdornment": {
      left: "auto!important",
      right: "0",
      top: "calc(50% - 12px)",
    },
  },
  passBtns: {
    "& .medium-btn": {
      minWidth: "120px!important",
    },
  },
  passGrid: {
    maxHeight: "50px",
  },
  phoneNumber: {
    borderBottom: "1px solid #A4A4A4",

    display: "flex",
    alignItems: "center",
    height: "39px",
    "&.hovered": {
      borderBottom: "2px solid #000",
    },
    "& .PhoneInputInput": {
      margin: "0px 0px 1px",
      padding: 0,
      border: "none!important",
      height: "100%",
      fontSize: "inherit",
      "&:focus-visible": {
        outline: "none!important",
      },
      "&:hover": {
        border: "none!important",
      },
    },
    "& .PhoneInputCountry": {
      marginBottom: "1px",
    },
  },
  phoneNumberFld: {
    // width: "80%",
    maxHeight: "47px",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    borderBottom: "1px solid #a4a4a4",
    "& .PhoneInputInput": {
      margin: "4px 0px 8px",
      borderRadius: "10px!important",
      border: "none",
      backgroundColor: "inherit",
      "&:focus-visible": {
        outline: `${theme.globals.colors.primary} auto 0px`,
      },
    },
  },
  usersBox: {
    position: "relative!important",
    height: "fit-content",
    marginBottom: "0px",
    marginTop: "0px",
    "& .MuiAutocomplete-root": {
      "& .MuiInputBase-root": {
        marginTop: "8px!important",
        borderBottom: "1px solid #a4a4a4",
      },
    },
    "& .search": {
      borderBottom: "1px solid #a4a4a4",
      marginTop: "21px",
      // height: "100%",
      "& .MuiFormControl-root": {
        width: "100%",
      },
    },
    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
    },
  },
}));
