import { Close } from "@mui/icons-material";
import { Divider } from "components/muiComponents";
import { eventsStyles } from "../../pages/events/style";
import { SearchIcon } from "../icons";
import ToolTip from "../toolTip/ToolTip";

export default function Searching(props) {
  const classes = eventsStyles();
  return (
    <div
      onClick={() => {
        if (props?.openFilters && props?.handleSearch)
          props?.handleSearch(props?.initSearchParams);
        props?.setOpenFilters(!props.openFilters);
      }}
      className={classes.searchIconox}
    >
      {props.openFilters ? (
        <ToolTip title={Object.translate("BUTTONS.NO")} placement="top">
          <Close />
        </ToolTip>
      ) : (
        <ToolTip title={Object.translate("BUTTONS.SEARCH")} placement="top">
          <SearchIcon />
        </ToolTip>
      )}
      {/* <Divider orientation="vertical" flexItem variant="middle" /> */}
    </div>
  );
}
