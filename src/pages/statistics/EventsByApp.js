import { Grid, Typography } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";

const EventsByApp = () => {
  const { statistics } = useSelector((state) => state);

  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const getModifiedEventsByAppStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("STATISTICS.EVENTS_BY_APP.ENTITY")]: handleNoValue(
        row.description
      ),
      [Object.translate("STATISTICS.EVENTS_BY_APP.COUNT")]: handleNoValue(
        row.value
      ),
    }));
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(statistics.EventsByAppStatistics)) return;
      let paginatedData = pagination(
        statistics.EventsByAppStatistics,
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
  }, [statistics.EventsByAppStatistics, pageSize, pageIndex]);

  return (
    <Grid item xs={6} className="eventsByApp">
      <Typography className="subtitle">
        <p>{Object.translate("STATISTICS.EVENTS_BY_APP.TITLE")}</p>
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

export default EventsByApp;
