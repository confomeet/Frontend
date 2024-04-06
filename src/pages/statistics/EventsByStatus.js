import { Box, Grid, Typography } from "components/muiComponents";
import SelectDropdownFeild from "components/select/SelectDropdownFeild";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { getListItemsForDropDownMenu, handleNoValue } from "utils";

const EventsByStatus = () => {
  const { statistics } = useSelector((state) => state);

  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getModifiedEventsByStatusStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("STATISTICS.EVENTS_BY_STATUS.STATUS")]: handleNoValue(
        row.description
      ),
      [Object.translate("STATISTICS.EVENTS_BY_STATUS.COUNT")]: handleNoValue(
        row.value
      ),
    }));
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(statistics.EventsByStatusStatistics)) return;
      let paginatedData = pagination(
        statistics.EventsByStatusStatistics,
        pageSize,
        pageIndex
      );
      let modifiedEventsByStatusStatistics =
        getModifiedEventsByStatusStatistics(paginatedData?.requiredArr);
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedEventsByStatusStatistics
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [statistics.EventsByStatusStatistics, pageSize, pageIndex]);

  return (
    <Grid item xs={6} className="eventsByApp">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography className="subtitle">
          {Object.translate("STATISTICS.EVENTS_BY_STATUS.TITLE")}
        </Typography>
      </Box>
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
        customFooter={() => null}
      />
    </Grid>
  );
};

export default EventsByStatus;
