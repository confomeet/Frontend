import { Box, Grid } from "components/muiComponents";
import { eventsStyles } from "pages/events/style";
import { useState } from "react";
import Searching from "components/searching/publicSearch";

import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";
const NotificationSearchFields = (props) => {
  const classes = eventsStyles();
  // const initSearchParams = {
  //   topic: "",
  //   name: "",
  //   email: "",
  // };
  // const [searchParams, setSearchParams] = useState({
  //   ...initSearchParams,
  // });

  const handleSearchParamsChange = (key, value) => {
    props.setSearchParams((prevState) => ({ ...prevState, [key]: value }));
    // props.handleGetNotificatios(1);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      props.handleGetNotificatios && props.handleGetNotificatios(1);
    }
  };
  return (
    <Box className={classes.notificationsMainBox}>
      <Grid container className="internal-header-filter">
        <Grid container className={classes.searchitemBox}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Searching
              {...props}
              handleSearch={props?.handleGetNotificatios}
              className={classes.search}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextFeildGeneral
              label={Object.translate("LABEL.NAME")}
              value={props.searchParams.name}
              onChange={(e) => {
                handleSearchParamsChange("name", e.target.value);
              }}
              onBlur={(e) => {
                props.handleSearchParamsChange("name", e.target.value);
              }}
              onKeyDown={handleEnterKey}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TextFeildGeneral
              variant="standard"
              label={Object.translate("LABEL.EMAIL")}
              value={props.searchParams.email}
              onChange={(e) => {
                handleSearchParamsChange("email", e.target.value);
              }}
              onBlur={(e) => {
                props.handleSearchParamsChange("email", e.target.value);
              }}
              onKeyDown={handleEnterKey}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.notifiBtnsBox}
          >
            <PrimaryButton
              onClick={() => {
                props.handleGetNotificatios && props.handleGetNotificatios(1);
              }}
              primaryButton={Object.translate("LABEL.SEARCH")}
            />

            <SecondaryButton
              onClick={() => {
                // setSearchParams({ ...initSearchParams });
                props.clearSearchParams && props.clearSearchParams();
              }}
              secondaryButton={Object.translate("LABEL.CLEAR")}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationSearchFields;
