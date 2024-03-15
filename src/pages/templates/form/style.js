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
    alignItems: "stretch",
    "& .left-pane": {
      background: "#0E366324",
      flex: "0 0 auto",
      "& .content": {
        background: `url("${joinBg}")`,
        backgroundPositionX: "-250px",  // This translation is not exactly as in markup, but I believe this way it is better
        height: "100%",
      },
      "& .MuiIconButton-root": {
        padding: "0",
        "& svg": {
          width: "42px",
          height: "42px",
          stroke: "#fff"
        }
      },
      "& .buttons": {
        "@media (max-width: 389px)": {
          margin: "12px 0 0 10px"
        },
        "@media (min-width: 390px) and (max-width: 744px)": {
          margin: "20px 0 0 10px",
        },
        "@media (min-width: 745px) and (max-width: 1279px)": {
          margin: "25px 0 0 35px",
        },
      }
    },
   "& .corner-circle-transparent": {
      position: "relative",
      overflow: "hidden",
      "&:after": {
        background: `url(${logo}) no-repeat`,
        backgroundSize: "contain",
        position: "absolute",
        content: '""',
        opacity: .1,
        zIndex: 1,

        "@media(min-width: 431px)": {
          width: "750px",
          height: "750px",
          bottom: "-450px",
          right: "-300px",
        },
        "@media(max-width: 430px)": {
          width: "375px",
          height: "385px",
          bottom: "-170px",
          right: "-120px",
        },
      },
    },
    "@media (min-width: 745px)": {
      flexDirection: "row",
      "& .left-pane": {
        minWidth: "566px",
        paddingRight: "28px",
      }
    },
    "@media (max-width: 744px)": {
      flexDirection: "column",
      "& .left-pane": {
        paddingBottom: "24px",
      }
    },
  },
}));
export default formPageStyles;
