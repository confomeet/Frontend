import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  primaryButton: {
    background: `${theme.globals.colors.primary}!important`,
    borderRadius: "4px",
    width: "130px",
    height: "40px",
    color: "#fff",
    marginInlineEnd: "10px!important",
    [theme.breakpoints.down("600")]: {
      width: "100px",
    },
    "& span": {
      color: "#fff",
      whiteSpace: "nowrap",
    },
  },
  secondaryButton: {
    backgroundColor: "#F2F5FC!important",
    borderRadius: "4px",
    width: "130px",
    height: "40px",
    [theme.breakpoints.down("600")]: {
      width: "100px",
    },
    "& span": {
      color: "#1F2945!important",
    },
  },
}));
export default useStyles;
