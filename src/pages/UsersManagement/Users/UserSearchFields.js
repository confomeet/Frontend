import {
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
} from "components/muiComponents";
import SelectDropdownFeild from "components/select/SelectDropdownFeild";
import { eventsStyles } from "pages/events/style";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";
import Searching from "components/searching/publicSearch";

export const UserSearchFields = (props) => {
  const classes = eventsStyles();

  const handleSearchDataChange = (key, value) => {
    props.handleSearchParamsChange(key, value);
  };
  const handleSelectedRoles = (list) => {
    handleSearchDataChange(
      "roles",
      list.map((i) => i.id)
    );
  };

  const handleSelectedUserGroups = (list) => {
    handleSearchDataChange(
      "userGroups",
      list.map((i) => i.id)
    );
  };

  return (
    <Grid container className="internal-header-filter">
      <Grid container className={classes.searchitemBox}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Searching
            {...props}
            handleSearch={props?.handleSearchUsers}
            className={classes.search}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className={classes.searchUserItem}
          style={{ marginTop: "6px" }}
        >
          <TextFeildGeneral
            label={Object.translate("LABEL.NAME")}
            value={props.searchParams?.name}
            onChange={(e) => {
              props.handleSearchParamsChange("name", e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.which === 13) props?.handleSearchUsers();
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className={classes.searchUserItem}
          style={{ marginTop: "6px" }}
        >
          <TextFeildGeneral
            label={Object.translate("LABEL.EMAIL")}
            value={props.searchParams?.email}
            onChange={(e) => {
              props.handleSearchParamsChange("email", e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.which === 13) props?.handleSearchUsers();
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SelectDropdownFeild
            title={Object.translate("LABEL.USERROLE")}
            multiple={true}
            defaultValue={props.allRoles.filter((chs) =>
              props.searchParams.roles.includes(chs.id)
            )}
            items={props.allRoles}
            onChange={handleSelectedRoles}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SelectDropdownFeild
            title={Object.translate("LABEL.USER_GROUPS")}
            multiple={true}
            defaultValue={props.usersgroupsArr.filter((chs) =>
              props.searchParams.userGroups.includes(chs.id)
            )}
            items={
              Array.isFullArray(props.usersgroupsArr)
                ? props.usersgroupsArr
                : []
            }
            onChange={handleSelectedUserGroups}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ alignItems: "center", display: "flex" }}
        >
          <FormGroup row>
            <FormControlLabel
              control={<Switch />}
              label={Object.translate("LABEL.LOCKED_USERS")}
              checked={props.searchParams?.isLocked}
              onChange={(e) =>
                props.handleSearchParamsChange("isLocked", e.target.checked)
              }
            />
            <FormControlLabel
              control={<Switch />}
              label={Object.translate("LABEL.CONFIRMED_USERS")}
              checked={props.searchParams?.isConfirmed}
              onChange={(e) => {
                props.handleSearchParamsChange("isConfirmed", e.target.checked);
              }}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box className={classes.searchBtnsBox}>
            <PrimaryButton
              onClick={() => {
                props.handleSearchUsers && props.handleSearchUsers(1);
              }}
              primaryButton={Object.translate("LABEL.SEARCH")}
            />

            <SecondaryButton
              onClick={() => {
                props.clearSearchParams && props.clearSearchParams();
              }}
              secondaryButton={Object.translate("LABEL.CLEAR")}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
