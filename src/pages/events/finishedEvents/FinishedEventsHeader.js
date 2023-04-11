import DateRange from "components/dateRange";
import { Box } from "components/muiComponents";

const StatisticsHeader = (props) => {
  const handleDateRangeChange = ({ startDate, endDate }) => {
    props.setSearchParams({
      startDate: Date.getManualISOString(startDate),
      endDate: Date.getManualISOString(endDate),
    });
  };

  const getInputValues = ({ startDate, endDate }) => {
    return {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };
  };

  return (
    <Box>
      <DateRange
        handleDateRangeChange={(data) => handleDateRangeChange(data)}
        handleSearch={() => props.handleGetFinishedEvents()}
        dateRange={getInputValues(props.searchParams)}
      />
    </Box>
  );
};

export default StatisticsHeader;
