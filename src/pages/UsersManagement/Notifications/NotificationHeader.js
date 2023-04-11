import { Box } from "components/muiComponents";
import Searching from "components/searching/publicSearch";
import { contactsStyles } from "../../contacts/style";

const NotificationHeader = (props) => {
  const classes = contactsStyles();
  return (
    <Box>
      <Box className={classes.myContactsHeader}>
        <Searching
          {...props}
          handleSearch={props?.handleGetNotificatios}
          className={classes.search}
        />
      </Box>
    </Box>
  );
};

export default NotificationHeader;
