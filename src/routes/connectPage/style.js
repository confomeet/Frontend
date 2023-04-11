import { makeStyles } from "@mui/styles";
import loginBg from "../../assets/images/connectBg.png";
import connect from "../../assets/images/connect.png";

const connectStyles = makeStyles((theme) => ({
  loginRoot: {
    width: "100%",
    zIndex: "3",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    marginTop: "-200px",
    "& h1": {
      fontSize: theme.globals.fontSize.xl * 2.5,
    },
    "& .signup-mobile": {
      display: "none",
    },
    "& .custom-footer": {
      alignItems: "baseline",
      color: "#fff8",
      fontSize: theme.globals.fontSize.xs + 1,
      height: "85px",
      justifyContent: "center",
    },
    "& .lilacLogo": {
      display: "flex",
      justifyContent: theme.direction === "rtl" ? "flex-end" : "flex-start",
      [theme.breakpoints.down("600")]: {
        width: 100,
      },
      [theme.breakpoints.up("600")]: {
        marginBottom: "70px",
      },
    },
    "& .white": {
      color: theme.palette.background.default,
      textAlign: "left",
    },
    "& .blue": {
      color: theme.globals.colors.bgBlue,
    },

    "& .loginBtn": {
      background:
        "linear-gradient(0deg, #288FCE 30.73%, rgba(56, 197, 235, 0) 100%)",
      transform: "translateX(22px) perspective(600px) rotateY(-25deg)",
      textTransform: "capitalize",
      color: theme.globals.colors.textwhite,
      fontSize: theme.globals.fontSize.xl,
      fontWeight: 700,
      height: "40vh",
      maxHeight: 340,
      width: "15vw",
      maxWidth: 300,
      minWidth: 237,
      margin: theme.spacing("auto", 2, "auto", 0),
      padding: theme.spacing(2),
      textAlign: "center",
      backdropFilter: "blur(1px)",
      borderRadius: 30,
      position: "relative",
      zIndex: 1,
      bottom: 0,
      transition: "all 0.5s ease",
      "& .button-text": {
        width: 177,
        wordBreak: "break-word",
      },
      "& .icon": {
        backgroundColor: "#fff",
        width: "40px",
        height: "40px",
        borderRadius: "13px",
        color: "#288fce",
        fontSize: theme.globals.fontSize.xs,
        marginBottom: theme.spacing(3),
      },
      "&:before": {
        content: '""',
        padding: "2px",
        position: "absolute",
        background:
          "linear-gradient(205deg , #ffffff, #ffffff4d 46%,#ffffff00 76%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
        borderRadius: "30px",
        WebkitMaskComposite: "clear",
        width: "100%",
        height: "98%",
        top: -20,
        right: theme.direction === "rtl" ? "auto" : -20,
        left: theme.direction === "rtl" ? -20 : "auto",
        zIndex: -1,
        transition: "all 0.5s ease",
      },

      "&:hover": {
        transform: "translateX(22px) perspective(600px) rotateY(0deg)",
        "&:before": {
          top: 0,
          right: 0,
          left: 0,
          height: "100%",
        },
      },
    },
    "& .loginBtn:first-child": { right: "8%", top: 50 },
    "& .loginBtn:last-child": { right: "4%", top: -10 },
    "& .stars-layer": {
      position: "absolute",
      width: "30%",
      height: "30%",
      zIndex: "4",
      padding: theme.spacing(3),

      "& .star": {
        borderRadius: "50%",
        backgroundColor: "#fff",
        position: "absolute",
        animationName: "twinkle",
        animationDuration: "1s",
        animationIterationCount: 20,
      },
      "& .small": {
        width: 4,
        height: 4,
        animationDelay: 100,
      },
      "& .mid": {
        width: 4.5,
        height: 4.5,
        animationDelay: 200,
      },
      "& .big": {
        width: 5.5,
        height: 5.5,
      },
      "& span:first-child": {
        top: "25%",
        right: 0,
      },
      "& span:nth-child(2)": {
        top: "31%",
        right: "25%",
      },
      "& span:nth-child(3)": {
        right: "60%",
        bottom: "50%",
      },

      "& span:nth-child(4)": {
        right: "50%",
      },
      "& span:nth-child(5)": {
        top: "56%",
        left: "11%",
      },
      "& span:nth-child(6)": {
        bottom: 38,
        left: "8%",
      },
      "& span:nth-child(7)": { bottom: "0", left: "15%" },
      "& span:nth-child(8)": {
        left: "19%",
        bottom: "63%",
      },
    },
    "& .input": {
      margin: "8px 0",

      "& .MuiFormLabel-colorPrimary": {
        color: "#cccc",
      },
      "& :-webkit-autofill": {
        transition: "background-color 5000s ease-in-out 0s",
      },
      "& .MuiInputBase-root .MuiInputBase-input:-webkit-autofill": {
        WebkitBoxShadow: "none",
      },
      "& .MuiInputAdornment-root": {
        "& .MuiButtonBase-root": {
          padding: 0,
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderBottom: `1px solid ${theme.globals.colors.textLight}`,
        borderRadius: 0,
      },
      "& .MuiFormHelperText-root": {
        textAlign: "start",
      },
    },
    "& .submitBtn": {
      backgroundColor: theme.globals.colors.primary,
      color: theme.globals.colors.textWhite,
      width: 400,
      height: 60,
      textTransform: "capitalize",
      borderRadius: 7,
      transition: "all .35s",
      position: "relative",
      zIndex: "0",
      "&:hover": { color: "#fff" },
      "&:hover:after": {
        width: "100%",
      },
    },
    "& .Mui-disabled.submitBtn": {
      backgroundColor: `${theme.globals.colors.disabled}!important`,
      color: theme.globals.colors.secondary,
    },
    "& .corner-circle-transparent": {
      "&:before": {
        position: "absolute",
        content: '""',
        width: 660,
        height: 660,
        borderRadius: "50%",
        border: `110px solid ${theme.palette.background.default}2`,
        bottom: -300,
        right: -300,
        zIndex: 1,
      },
      "&:after": {
        position: "absolute",
        content: '""',
        width: 660,
        height: 660,
        borderRadius: "50%",
        border: `110px solid ${theme.palette.background.default}2`,
        top: -300,
        left: -300,
      },
    },
    "& .connect-bg": {
      background: `url(${loginBg}) no-repeat center center`,
      backgroundSize: "cover",
      position: "relative",
      zIndex: 3,
      height: "100%",
      width: "100%",
      "&:before": {
        position: "absolute",
        content: '""',
        inset: 0,
        backgroundImage:
          "linear-gradient(89.41deg, #012241 0.51%, rgba(1, 34, 65, 0.83) 62.64%, #012241 99.53%)",
        zIndex: -1,
      },
      "& .MuiContainer-root": {
        width: "94%",
      },
      "& .gradient, .bordered , .image": {
        position: "absolute",
        transform: "translateX(22px) perspective(600px) rotateY(10deg)",
        width: 370,
        minWidth: 300,
        maxHeight: "65vh",
        margin: "auto",
        overflow: "hidden",
        borderRadius: 30,
        display: "flex",
        bottom: 0,
        [theme.breakpoints.between("900", "1200")]: {
          width: "83%",
          maxHeight: "50%",
        },
      },
      "& .gradient ": {
        top: -100,
        right: -45,
        background:
          "linear-gradient(180deg, #82acc5 6.62%, rgba(4, 162, 205, 0) 100%)",
        [theme.breakpoints.between("900", "1200")]: {
          right: 55,
        },
      },
      "& .image ": {
        top: 142,
        right: -155,
        background: `url(${connect}) no-repeat center center`,
        backgroundSize: 400,
        minHeight: 500,
        [theme.breakpoints.between("900", "1200")]: {
          right: -24,
          top: 110,
        },
      },
      "& .bordered": {
        top: 7,
        right: -102,
        margin: "auto",
        position: "absolute",
        border: `4px solid ${theme.palette.background.default}`,
        [theme.breakpoints.between("900", "1200")]: {
          right: 14,
        },
      },
    },

    "& .loginContent": {
      height: "100%",

      "& .link": {
        fontSize: theme.globals.fontSize.s,
      },
    },

    "& .PhoneInput": {
      marginTop: "30px",
      "& .PhoneInputInput": {
        background: "transparent",
        border: "none",
        borderBottom: "1px solid #fff",
        color: "#fff",
        outline: "none",
        fontSize: theme.globals.fontSize.s,
      },
      "& .PhoneInputCountry": {
        color: "#fff",
      },
    },
    "& .MuiFormControlLabel-root": {
      color: theme.globals.colors.textLight,
      "& .MuiCheckbox-root": {
        color: theme.globals.colors.textLight,
      },
    },

    [theme.breakpoints.down(1100)]: {
      "& h5": {
        textAlign: "center",
      },
      "& .inner-container": {
        flexFlow: "column nowrap",
        marginTop: 130,
      },
      "&  .custom-footer": {
        height: 197,
        alignItems: "center",
        justifyContent: "center",
      },
      "& .loginContent ": {
        height: "auto",

        "& > div": {
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      "&  .signup-mobile": {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 66,
        zIndex: 2,
        "& p": {
          margin: 0,
        },
      },
      "& .buttons-container": {
        margin: "auto",
        width: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& >div": {
          alignItems: "center",
          width: "100%",
        },
        "& .loginBtn": {
          margin: 16,
          maxHeight: 265,
          minWidth: 215,
          right: "6%",

          "&:before": {
            top: "-16px!important",
            right: "-12px!important",
          },
        },
      },
      "&  .signup": {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .connect-bg": {
        "& .MuiContainer-root": {
          padding: 0,
        },
      },
      "& .buttons-container": {
        width: "100%",

        "& .loginBtn": {
          maxHeight: "230px!important",
          minWidth: "40%!important",
          fontSize: theme.globals.fontSize.m,
          fontWeight: 600,
          "& .button-text": {
            width: 160,
          },
        },
      },
      "& h1": {
        fontSize: "3.5rem",
      },
      "& h5": {
        fontSize: theme.globals.fontSize.s * 2 - 1,
      },
    },
    [theme.breakpoints.down(400)]: {
      "& h5": {
        fontSize: theme.globals.fontSize.xs * 2 - 1,
      },
      "& h1": {
        fontSize: "3rem",
      },
      " & .buttons-container": {
        "& >div": {
          justifyContent: "space-around",
        },
        "& .loginBtn": {
          right: 0,
          margin: 0,
          fontSize: `${theme.globals.fontSize.s}px!important`,
          minWidth: "140px!important",
          maxHeight: "200px!important",
          fontWeight: "500",
          transform: "none!important",
          "&:before": {
            display: "none",
          },
          "& .button-text": {
            width: "97px!important",
          },
        },
      },
    },
  },
}));
export default connectStyles;
