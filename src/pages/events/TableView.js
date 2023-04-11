import { MultipleUsers } from "components/icons";
import { Grid } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";

export default function TableView(props) {
  const { meetings } = useSelector((state) => state);
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [allEventsTableData, setAllEventsTableData] = useState({
    ROWS: [],
    COLUMNS: [],
  });

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedObjIds, setSelectedObjIds] = useState([]);

  const getModifiedUsersData = (data) => {
    if (!data || !data.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.TOPIC")]: row.topic,
      [Object.translate("LABEL.ORGANIZER")]: row.createdByName,
      [Object.translate("LABEL.MEETINGID")]: row.meetingId,
      [Object.translate("LABEL.START_DATE")]: Date.displayDate(row.startDate),
      [Object.translate("LABEL.END_DATE")]: Date.displayDate(row.endDate),
    }));
    return modifiedData;
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(props?.data)) return;
      let paginatedData = pagination(props?.data, pageSize, pageIndex);
      let modifiedMessageTemplateData = await getModifiedUsersData(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedMessageTemplateData
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
      let allEventsData = await getModifiedUsersData(props.data);
      setAllEventsTableData(await getTableRowsAndColumns(allEventsData));
    })();
  }, [props.data, pageIndex, pageSize]);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {Array.isArray(meetings.searchEventsDone) ? (
            <FullTabel
              data={tableData.ROWS}
              columns={tableData.COLUMNS}
              selectableRows={false}
              singleRowSelect={true}
              DisableToolbar={false}
              setIDS={setSelectedObjIds}
              handleView={() => props.handleViewDetails(selectedObjIds[0])}
              handleAdd={props.onAdd}
              handleDelete={props.onDelete}
              pagination={true}
              paginatedCount={tableData?.COUNT || 0}
              page={pageIndex}
              rowsPerPage={pageSize}
              handlePaginationChange={async ({ pageIndex, pageSize }) => {
                setPageSize(pageSize);
                setPageIndex(pageIndex - 1 > 0 ? pageIndex - 1 : 1);
              }}
              cellDoubleClick={props.handleViewDetails}
            />
          ) : (
            <FullTabel
              data={allEventsTableData.ROWS}
              columns={allEventsTableData.COLUMNS}
              selectableRows={false}
              singleRowSelect={true}
              DisableToolbar={true}
              setIDS={setSelectedObjIds}
              handleView={() => props.handleViewDetails(selectedObjIds[0])}
              handleAdd={props.onAdd}
              handleDelete={props.onDelete}
              pagination={true}
              count={meetings?.searchEventsDone?.count}
              page={props.pageNum}
              rowsPerPage={props.rowsPerPage}
              handlePaginationChange={async ({ pageIndex, pageSize }) => {
                await props.setPageNum(pageIndex - 1);
                await props.setRowsPerPage(pageSize);
              }}
              cellDoubleClick={props.handleViewDetails}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}
