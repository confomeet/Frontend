import { makeStyles } from "@mui/styles";
import joinBg from "../../assets/images/connectBg.jpg";

const loginStyles = makeStyles((theme) => ({
  loginRoot: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    zIndex: "3",
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
    "@media (min-width: 430px)": {
      width: "30vw",
      minWidth: "350px",
    },
    "@media (max-width: 429px)": {
      width: "80%",
    },
  }
}));
export default loginStyles;
