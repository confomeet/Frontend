import { Grid, Typography } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";
import { shouldIgnoreDataUpdate } from "./utils";

const ActiveRooms = () => {
  const { statistics } = useSelector((state) => state);

  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const getModifiedEventsByAppStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("STATISTICS.ACTIVE_ROOMS.MEETING_ID")]: handleNoValue(
        row.meetingId
      ),
      [Object.translate("STATISTICS.ACTIVE_ROOMS.TOPIC")]: handleNoValue(
        row.topic
      ),
    }));
  };

  useEffect(() => {
    (async () => {
      if (shouldIgnoreDataUpdate(statistics.getActiveRoomsStatisticsComplete.items, tableData))
        return;
      let paginatedData = pagination(
        statistics.getActiveRoomsStatisticsComplete,
        pageSize,
        pageIndex
      );
      let modifiedEventsByAppStatistics = getModifiedEventsByAppStatistics(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedEventsByAppStatistics
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [statistics.getActiveRoomsStatisticsComplete, pageSize, pageIndex]);

  return (
    <Grid item xs={6} className="eventsByApp">
      <Typography className="subtitle">
        {Object.translate("STATISTICS.ACTIVE_ROOMS.TITLE")}
      </Typography>
      <FullTabel
        data={tableData.ROWS}
        columns={tableData.COLUMNS}
        selectableRows={false}
        pagination={true}
        paginatedCount={tableData?.COUNT || 0}
        page={pageIndex}
        rowsPerPage={pageSize}
        handlePaginationChange={async ({ pageIndex, pageSize }) => {
          setPageSize(pageSize);
          setPageIndex(pageIndex - 1 > 0 ? pageIndex - 1 : 1);
        }}
      />
    </Grid>
  );
};

export default ActiveRooms;
