import { AddIcon } from "components/icons";
import { Box, Button } from "components/muiComponents";
import { DataActions as UserGroupsActions } from "constantData";
import { UsersGroupsContext } from "contextProviders";
import { contactsStyles } from "pages/contacts/style";
import { useContext } from "react";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";

export default function UsersGroupsHeader(props) {
  const classes = contactsStyles();
  const contextProps = useContext(UsersGroupsContext);

  return (
    <Box>
      <Box className={classes.myContactsHeader}>
        <PageHeading />
        <Button
          color="primary"
          size="small"
          className={classes.addContactButton}
          startIcon={<AddIcon />}
          onClick={() => props?.handleToogle(UserGroupsActions.add)}
        ></Button>
      </Box>
    </Box>
  );
}
