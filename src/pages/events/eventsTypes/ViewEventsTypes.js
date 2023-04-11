import { Grid, Box } from "components/muiComponents";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";

import { getTableRowsAndColumns } from "redux/network/functions";
import { pagination } from "components/shared/utils";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
const { setSubHeader } = actions;

export default function ViewEventsTypes(props) {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { meetings } = useSelector((state) => state);
  const getModifiedMessageTemplateData = (data) => {
    if (!data || !data.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.TITLE")]: row.value,
    }));
    return modifiedData;
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(meetings.getEventsTypesDone)) return;
      let paginatedData = pagination(
        meetings.getEventsTypesDone,
        pageSize,
        pageIndex
      );
      let modifiedMessageTemplateData = await getModifiedMessageTemplateData(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedMessageTemplateData
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [meetings.getEventsTypesDone, pageIndex, pageSize]);
  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: <PageHeading />,
        })
      );
    })();
  }, [isRTL]);
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <FullTabel
            data={tableData.ROWS}
            columns={tableData.COLUMNS}
            selectableRows={true}
            DisableToolbar={true}
            setIDS={props.setSelectedObjIds}
            handleEdit={props.onEdit}
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}
