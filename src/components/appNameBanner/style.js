import { makeStyles } from "@mui/styles";

const appNameBannerStyles = makeStyles((theme) => ({
  appNameBanner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    "& >*": {
      color: "inherit",
      flex: "0 0 auto",
    },
    "& >img": {
      aspectRatio: "1/1",
      height: "100%",
      objectFit: "contain",
      margin: "0 0 0 0.1em",
    },
  },
}));

export default appNameBannerStyles;
