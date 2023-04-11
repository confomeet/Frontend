import Switcher from "components/materialComponents/Switcher";
import { Box } from "components/muiComponents";
import StandardSelectDropdown from "components/select/StandardSelectDropdown";
import { eventsStyles } from "../style";

export default function RelatedUsersToggle(props) {
  if (!props.relatedUsers.length) return null;
  const classes = eventsStyles();

  return (
    <Box className={classes.internalSwitcher}>
      <StandardSelectDropdown
        placeholder={Object.translate("LABEL.RELATED_USERS")}
        items={props.relatedUsers}
        defaultValue={props.selectedRelatedUser}
        onChange={(obj) => props.setSelectedRelatedUser(obj.id)}
        handleClear={() => {
          props.setSelectedRelatedUser(null);
        }}
      />
      <Switcher
        label={""}
        defaultChecked={props.relatedUsers.length > 0}
        handleSwitchChange={(checked) => {
          props.handleSearch({ relatedUserEvents: checked });
        }}
        labelPlacement="end"
      />
    </Box>
  );
}
