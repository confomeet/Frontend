import { makeStyles } from "@mui/styles";
import joinBg from "../../../assets/images/connectBg.jpg";
import logo from "../../../assets/images/logo.png";

const formPageStyles = makeStyles((theme) => ({
  formPageRoot: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    zIndex: "3",
    background: "linear-gradient(180deg, #FFFFFF 82.39%, #441276 150.39%)",

    "& .white": {
      color: theme.palette.background.default,
    },
    "& .blue": {
      color: theme.globals.colors.bgBlue,
    },
    "& form": {
      width: "30vw",
      minWidth: 400,
    },
    "& .left-pane": {
      background: "#0E366324",
      width: "600px",
      paddingRight: "28px",
      flex: "0 0 auto",
      "& .content": {
        background: `url("${joinBg}")`,
        backgroundPositionX: "-250px",  // This translation is not exactly as in markup, but I believe this way it is better
        height: "100%",
        "& .item:first-child": {
          paddingTop: "160px",
        },
      }
    },
   "& .corner-circle-transparent": {
      width: "100%",
      maxHeight: "100%",
      position: "relative",
      overflow: "hidden",
      "&:after": {
        background: `url(${logo}) no-repeat`,
        backgroundSize: "contain",
        position: "absolute",
        content: '""',
        width: "750px",
        height: "750px",
        opacity: .1,
        bottom: "-400px",
        right: "-200px",
        zIndex: 1,
      },
    },
    "& .submitBtn": {
      backgroundColor: theme.globals.colors.primary,
      boxShadow: "none!important",
      color: theme.globals.colors.textWhite,
      fontSize: theme.globals.fontSize.m - 4,
      whiteSpace: "nowrap",
      width: "100%",
      height: 50,
      textTransform: "capitalize",
      borderRadius: 50,
      transition: "all .35s",
      position: "relative",
      zIndex: "0",
      "&:hover": {
        color: "#fff",
        backgroundColor: theme.globals.colors.primary,
      },
      "&:hover:after": {
        width: "100%",
      },
    },
    "& .Mui-disabled.submitBtn": {
      backgroundColor: `${theme.globals.colors.disabled}!important`,
      color: theme.globals.colors.secondary,
    },
  },
}));
export default formPageStyles;
