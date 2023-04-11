import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  roundTypeDate: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",

    "& .MuiGrid-justify-xs-space-around": {
      display: "flex",
      alignItems: "end",
      width: "100%",
      justifyContent: "flex-start",
    },

    "& > div": {
      backgroundColor: "unset",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      fontWeight: "500",
      color: "#bf9e66",
      "& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot":
        {
          height: "100%",
        },
      "& > div": {
        width: "100%",
        padding: "2px 0px",
        "& .Mui-error": {
          whiteSpace: "nowrap",
          padding: "6px 17px",
          fontSize: theme.globals.fontSize.xs + 1,
          textAlign: theme.direction === "rtl" ? "left" : "right",
        },
        "& > div": {
          height: "53px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          "& input": {
            padding: "2px 20px",
            fontSize: theme.globals.fontSizeS - 1,

            [theme.breakpoints.down("420")]: {
              fontSize: theme.globals.fontSizeXS - 1,
            },
          },
          "&:before": {
            borderBottom: "none!important",
          },

          "&:after": {
            borderBottom: "none!important",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none!important",
          },
          "& > div > button > span": {
            color: "#bf9e66b8",
          },
        },
      },
    },
  },
}));
export default useStyles;
