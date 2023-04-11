import React from "react";
import style from "./style";
import { Box, Typography } from "components/muiComponents";

const Footer = () => {
  const classes = style();
  const RightsText = Object.translate("MAIN.RIGHTS");

  return (
    <Box className={classes.footer}>
      <Typography variant="caption">{RightsText}</Typography>
    </Box>
  );
};

export default Footer;
