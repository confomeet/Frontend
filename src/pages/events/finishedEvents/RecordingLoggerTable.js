import { Grid, Typography } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";
import { eventsStyles } from "../style";
import PageSubHeading from "videoComponents/typographyGeneral/PageSubHeading";

const initTableData = {
  ROWS: [],
  COLUMNS: [],
  COUNT: 0,
};

const RecordingLoggerTable = (props) => {
  const classes = eventsStyles();
  const [tableData, setTableData] = useState(initTableData);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const getModifiedEventsByAppStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      [Object.translate("LABEL.RECORDING_DATE")]: Date.displayDate(
        row.createdDate,
        "MMM DD,YYYY  hh:mm:ss A"
      ),
      [Object.translate("LABEL.RECORDING_NAME")]: handleNoValue(
        row.recordingfileName
      ),
      [Object.translate("LABEL.RECORDING_SIZE")]: handleNoValue(row.fileSize),
      [Object.translate("LABEL.RECORDING_PATH")]: handleNoValue(row.filePath),
    }));
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(props.recordingLogs))
        return setTableData(initTableData);
      let paginatedData = pagination(props.recordingLogs, pageSize, pageIndex);
      let modifiedEventsByAppStatistics = getModifiedEventsByAppStatistics(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedEventsByAppStatistics
      );
      setTableData({
        ...rowsAndColumnsData,
        COUNT: paginatedData?.count,
      });
    })();
  }, [props.recordingLogs]);
  return (
    <Grid item xs={12}>
      <PageSubHeading subHeading={Object.translate("LABEL.RECORDING_LOG")} />
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

export default RecordingLoggerTable;
