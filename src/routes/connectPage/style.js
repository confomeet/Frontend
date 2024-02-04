import { makeStyles } from "@mui/styles";
import loginBg from "../../assets/images/connectBg.jpg";
import logoBg from "../../assets/images/logo.png";

const connectStyles = makeStyles((theme) => ({
  loginRoot: {
    width: "100%",
    zIndex: "3",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    marginTop: "-200px",
    fontFamily: "Marmelad",
    color: theme.palette.background.default,
    "& h1": {
      fontSize: "70px",
      fontWeight: "400",
    },
    "& img": {
        aspectRatio: "1/1",
        maxHeight: "70px",
    },
    "& .buttons-container": {
      justifyContent: "end",
      marginTop: "10vh",
      "& >div": {
        alignItems: "end",
      },
      "& a": {
        marginRight: "calc(-185px / 2)",
        maxWidth: "545px",
        "&:last-child": {
          marginRight: "calc(185px / 2 + 15px)",  // margin for alignment + margin for some space between items
          marginTop: "calc(15px)",  // margin for some space between items
        }
      }
    },
    "& .button-shape": {
      transition: "all 0.5s ease",
      width: 545,
      height: 185,
      justifyContent: "center",
      position: "relative",
      "&:before": {
        content: `""`,
        display: "block",
        height: "100%",
        width: "100%",
        transform: "matrix(1, 0, -1, 1, 0, 0)",
        border: "2px #fff solid",
        borderRight: "none",
        borderTop: "none",
      },
    },
    "& .button-text": {
      wordBreak: "break-word",
      display: "block",
      position: "absolute",
      bottom: "10%",
      left: "5%",
      textAlign: "center",
      color: "#fff",
      fontSize: "48px",
      flexShrink: 0,
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

    "& .inner-container": {
      flexFlow: "column nowrap",
      marginTop: "200px",
      height: "100%"
    },
    [theme.breakpoints.down("md")]: {
      "& .buttons-container": {
        "& .app-name img": { maxHeight: "3.5rem" },
        justifyContent: "end",
        "& .button-text": { fontSize: "3.5rem" },
        "& >div": {
          "& a": {
            marginRight: 0,
            "&:last-child": {
              marginRight: 0,
            }
          },
          "& .button-shape": {
            width: "450px",
          }
        },
      }
    },
    [theme.breakpoints.down("sm")]: {
      "& .app-name": {
        "& img": { maxHeight: "3rem" },
        "& h1": { fontSize: "3rem" },
      },
      " & .inner-container .buttons-container": {
        marginTop: "30px",
        justifyContent: "center",
        "& >div": {
          alignItems: "center",
          "& .button-shape": {
            width: "100%",
            minWidth: "140px!important",
            maxHeight: "50px!important",
            transform: "none!important",
            display: "block",
            "&:before": {
              display: "none",
            },
            "& .button-text": {
              fontSize: "32px",
              position: "static",
            },
          },
        },
      },
    },
  },
}));
export default connectStyles;
