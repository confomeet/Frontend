import { Box, Grid } from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { DataActions as UserGroupsActions } from "constantData";
import { UsersGroupsContext } from "contextProviders";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { getUsersGroupByIdReq } from "redux/network/usersgroups";
import { handleNoValue } from "utils";
import { UsersGroupsSearchFields } from "./UsersGroupsSearchFields";

const initTableData = {
  ROWS: [],
  COLUMNS: [],
};

const TableView = () => {
  const contextProps = useContext(UsersGroupsContext);
  const {
    usersgroups,
    settingsReducer: {
      settings: { isRTL, authUser },
    },
  } = useSelector((state) => state);
  const [tableData, setTableData] = useState(initTableData);
  const [selectedObjIds, setSelectedObjIds] = useState([]);

  const onEdit = async (id) => {
    if (!Array.isFullArray(selectedObjIds) && !id) return;
    let filterId = id ? id : selectedObjIds[0];
    let selectedItem = usersgroups.getUsersGroupsComplete?.items?.filter(
      (item) => item.id === filterId
    )[0];
    let usersIdsGroup = await getUsersGroupByIdReq({
      groupId: filterId,
    });
    selectedItem["userIds"] = Array.isFullArray(usersIdsGroup?.data?.items)
      ? usersIdsGroup?.data?.items
      : [];
    contextProps?.setSelectedObj(selectedItem);
    contextProps?.handleToogle(UserGroupsActions.edit);
  };

  const onDelete = () => {
    if (!Array.isFullArray(selectedObjIds)) return;
    contextProps?.handleDeleteUsersGroup(selectedObjIds[0]);
  };

  const getModifiedData = (data) => {
    if (!data || !data.length) return [];
    return data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.GROUPNAME")]: handleNoValue(row.groupName),
      [Object.translate("LABEL.DESCRIPTION")]: handleNoValue(row.description),
      [Object.translate("LABEL.DATE")]: handleNoValue(
        row.createdAt.slice(0, 10)
      ),
    }));
  };
  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(usersgroups.getUsersGroupsComplete?.items))
        return setTableData(initTableData);
      let modifiedData = getModifiedData(
        usersgroups.getUsersGroupsComplete?.items
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(modifiedData);
      setTableData({
        ...rowsAndColumnsData,
      });
    })();
  }, [
    usersgroups.getUsersGroupsComplete,
    contextProps?.pageSize,
    contextProps?.pageIndex,
  ]);

  return (
    <Grid item xs={12}>
      <Box style={{ height: "fit-content !important" }}>
        <UsersGroupsSearchFields />
      </Box>
      <FullTabel
        data={tableData.ROWS}
        columns={tableData.COLUMNS}
        selectableRows={false}
        singleRowSelect={true}
        DisableToolbar={false}
        setIDS={setSelectedObjIds}
        handleEdit={onEdit}
        handleDelete={authUser?.rolesId.includes(1) ? onDelete : null}
        pagination={true}
        count={usersgroups?.getUsersGroupsComplete?.count || 0}
        page={contextProps?.pageIndex - 1}
        rowsPerPage={contextProps?.pageSize}
        handlePaginationChange={async ({ pageIndex, pageSize }) => {
          await contextProps.setPageIndex(pageIndex);
          await contextProps.setPageSize(pageSize);
          contextProps.handleGetUsersGroups(false, pageIndex - 1, pageSize);
        }}
        cellDoubleClick={(id) => onEdit(id)}
      />
    </Grid>
  );
};

export default TableView;
