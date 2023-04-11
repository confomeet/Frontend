import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  buttonGroup: {
    display: "flex",
    marginTop: "20px",
  },
  button: {
    textTransform: "capitalize",
    marginBottom: theme.spacing(2),
    marginTop: "9px",
    margin: theme.spacing(1),
    marginTop: "0px!important",
    border: "0.5px solid #146A99",
    "& span": {
      color: "#fff",
      fontFamily: theme.globals.fontFamily,
      fontSize: theme.direction === "rtl" ? "16px!important" : "14px!important",
      "& .MuiSvgIcon-root": {
        marginRight: "0px",
      },
    },
    "&:hover": {
      backgroundColor: "#fff!important",
      border: "0.5px solid #146A99",
      boxShadow: "none",
      "& span": {
        color: "#146A99!important",
      },
      "& .MuiSvgIcon-root": {
        color: "#146A99!important",
      },
    },
  },
  contained: {
    borderRadius: "6px",
    backgroundColor: "#146A99!important",
  },
  outlined: {
    background: "#FFFFFF",
    border: "0.5px solid #146A99",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "8px 32px",
    "& span": {
      color: "#C4C4C4",
      marginLeft: 0,
      marginRight: 0,
    },
  },
  icons: {
    color: "#146A99",
    marginLeft: "0px!important",
  },
}));
export const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    boxShadow: theme.shadows[1],
    fontSize: theme.globals.fontSize.s - 1,
  },
}));
