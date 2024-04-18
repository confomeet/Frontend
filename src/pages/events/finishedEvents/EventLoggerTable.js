import { Grid } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useState } from "react";
import { getTableRowsAndColumnsSync } from "redux/network/functions";
import { handleNoValue } from "utils";
import PageSubHeading from "videoComponents/typographyGeneral/PageSubHeading";

const initTableData = {
  ROWS: [],
  COLUMNS: [],
  COUNT: 0,
};
const EventLoggerTable = ({logs, ...props}) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const getModifiedEventsByAppStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      [Object.translate("LABEL.DATE")]: handleNoValue(row.date),

      [Object.translate("LABEL.EVENT_INSTANCE")]: handleNoValue(row.text),
    }));
  };

  const tableData = (() => {
    if (!Array.isFullArray(logs)) return initTableData;
    const displayedLogs = logs.map((log) => ({
      date: Date.displayDate(log.eventTime, "MMM DD,YYYY  hh:mm:ss A"),
      text: `${log.userName}: ${log.status}`,
    }));

    let paginatedData = pagination(displayedLogs, pageSize, pageIndex);

    let modifiedEventsByAppStatistics = getModifiedEventsByAppStatistics(
      paginatedData?.requiredArr
    );

    let rowsAndColumnsData = getTableRowsAndColumnsSync(
      modifiedEventsByAppStatistics
    );

    return {
      ...rowsAndColumnsData,
      COUNT: paginatedData?.count,
    };
  })();


  return (
    <Grid item xs={12}>
      <PageSubHeading subHeading={Object.translate("LABEL.LOG")} />
      <FullTabel
        data={tableData?.ROWS || []}
        columns={tableData?.COLUMNS || []}
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

export default EventLoggerTable;
