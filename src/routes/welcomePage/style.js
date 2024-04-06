import { makeStyles } from "@mui/styles";
import loginBg from "../../assets/images/connectBg.jpg";
import logoBg from "../../assets/images/logo.png";

const welcomeStyles = makeStyles((theme) => ({
  WelcomePage: {
    width: "100%",
    height: "100%",
    zIndex: "3",
    overflow: "hidden",
    display: "flex",
    fontFamily: "Marmelad",
    color: theme.palette.background.default,
    "& img": {
        aspectRatio: "1/1",
        maxHeight: "70px",
    },
    "& .buttons-container": {
      justifyContent: "end",
      marginTop: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      overflow: "hidden",
      "& a": {
        position: "relative",
        "&:hover": {
          cursor: "default",
        },
        "&:last-child": {
          marginTop: "15px",  // margin for some space between items
          "@media (min-width: 745px)": {
            marginRight: "calc(185px / 2 + 15px)",  // margin for alignment + margin for some space between items
          },
        },
        "@media (min-width: 745px)": {
          marginRight: "calc(-185px / 2)",
        }
      },
    },
    "& .button-shape": {
      transition: "all 0.5s ease",
      width: 400,
      height: 185,
      justifyContent: "center",
      transform: "matrix(1, 0, -1, 1, 0, 0)",
      border: "2px #fff solid",
      borderRight: "none",
      borderTop: "none",
      background: "radial-gradient(ellipse at top 0% left 100%, transparent 68%, #fff5)",
      "&:hover": {
        transform: "matrix(1, 0, -1.5, 1, 48, 0)",
        cursor: "pointer",
      },
      "@media (max-width: 429px)": {
        width: "250px",
        height: "100px",
      },
      "@media (min-width: 430px) and (max-width: 744px)": {
        width: "320px",
        height: "125px",
      },
      "@media (min-width: 745px)": {
        width: "400px",
        height: "185px",
      }
    },
    "& .button-text": {
      wordBreak: "break-word",
      display: "block",
      position: "absolute",
      bottom: "10%",
      left: "8%",
      textAlign: "center",
      color: "#fff",
      flexShrink: 0,
      "@media (max-width: 430px)": {
        "fontSize": "24px",
        left: "12%",
      }
    },
    "& .corner-circle-transparent": {
      "&:after": {
        position: "absolute",
        content: '""',
        width: 660,
        height: 660,
        background: `url(${logoBg})`,
        opacity: .1,
        bottom: -100,
        right: -90,
        zIndex: -1,
      },
    },
    "& .connect-bg": {
      background: `url(${loginBg}) no-repeat center center`,
      backgroundSize: "cover",
      position: "relative",
      zIndex: 3,
      height: "100%",
      width: "100%",
      "& .MuiContainer-root": {
        width: "94%",
      },
    },
  },
}));
export default welcomeStyles;
