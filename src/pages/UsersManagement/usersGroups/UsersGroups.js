import RenderComp from "components/RenderComponent";
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
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const classes = contactsStyles();
  return (
    <Box className={classes.UsersGroupsMainBox}>
      <RenderComp dispaly={contextProps?.mainView} component={TableView} />
      <RenderComp
        dispaly={contextProps?.addToggle || contextProps?.editToggle}
        component={HandleUsersGroups}
      />
    </Box>
  );
};

export default UsersGroups;
