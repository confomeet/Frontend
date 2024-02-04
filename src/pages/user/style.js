import { makeStyles } from "@mui/styles";
import joinBg from "../../assets/images/connectBg.jpg";

const loginStyles = makeStyles((theme) => ({
  loginRoot: {
    width: "100%",
    position: "relative",
    display: "flex",
    marginTop: "-200px",
    zIndex: "3",
    [theme.breakpoints.up("600")]: {
      "&:before": {
        position: "absolute",
        content: '""',
        width: 400,
        height: 400,
        borderRadius: "50%",
        border: `50px solid ${theme.globals.colors.bgGreen}`,
        right: -208,
        top: -75,
      },
    },

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
    "& .loginBtn": {
      background:
        "linear-gradient(0deg, #288FCE 30.73%, rgba(56, 197, 235, 0) 100%)",
      transform: "translateX(22px) perspective(600px) rotateY(-25deg)",
      textTransform: "capitalize",
      color: theme.globals.colors.textwhite,
      fontSize: theme.globals.fontSize.m,
      height: "40vh",
      maxHeight: 450,
      width: "15vw",
      maxWidth: 400,
      margin: theme.spacing("auto", 2, "auto", 0),
      backdropFilter: "blur(21px)",
      borderRadius: 30,
      position: "relative",
      zIndex: 1,
      bottom: 0,
      transition: "all 0.5s ease",
      "& .icon": {
        backgroundColor: "#fff",
        width: "40px",
        height: "40px",
        borderRadius: "13px",
        color: "#288fce",
        fontSize: theme.globals.fontSize.xs * 2,
        marginBottom: theme.spacing(3),
      },
      "&:before": {
        content: '""',
        padding: "2px",
        position: "absolute",
        background:
          "linear-gradient(205deg , #ffffff, #ffffff4d 70%,#ffffff00 76%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
        borderRadius: "30px",
        WebkitMaskComposite: "clear",
        width: "92%",
        height: "98%",
        top: -12,
        right: -15,
        zIndex: -1,
        transition: "all 0.5s ease",
      },

      "&:hover": {
        transform: "translateX(22px) perspective(600px) rotateY(0deg)",
        "&:before": {
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
        },
      },
    },
    "& .loginBtn:first-child": { right: "25%", top: 0 },
    "& .loginBtn:last-child": { right: "20%", top: -65 },
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
      margin: theme.spacing(2.5, 0),

      "& .MuiFormLabel-colorPrimary": {
        color: "#cccc",
      },
      "& :-webkit-autofill": {
        transition: "background-color 5000s ease-in-out 0s",
      },
      "& .MuiInputBase-root .MuiInputBase-input:-webkit-autofill": {
        WebkitBoxShadow: "none",
      },
      "& .MuiInputBase-root": {
        "&:before": {
          borderWidth: "1px!important",
        },
        "&:after": {
          borderWidth: "1px!important",
        },
        "&:hover": {
          "&:before": {
            borderBottom: `1px solid ${theme.palette.secondary.dark}`,
          },
        },
      },
      "& .MuiInputAdornment-root": {
        margin: "0 10px",
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

    "& .connect-bg": {
      background: `url(${joinBg}) no-repeat center center`,
      backgroundSize: "cover",
      position: "relative",
      zIndex: 3,
      height: "100%",
      width: "45%",

      "& .gradient, .bordered , .image": {
        position: "absolute",
        transform: "translateX(22px) perspective(600px) rotateY(10deg)",
        width: "65%",
        maxHeight: "58%",
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
          "linear-gradient(180deg, #82acc5  6.62%, rgba(4, 162, 205, 0) 100%)",
        [theme.breakpoints.between("900", "1200")]: {
          right: 55,
        },
      },
      "& .image": {
        top: 142,
        right: -155,
        backgroundColor: theme.palette.background.default,
        boxShadow: "0px 17px 40px -11px rgb(0, 0, 0 , 0.20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.between("900", "1200")]: {
          right: -24,
          top: 110,
        },

        "& .MuiTypography-root ": {
          textTransform: "capitalize",
          width: 200,
          lineHeight: 1.5,
          fontSize: theme.globals.fontSize.xl * 2 - 15,
          color: theme.globals.colors.textBasic,
          // fontSize: theme.globals.fontSize.xl + 47,
          fontWeight: 600,
          position: "relative",
          textAlign: "center",
          [theme.breakpoints.between("900", "1200")]: {
            fontSize: theme.globals.fontSize.s * 2 - 2,
          },
        },
        "& .corner": {
          right: -80,
          width: 200,
          border: `30px solid ${theme.globals.colors.bgGreen}`,
          bottom: -92,
          height: 200,
          content: '""',
          position: "absolute",
          borderRadius: "50%",
          transform: "translateX(22px) perspective(600px) rotateY(0deg)",
        },
        "& svg": {
          position: "absolute",
        },
        "& .circle svg": {
          width: 138,
          height: 118,
          top: 0,
          bottom: 0,
          left: 30,
          margin: "auto",
          zIndex: 0,
          fill: theme.globals.colors.bgLightBlue,
        },
        "& .circle-small svg": {
          width: 48,
          height: 48,
          top: "13%",
          right: 30,
          zIndex: 0,
          fill: theme.globals.colors.bgLightBlue,
        },
        "& .triangle svg": {
          bottom: " 15%",
          fill: theme.globals.colors.bgBlue,
          left: 30,
          width: 38,
          height: 48,
          zIndex: 0,
          transform: "rotate(78deg)",
        },
        "& .triangle-small svg": {
          top: " 8%",
          fill: theme.globals.colors.bgBlue,
          right: 85,
          width: 30,
          height: 30,
          zIndex: 0,
          transform: "rotate(78deg)",
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
      flex: "auto",
      height: "100%",
      backgroundColor: "#fff",
      "& .lilacLogo": {
        width: 250,
      },
      "& .link": {
        fontSize: theme.globals.fontSize.s,
        borderRadius: "65px",
        color: theme.globals.colors.bgGreen,
      },
      "& svg": {
        color: "#B4B4B4",
      },
    },

    "& .PhoneInput": {
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      marginBottom: "0",
      "& .PhoneInputInput": {
        fontSize: theme.globals.fontSize.s,
        border: "none",
        outline: "none",
      },
    },
    "& .MuiFormControlLabel-root": {
      color: theme.globals.colors.textLight,
      "& .MuiCheckbox-root": {
        color: theme.globals.colors.textLight,
      },
    },
    [theme.breakpoints.down(1100)]: {
      "& form ": {
        width: "80%",
        minWidth: 300,
      },
      // "&:before": {
      //   top: "-170px",
      //   right: "-190px",
      //   width: "300px",
      //   border: `50px solid ${theme.globals.colors.success}`,
      //   height: "300px",
      //   content: '""',
      //   position: "absolute",
      //   borderRadius: "50%",
      // },
      "& .lilacLogo ": {
        width: "150px!important",
        // marginTop: 70,
      },
      "& .submitBtn": {
        fontSize: theme.globals.fontSize.s - 2,
      },
      "& .MuiFormControlLabel-root": {
        margin: "0!important",
        fontSize: `${theme.globals.fontSize.s - 2}px!important`,
      },
    },
  },
  addUser: {
    "& label": {
      color: `${theme.globals.colors.textDark}!important`,
      paddingBottom: theme.spacing(1),
      fontSize: theme.globals.fontSize.s - 3,
      fontWeight: 600,
    },
    "& .secondary": {
      backgroundColor: theme.palette.background.default,
      border: ` 1px  solid ${theme.globals.colors.borderGrey}`,
      color: theme.globals.colors.textBasic,
    },
    "& button:first-child": {
      marginInlineEnd: theme.spacing(1),
    },
  },
  inputfeedback: {
    color: "#d32f2f",
    fontSize: "0.75rem",
  },
}));
export default loginStyles;
