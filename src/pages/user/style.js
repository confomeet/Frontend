import { makeStyles } from "@mui/styles";
import joinBg from "../../assets/images/connectBg.jpg";

const loginStyles = makeStyles((theme) => ({
  loginRoot: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    zIndex: "3",
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
  }
}));
export default loginStyles;
