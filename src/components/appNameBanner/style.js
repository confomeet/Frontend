import { makeStyles } from "@mui/styles";

const appNameBannerStyles = makeStyles((theme) => ({
  appNameBanner: {
    display: "flex",
    fontFamily: "Marmelad",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "1.2em",
    margin: "0 0 0.5em 0",
    "& img": {
      aspectRatio: "1/1",
      display: "inline-block",
      maxHeight: "1em",
      margin: "0 0 0 0.1em",
    },
    "& h1": {
      fontWeight: 400,
      fontSize: "1em",
      lineHeight: "1.2em",
      height: "1.2em",
      color: "#ffffff",
    },
    "@media (max-width: 389px)": {
      fontSize: "36px",
    },
    "@media (min-width: 390px) and (max-width: 429px)": {
      fontSize: "48px",
    },
    "@media (min-width: 430px) and (max-width: 744px)": {
      fontSize: "64px",
    },
    "@media (min-width: 745px)": {
      fontSize: "80px",
    }
  }
}));

export default appNameBannerStyles;
