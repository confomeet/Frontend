import DateRange from "components/dateRange";
import { Grid } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListItemsForDropDownMenu, getThisMonth } from "utils";
import actions from "../../redux/actions";
import { Styles } from "./style";

const { getEventsTypes } = actions;

const StatisticsHeader = (props) => {
  const dispatch = useDispatch();
  const { meetings } = useSelector((state) => state);

  const handleDateRangeChange = ({ startDate, endDate }) => {
    props.setSearchParams({
      startDate: Date.getManualISOString(startDate),
      endDate: Date.getManualISOString(endDate),
    });
  };
  const [eventTypes, setEventTypes] = useState([]);
  const [eventType, setEventType] = useState(null);

  const classes = Styles();
  const getInputValues = ({ startDate, endDate }) => {
    const thisMonth = getThisMonth();
    return {
      startDate: startDate != null ? new Date(startDate) : thisMonth.startDate,
      endDate: endDate != null ? new Date(endDate) : thisMonth.endDate,
      eventType: eventType,
    };
  };

  useEffect(() => {
    dispatch(getEventsTypes());
  }, []);

  useEffect(() => {
    if (!meetings.getEventsTypesDone) return;
    const parentEvents = getListItemsForDropDownMenu(
      meetings.getEventsTypesDone,
      "id",
      "value"
    );
    setEventTypes(parentEvents);
  }, [meetings.getEventsTypesDone]);

  return (
    <Grid className={classes.statisDateRange}>
      <DateRange
        handleDateRangeChange={(data) => handleDateRangeChange(data)}
        handleSearch={() => props.handleGetStatistics()}
        dateRange={getInputValues(props.searchParams)}
      />
    </Grid>
  );
};

export default StatisticsHeader;
