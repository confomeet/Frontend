import React from "react";
import { Box, Typography } from "@mui/material";
import appNameBannerStyles from "./style";

    //<Box className=" app-name d-flex-column center-content ">

export default function AppNameBanner({className, color, variant}) {
  const classes = appNameBannerStyles();
  className = className ? className + " " : "";
  color = color ? color : "#fff";
  variant = variant ? variant : "h1";
  return (
    <Box className={className + classes.appNameBanner} sx={{color}}>
      <Typography variant={variant}>Conf</Typography>
      <img src="/meet/logo.png"/>
      <Typography variant={variant}>Meet</Typography>
    </Box>
  );
}
