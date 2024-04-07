import DateRange from "components/dateRange";
import { Grid } from "components/muiComponents";
import { getThisMonth } from "utils";
import { Styles } from "./style";

const StatisticsHeader = (props) => {
  const handleDateRangeChange = ({ startDate, endDate }) => {
    props.setSearchParams({
      ...props.searchParams,
      startDate: Date.getManualISOString(startDate),
      endDate: Date.getManualISOString(endDate),
    });
  };

  const classes = Styles();
  const getInputValues = ({ startDate, endDate }) => {
    const thisMonth = getThisMonth();
    return {
      startDate: startDate != null ? new Date(startDate) : thisMonth.startDate,
      endDate: endDate != null ? new Date(endDate) : thisMonth.endDate,
    };
  };

  return (
    <DateRange
      handleDateRangeChange={(data) => handleDateRangeChange(data)}
      handleSearch={() => props.handleGetStatistics()}
      dateRange={getInputValues(props.searchParams)}
    />
  );
};

export default StatisticsHeader;
