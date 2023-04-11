import { makeStyles } from "@mui/styles";

const FormikTextFeildGeneralStyles = makeStyles((theme) => ({
  textFeildGeneral: {
    // borderBottom: "0.82px solid #A4A4A4",
    "& > div": {
      "& > label": {
        transition: "all 0.3s ease-in-out",

        transform: "translate(0, 20px) scale(1)!important",
        left: theme.direction === "rtl" ? "0px !important" : "",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
  },
}));
export default FormikTextFeildGeneralStyles;
