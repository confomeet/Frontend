import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  rootMainCalender: {
    display: "flex",
    width: "100%",
    "& .MuiIconButton-edgeEnd": {
      padding: "16px 0px 0",
      paddingInlineEnd: "26px",
      paddingInlineStart: "10px",
      "&:hover": {
        backgroundColor: "#fff",
      },
      "& svg": {
        fontSize: "20px",
      },
    },
    "& > div": {
      "& > label": {
        fontSize: "14px!important",
        transition: "all 0.3s ease-in-out",

        transform: "translate(0, 20px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",

      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-16px",
    },
    "& .Mui-disabled": {
      "& input": {
        padding: "22px 0px 4px 0px!important",
      },
    },

    "& .MuiOutlinedInput-root": {
      "& input": {
        padding: "18px 0px 8px!important",
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderBottom: " 0.82px solid #A4A4A4;",
        },
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: " 0.82px solid #A4A4A4;",

      borderRadius: "0px",
      "&:hover": {
        borderBottom: "0.5px solid",
        borderBottomColor: `${theme.globals.colors.primary}54!important`,
      },
    },
    "& . MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
      borderBottom: " 0.82px solid #A4A4A4;",
    },
    "& .MuiFormControl-root": {
      minWidth: "50%",
      width: "100%",
    },
    "& .MuiDateCalendar-root": {
      direction: theme.direction === "rtl" ? "rtl" : "ltr",
    },
  },
}));
