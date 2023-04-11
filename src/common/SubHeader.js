import React from "react";
import { Box } from "components/muiComponents";
import { useSelector } from "react-redux";
import style from "./style";

const SubHeader = () => {
  const classes = style();
  const {
    settingsReducer: {
      settings: { subHeader, authUser },
    },
  } = useSelector((state) => state);

  return (
    <Box
      className={
        authUser ? classes.SubHeaderRoot : classes.SubHeaderRootWithoutAuth
      }
    >
      <Box width="100%" className={classes.SubBoxHeader}>
        {subHeader}
      </Box>
    </Box>
  );
};

export default SubHeader;
