import { makeStyles } from "@mui/styles";

const appNameBannerStyles = makeStyles((theme) => ({
  appNameBanner: {
    display: "flex",
    fontFamily: "Marmelad",
    fontSize: "80px",
    textAlign: "center",
    justifyContent: "center",
    "& img": {
      aspectRatio: "1/1",
      maxHeight: "75px",
      margin: "auto 5px",
      display: "inline-block",
    },
    "& h1": {
      fontSize: "80px",
      fontWeight: 400,
      lineHeight: "95px",
      height: "95px",
      margin: 0,
      color: "#ffffff",
    }
  }
}));

export default appNameBannerStyles;
