import { AddIcon } from "components/icons";
import { Box, Button } from "components/muiComponents";
import { contactsStyles } from "../../contacts/style";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const UsersHeader = (props) => {
  const classes = contactsStyles();

  return (
    <Box className={classes.myContactsHeader}>
      <PageHeading />
      <Button
        color="primary"
        size="small"
        className={classes.addNewUserButton}
        startIcon={<AddIcon />}
        onClick={props.onAdd}
      ></Button>
    </Box>
  );
};
