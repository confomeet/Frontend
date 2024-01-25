import React from "react";
import { Grid, Typography } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";
import { eventsStyles } from "../style";
import PageSubHeading from "videoComponents/typographyGeneral/PageSubHeading";
import Link from "components/link";

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
      [Object.translate("LABEL.RECORDING_PUBLIC_LINK")]: recoringLinkCell(row),
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

function recoringLinkCell(recording) {
  let status = null;
  switch (recording.status) {
    case 0: status = "RECORDING_STATUS_NAMES.RECORDING"; break;
    case 1: status = "RECORDING_STATUS_NAMES.RECORDED"; break;
    case 2: status = "RECORDING_STATUS_NAMES.UPLOADED"; break;
    case 3: status = "RECORDING_STATUS_NAMES.UPLOADING_FAILED"; break;
    default: {
      console.warn(`Recording status=${recording.status} is unrecognized. Perhaps API changed.`);
      status = "VALUE.NO_VALUE";
    }
  };

  if (status == "RECORDING_STATUS_NAMES.UPLOADED") {
    return <Link href={recording.videoPublicLink}>{ Object.translate("LABEL.DOWNLOAD") }</Link>;
  }

  return <>{ Object.translate(status) }</>;
}
