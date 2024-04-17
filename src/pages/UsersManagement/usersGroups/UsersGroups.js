import { Box } from "components/muiComponents";
import { UsersGroupsContext } from "contextProviders";
import { useContext } from "react";
import { useSelector } from "react-redux";
import HandleUsersGroups from "./components/HandleUsersGroups";
import TableView from "./components/TableView";
import { contactsStyles } from "pages/contacts/style";

const UsersGroups = () => {
  const contextProps = useContext(UsersGroupsContext);
  const {
    usersgroups,
  } = useSelector((state) => state);
  const classes = contactsStyles();
  return (
    <Box className={classes.UsersGroupsMainBox}>
      {contextProps?.mainView && <TableView />}
      {(contextProps?.addToggle || contextProps?.editToggle) && <HandleUsersGroups />}
    </Box>
  );
};

export default UsersGroups;
