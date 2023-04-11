import { Box } from "components/muiComponents";
import { contactsStyles } from "pages/contacts/style";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
export default function SmtpHeader(props) {
  const classes = contactsStyles();

  return (
    <Box>
      <Box className={classes.myContactsHeader}>
        <PageHeading />
      </Box>
    </Box>
  );
}
