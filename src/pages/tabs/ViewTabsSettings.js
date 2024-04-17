import clsx from "clsx";
import { Box, Grid } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { getTableRowsAndColumns } from "redux/network/functions";
import { useStyles } from "styles/generalStyle";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";

const { setSubHeader } = actions;
export default function ViewTabs(props) {
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { tabs } = useSelector((state) => state);
  const classes = useStyles();
  const getModifiedSideMenuTabsData = (data) => {
    if (!data || !data.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.TITLE")]: row.name,
      [Object.translate("LABEL.ORDER")]: row.tabOrder,
      [Object.translate("LABEL.LINK")]: row.link,
      [Object.translate("LABEL.TAB_PARENT_ID")]: row.parentId,
      [Object.translate("LABEL.ICON_NAME")]: row.iconString,
    }));
    return modifiedData;
  };

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(tabs.getAllTabsComplete)) return;
      let paginatedData = pagination(
        tabs.getAllTabsComplete,
        pageSize,
        pageIndex
      );
      let modifiedSideMenuTabsData = await getModifiedSideMenuTabsData(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedSideMenuTabsData
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [tabs.getAllTabsComplete, pageSize, pageIndex]);
  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: <PageHeading />,
        })
      );
    })();
  });
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <FullTabel
            data={tableData.ROWS}
            columns={tableData.COLUMNS}
            selectableRows={false}
            singleRowSelect={true}
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
            cellDoubleClick={props.handleRowDoubleClick}
          />
        </Grid>
      </Grid>
    </div>
  );
}
