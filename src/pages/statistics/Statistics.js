import { Typography } from "@mui/material";
import { Box } from "components/muiComponents";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getThisMonth } from "utils";
import EventsByApp from "./EventsByApp";
import EventsByStatus from "./EventsByStatus";
import StatisticsHeader from "./StatisticsHeader";
import UsersByStatus from "./UsersByStatus";
import { Styles } from "./style";
import actions from "redux/actions";
import { useTheme } from "@mui/styles";
import ActiveRooms from "./ActiveRooms";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
const { setSubHeader } = actions;

const Statistics = (props) => {
  const {
    statistics,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const classes = Styles();
  const theme = useTheme();
  const initSearchParams = useMemo(() => {
    const thisMonth = getThisMonth();
    const startDate = Date.getManualISOString(thisMonth.startDate);
    const endDate = Date.getManualISOString(thisMonth.endDate);

    return { startDate, endDate };
  }, [isRTL]);

  const [searchParams, setSearchParams] = useState({ ...initSearchParams });

  const handleGetStatistics = () => {
    let body = {
      ...searchParams,
      startDateTime:
        searchParams.startDate != null
          ? searchParams.startDate
          : initSearchParams.startDate,
      endDateTime:
        searchParams.endDate != null
          ? searchParams.endDate
          : initSearchParams.endDate,
    };
    delete body.startDate;
    delete body.endDate;
    const params = {
      pageIndex: 1,
      pageSize: 25,
    };

    // window.dispatchWantedAction("GET_EVENTS_BY_APP_STATISTICS", { body });
    window.dispatchWantedAction("GET_EVENTS_BY_STATUS_STATISTICS", {
      body,
      params: 0,
    });
    window.dispatchWantedAction("GET_USERS_BY_STATUS_STATISTICS", {
      body,
      params,
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
          <Box className="statisticsTitleRange" style={{}}>
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
  }, [isRTL]);

  return (
    <Box className={classes.statistics}>
      <Box display="flex" className={classes.statisticsBox}>
        {/* <EventsByApp /> */}

        <EventsByStatus {...statisticsProps} />
      </Box>
      {/* <Divider /> */}
      <UsersByStatus />
      {/* <Divider /> */}
      <ActiveRooms />
    </Box>
  );
};

export default Statistics;
