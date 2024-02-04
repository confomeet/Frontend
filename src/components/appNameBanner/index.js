import React from "react";
import { Box, Typography } from "@mui/material";
import appNameBannerStyles from "./style";

    //<Box className=" app-name d-flex-column center-content ">

export default function AppNameBanner({className}) {
  const classes = appNameBannerStyles();
  className = className ?? "";
  return (
    <Box className={className + classes.appNameBanner}>
      <h1>Conf</h1>
      <img src="/meet/logo.png"/>
      <h1>Meet</h1>
    </Box>
  );
}
