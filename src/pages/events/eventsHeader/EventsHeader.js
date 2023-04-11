import { AddIcon } from "components/icons";
import { Box, Button } from "components/muiComponents";
import Searching from "components/searching";
import SearchFeilds from "components/searching/searchFeilds";
import ToolTip from "components/toolTip/ToolTip";
import { useSelector } from "react-redux";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
import { eventsStyles } from "../style";
import ButtonsGroup from "./ButtonGroup";
import ViewButtons from "./ViewButtons";
import {
  DisplayType as EventsDisplayType,
  getStatusFilters,
} from "constantData";

export default function EventsHeader(props) {
  const classes = eventsStyles();
  const filters = getStatusFilters();
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  return (
    <Box className={classes.relativeBox}>
      <Box className={classes.internalHeader}>
        <Box className={classes.appointmentTitleButtons}>
          <PageHeading />
          <Box className={classes.headerEventsButtons}>
            <ViewButtons {...props} />
            <Searching {...props} />
            <Button
              className={classes.addEventButton}
              onClick={() => props.onAdd()}
            >
              <ToolTip
                placement="top"
                title={isRTL ? "إضافة اجتماع" : "Add Event"}
              >
                <AddIcon />
              </ToolTip>
            </Button>
          </Box>
        </Box>
        {props?.view === EventsDisplayType.calendar && (
          <Box
            className={
              props.openFilters ? classes.smMdBox : classes.filtersSwitchers
            }
          >
            <Box className={classes.filtersBox}>
              <ButtonsGroup {...props} />
            </Box>
          </Box>
        )}

        {props.openFilters && (
          <Box className={classes.SearchBoxUpsm}>
            <SearchFeilds {...props} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
