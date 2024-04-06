import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
  DateRange: {
    borderBottom: "0.82px solid #a4a4a4",
    "& .MuiTextField-root": {
      width: "100%",
    },
    "& .MuiInput-root ": {
        fontSize: theme.globals.fontSize.s - 2,
        color: `${theme.globals.colors.textDarkGrey}!important`,
    },
    "& input ": {
        fontSize: theme.globals.fontSize.s - 2,
        WebkitTextFillColor: `${theme.globals.colors.textDarkGrey}!important`,
        color: `${theme.globals.colors.textDarkGrey}!important`,
        textOverflow: "ellipsis!important",
        minWidth: "80px!important",
    },
    "&  .MuiInput-underline:before": {
        display: "none!important",
    },
    "&  .MuiInput-underline:after": {
        display: "none!important",
    },
    "& svg": {
        fontSize: theme.globals.fontSize.xs * 2,
        color: "#A3A3A3!important",
    },
  }
}));

export default useStyles;
