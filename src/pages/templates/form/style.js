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
    overflow: "scroll",
    alignItems: "stretch",
    "& >*": {
      minWidth: "350px",
    },
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
        "@media (min-width: 745px)": {
          margin: "25px 0 0 35px",
        },
      }
    },
    "& .item": {
      "@media (max-width: 389px)": {
        height: "43px",
      },
      "@media (min-width: 390px) and (max-width: 429px)": {
        height: "58px",
      },
      "@media (min-width: 430px) and (max-width: 744px)": {
        height: "76px",
      },
      "@media (min-width: 745px)": {
        height: "96px",
      },
      marginBottom: "1rem",
    },
   "& .corner-circle-transparent": {
      width: "100%",
      height: "100%",
      position: "absolute",
      overflow: "hidden",
      "& >*": {
        position: "absolute",
        overflowX: "hidden",
        background: `url(${logo}) no-repeat`,
        backgroundSize: "contain",
        opacity: 0.1,

        "@media(min-width: 431px)": {
          width: "750px",
          height: "750px",
          // bottom: "0",
          bottom: "-450px",
          right: "-300px",
        },
        "@media(max-width: 430px)": {
          width: "375px",
          height: "385px",
          bottom: "-170px",
          right: "-120px",
        },
      }
    },
    "@media (min-width: 1200px)": {
      flexDirection: "row",
      "& .left-pane": {
        minWidth: "566px",
        paddingRight: "28px",
      }
    },
    "@media (max-width: 1199px)": {
      flexDirection: "column",
      "& .left-pane": {
        paddingBottom: "24px",
      }
    },
  },
}));
export default formPageStyles;
