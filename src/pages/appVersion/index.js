import React from "react";
import release_meatdata from "release_meatdata.json";

import {
  Box,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
} from "components/muiComponents";
import SnackBar from "components/Alerts/SnackBar";
import PopupMessage from "components/Alerts/PopupMessage";
const Version = () => {
  const getKeyValue = (key) =>
    key === "date"
      ? new Date(Number(release_meatdata[key]))
      : release_meatdata[key] || Object.translate("VALUE.UNKNOWN");
  return (
    <Box>
      <Box
        sx={{ width: "100%" }}
        className="loginContent d-flex-column center-content"
      >
        <Box className="lilacLogo d-flex center-content">
          <img src={`${window.officialLogo}`} alt="lilacLogo" />
        </Box>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          {Object.keys(release_meatdata).map((key) => (
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{null}</ListItemIcon>
                <ListItemText primary={`${key}: ${getKeyValue(key)}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <SnackBar />
        <PopupMessage />
      </Box>
    </Box>
  );
};

export default Version;
