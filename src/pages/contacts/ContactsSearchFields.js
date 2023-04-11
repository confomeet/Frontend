import clsx from "clsx";
import { Button, Grid, TextField } from "components/muiComponents";
import { contactsStyles } from "./style";
import Searching from "components/searching/publicSearch";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
const ContactsSearchFields = (props) => {
  const classes = contactsStyles();

  return (
    <Grid container className={classes.searchContactsFeild}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Searching
          {...props}
          handleSearch={props?.handleGetMyContacts}
          className={classes.search}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} className={classes.contactSearch}>
        <TextField
          variant="standard"
          label={Object.translate("LABEL.NAME")}
          InputProps={{ disableUnderline: true }}
          value={props.searchParams?.name}
          onChange={(e) => {
            props.handleSearchParamsChange("name", e.target.value);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key)) return;
            e.preventDefault();
            props.handleGetMyContacts && props.handleGetMyContacts();
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} className={classes.contactSearch}>
        <TextField
          variant="standard"
          label={Object.translate("LABEL.EMAIL")}
          InputProps={{
            disableUnderline: true,
          }}
          value={props.searchParams?.email}
          onChange={(e) => {
            props.handleSearchParamsChange("email", e.target.value);
          }}
          onKeyDown={(e) => {
            if (!["Enter"].includes(e.key)) return;
            e.preventDefault();
            props.handleGetMyContacts && props.handleGetMyContacts();
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className={classes.searchButtons}
      >
        <PrimaryButton
          onClick={() => {
            props.handleGetMyContacts && props.handleGetMyContacts();
          }}
          primaryButton={Object.translate("LABEL.SEARCH")}
        />

        <SecondaryButton
          secondaryButton={Object.translate("LABEL.CLEAR")}
          onClick={() => {
            props.handleClearSearchParams && props.handleClearSearchParams();
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ContactsSearchFields;
