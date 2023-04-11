import React from "react";
import { Box, Typography } from "components/muiComponents";
import useStyles from "./TagWithXStyle";

function Tag({ onClick, text }) {
  const classes = useStyles();

  return (
    <Box className={classes.tag} onClick={() => onClick && onClick()}>
      <Typography>{text}</Typography>
    </Box>
  );
}

export default Tag;
