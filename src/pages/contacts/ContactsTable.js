import { HiOutlinePhone } from "components/icons";
import { Button, Grid } from "components/muiComponents";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { getTableRowsAndColumns } from "redux/network/functions";

export default function ContactsTable(props) {
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [selectedObjIds, setSelectedObjIds] = useState([]);

  const getModifiedUsersData = (data) => {
    if (!data || !data?.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.NAME")]: row.displayName,
      [Object.translate("LABEL.EMAIL")]: row.email,

      [Object.translate("LABEL.MOBLIE")]: row.mobile,
      [Object.translate("LABEL.OFFICE_PHONE")]: row.office,
      [Object.translate("LABEL.CALL")]: (
        <Button
          startIcon={<HiOutlinePhone />}
          onClick={(e) => handleJoinToMeeting({ ...row })}
        ></Button>
      ),
    }));
    return modifiedData;
  };
  const handleEdit = () => {
    let selectedItem = props?.data?.items?.filter(
      (x) => x.id === selectedObjIds[0]
    )[0];
    props?.getContactRealtedInfo(selectedItem);
    props.setEditObj(selectedItem);
    if (Array.isFullArray(selectedItem?.file))
      props.handleGetContactImg(selectedItem?.file[0]?.id);
    props.switchAdd(false);
    props.switchEdit(true);
  };
  const handleRowDoubleClick = (rowData) => {
    if (!rowData) return;
    let selectedItem = props?.data?.items?.filter((x) => x.id === rowData)[0];
    props?.getContactRealtedInfo(selectedItem);
    props.setEditObj(selectedItem);
    if (Array.isFullArray(selectedItem?.file))
      props.handleGetContactImg(selectedItem?.file[0]?.id);
    props.switchAdd(false);
    props.switchEdit(true);
  };
  const handleJoinToMeeting = (row) => {
    let rowData = {
      name: row.displayName,
      email: row.email,
      mobile: row.mobile,
      id: row.id,
      userId: row.userId,
    };
    props.goToMeeting({ ...rowData });
  };

  useEffect(() => {
    (async () => {
      let modifiedUsersData = await getModifiedUsersData(props.data?.items);
      setTableData(await getTableRowsAndColumns(modifiedUsersData));
    })();
  }, [props.data]);

  return (
    <Grid container style={{ marginTop: "43px" }}>
      <FullTabel
        data={tableData.ROWS}
        columns={tableData.COLUMNS}
        selectableRows={false}
        singleRowSelect={true}
        DisableToolbar={true}
        setIDS={setSelectedObjIds}
        handleEdit={handleEdit}
        pagination={true}
        count={props?.data?.count}
        page={props.pageIndex}
        rowsPerPage={props.pageSize}
        handlePaginationChange={async ({ pageIndex, pageSize }) => {
          await props.setPageIndex(pageIndex - 1);
          await props.setPageSize(pageSize);
          props.handleGetMyContacts({
            ...props.searchParams,
            pageIndex: pageIndex - 1,
            pageSize,
          });
        }}
        cellDoubleClick={handleRowDoubleClick}
      />
    </Grid>
  );
}
