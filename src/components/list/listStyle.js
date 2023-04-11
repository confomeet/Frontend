import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  listBox: {
    top: 64,

    boxShadow: "0 3px 22px 0 rgb(0 0 0 / 11%) !important",
    width: "100%",
    position: "absolute!important",
    maxWidth: 250,
    minWidth: 259,
    background: "#fff",
    maxHeight: 257,
    borderRadius: 5,
    [theme.breakpoints.up("600")]: {
      left: "35%",
    },
    [theme.breakpoints.down("600")]: {
      right: "10%",
    },
  },
  list: {
    overflow: "auto",
    height: 250,
    "& >li": {
      flexDirection: "column",
    },
    "& >li >a >ul": {
      padding: 0,
      borderBottom: "1px solid #C4C4C4",

      "& > li": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    "& >li:last-child": {
      "& >ul": { borderBottom: "none" },
    },
  },
  date: {
    color: "#1f627f",
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
  },
  message: {
    color: "#666666!important",
    margin: "8px 0px !important",
    "& > span": {
      fontSize: theme.globals.fontSize.s - 2,
    },
  },
  links: {
    textDecoration: "none",
    color: "#1f627f",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));
