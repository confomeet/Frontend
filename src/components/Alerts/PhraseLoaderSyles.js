import { makeStyles } from "@mui/styles";

export const phraseLoaderStyles = makeStyles((theme) => ({
  phraseBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  phraseTypography: {
    paddingInlineEnd: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dotPulse: {
    position: "relative",
    left: "-10017px",
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    backgroundColor: theme.globals.colors.primary,
    color: theme.globals.colors.textWhite,
    boxShadow: "9999px 0 0 -5px",
    animation: "$dotPulse 1s infinite linear",
    animationDelay: "0.25s",
    "&:before": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: theme.globals.colors.textWhite,
      color: theme.globals.colors.textWhite,
      boxShadow: "9984px 0 0 -5px",
      animation: "$dotPulseBefore 1s infinite linear",
      animationDelay: "0s",
    },
    "&:after": {
      content: "''",
      display: "inline-block",
      position: "absolute",
      top: 0,
      width: "10px",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: theme.globals.colors.textWhite,
      color: theme.globals.colors.textWhite,
      boxShadow: "10014px 0 0 -5px",
      animation: "$dotPulseAfter 1s infinite linear",
      animationDelay: "0.5s",
    },
  },
  "@keyframes dotPulseBefore": {
    "0%": {
      boxShadow: "9984px 0 0 -5px",
    },

    "30%": {
      boxShadow: "9984px 0 0 2px",
    },

    "60%": {
      boxShadow: "9984px 0 0 -5px",
    },
    "100%": {
      boxShadow: "9984px 0 0 -5px",
    },
  },

  "@keyframes dotPulse": {
    "0%": {
      boxShadow: "9999px 0 0 -5px",
    },

    "30%": {
      boxShadow: "9999px 0 0 2px",
    },

    "60%": {
      boxShadow: "9999px 0 0 -5px",
    },
    "100%": {
      boxShadow: "9999px 0 0 -5px",
    },
  },

  "@keyframes dotPulseAfter": {
    "0%": {
      boxShadow: "10014px 0 0 -5px",
    },

    "30%": {
      boxShadow: "10014px 0 0 2px",
    },

    "60%": {
      boxShadow: "10014px 0 0 -5px",
    },
    "100%": {
      boxShadow: "10014px 0 0 -5px",
    },
  },
}));
