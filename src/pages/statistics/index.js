import { Box } from "components/muiComponents";
import { useEffect, useMemo, useState } from "react";
import { getThisMonth } from "utils";
import EventsByStatus from "./EventsByStatus";
import StatisticsHeader from "./StatisticsHeader";
import UsersByStatus from "./UsersByStatus";
import { Styles } from "./style";
import ActiveRooms from "./ActiveRooms";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";

const Statistics = (props) => {
  const classes = Styles();
  const initSearchParams = useMemo(() => {
    const thisMonth = getThisMonth();
    const startDate = Date.getManualISOString(thisMonth.startDate);
    const endDate = Date.getManualISOString(thisMonth.endDate);
    return { startDate, endDate };
  }, []);

  const [searchParams, setSearchParams] = useState({ ...initSearchParams });

  const handleGetStatistics = () => {
    let body = {
      startDateTime:
        searchParams.startDate != null
          ? searchParams.startDate
          : initSearchParams.startDate,
      endDateTime:
        searchParams.endDate != null
          ? searchParams.endDate
          : initSearchParams.endDate,
    };

    window.dispatchWantedAction("GET_EVENTS_BY_STATUS_STATISTICS", {
      body,
      params: 0,
    });
    window.dispatchWantedAction("GET_USERS_BY_STATUS_STATISTICS", {
      body,
    });
    window.dispatchWantedAction("GET_ACTIVE_ROOMS_STATISTICS", {});
  };

  const statisticsProps = {
    searchParams,
    setSearchParams,
    handleGetStatistics,
  };
  useEffect(() => {
    (async () => {
      window.dispatchWantedAction("SET_SUB_HEADER", {
        subHeader: (
          <Box className="statisticsTitleRange">
            <PageHeading />
            <StatisticsHeader {...statisticsProps} />
          </Box>
        ),
      });
    })();
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      handleGetStatistics();
    })();
  }, [searchParams]);

  return (
    <Box className={classes.statistics}>
        {/* <EventsByApp /> */}

      <EventsByStatus />
      {/* <Divider /> */}
      <UsersByStatus />
      {/* <Divider /> */}
      <ActiveRooms />
    </Box>
  );
};

export default Statistics;
