import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 40,
    height: 40,
    minWidth: 40,
    boxShadow: "none !important",
    borderRadius: "50%",
    transition: "all .5s ease-in-out",
    "& span": { textTransform: "capitalize" },
    "&:hover": {
      "& .MuiFab-primary": {
        backgroundColor: `${theme.palette.primary.main}!important`,
      },
    },
    "& i": {
      fontSize: theme.globals.fontSizeS,

      "&:before": {
        transform: "rotate(0deg)",
        display: "block",
        transition: "all 0.5s ease-in-out",
      },
    },
  },
}));
export default useStyles;
