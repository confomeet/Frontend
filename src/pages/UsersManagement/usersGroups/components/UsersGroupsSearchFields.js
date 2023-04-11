import { Box, Grid } from "components/muiComponents";
import { UsersGroupsContext } from "contextProviders";
import { eventsStyles } from "pages/events/style";
import { useContext } from "react";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";

export const UsersGroupsSearchFields = () => {
  const classes = eventsStyles();
  const contextProps = useContext(UsersGroupsContext);

  return (
    <Grid container className="internal-header-filter">
      <Grid container className={classes.searchitemBox}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          className={classes.searchUserItem}
        >
          <TextFeildGeneral
            label={Object.translate("LABEL.TEXT")}
            value={contextProps.searchParams?.text}
            onChange={(e) => {
              contextProps.handleSearchParamsChange("text", e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.which === 13) contextProps?.handleGetUsersGroups();
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
        >
          <TextFeildGeneral
            label={Object.translate("LABEL.GROUPNAME")}
            value={contextProps.searchParams?.groupName}
            onChange={(e) => {
              contextProps.handleSearchParamsChange(
                "groupName",
                e.target.value
              );
            }}
            onKeyUp={(e) => {
              if (e.which === 13) contextProps?.handleGetUsersGroups();
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Box className={classes.searchBtnsBox}>
            <PrimaryButton
              onClick={() => {
                contextProps.handleSearchUsersGroups &&
                  contextProps.handleGetUsersGroups(1);
              }}
              primaryButton={Object.translate("LABEL.SEARCH")}
            />

            <SecondaryButton
              onClick={() => {
                contextProps.clearSearchParams &&
                  contextProps.clearSearchParams();
              }}
              secondaryButton={Object.translate("LABEL.CLEAR")}
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
