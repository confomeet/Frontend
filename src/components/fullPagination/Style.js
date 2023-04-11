import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("600px")]: { margin: "auto" },
    "& svg": {
      direction: "rtl",
      transform: theme.direction !== "ltr" ? "" : "rotate(-180deg)",
    },
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  ltrPagination: {
    display: "flex",
    alignItems: "self-end",
  },
  selectGrid: {
    display: "flex",
    marginInlineStart: "12px",
    alignItems: "self-end",
    "& .MuiInput-underline": {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    },
  },
}));
export default useStyles;
