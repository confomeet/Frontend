import { Box, Grid, Typography } from "components/muiComponents";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";

const EventsByStatus = () => {
  const { statistics } = useSelector((state) => state);

  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });

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
      const tableRecords = getModifiedEventsByStatusStatistics(statistics.EventsByStatusStatistics);
      const {ROWS, COLUMNS} = await getTableRowsAndColumns(tableRecords);
      setTableData({
        COUNT: tableRecords.length,
        ROWS,
        COLUMNS,
      });
    })();
  }, [statistics.EventsByStatusStatistics]);

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
        customFooter={() => null}
      />
    </Grid>
  );
};

export default EventsByStatus;
