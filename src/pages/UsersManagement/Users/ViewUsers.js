import Switcher from "components/materialComponents/Switcher";
import { Grid } from "components/muiComponents";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { getTableRowsAndColumns } from "redux/network/functions";

const {
  confirmAccount,
  completeConfirmAccount,
  lockAccount,
  completeLockAccount,
  unlockAccount,
  completeUnlockAccount,
} = actions;

export default function ViewUsers(props) {
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const { users } = useSelector((state) => state);

  const getRolesText = (roles = []) => {
    if (!Array.isArray(roles)) return [];
    const currentRoles = users.AllRoles.filter((r) => roles.includes(r.id));

    return currentRoles.map((r) => r.roleName).join(" - ");
  };

  const handleEmailConfirmation = (checked, id) => {
    if (!checked) return;
    window.dispatch(confirmAccount({ id, key: "Activate" }));
  };
  const handleEmailLock = (checked, id) => {
    if (checked) window.dispatch(lockAccount({ id, key: "Lock" }));
    else window.dispatch(unlockAccount({ id, key: "Unlock" }));
  };

  const getModifiedUsersData = (data) => {
    if (!data || !data.length) return [];

    let modifiedData = [];

    modifiedData = data.map((row) => ({
      ["I.D."]: row?.id,
      [Object.translate("LABEL.USERFULLNAME")]: row?.fullName,
      [Object.translate("LABEL.EMAIL")]: row?.email,
      [Object.translate("LABEL.PHONE")]: row?.phoneNumber,
      [Object.translate("LABEL.NAME")]: row?.userName,
      [Object.translate("LABEL.USERCONFIRMED")]: (
        <Switcher
          switchToggle={row?.confirmed}
          handleSwitchChange={(checked) =>
            handleEmailConfirmation(checked, row?.id)
          }
        />
      ),
      [Object.translate("LABEL.USERLOCKED")]: (
        <Switcher
          switchToggle={row?.locked}
          handleSwitchChange={(checked) => handleEmailLock(checked, row?.id)}
        />
      ),
      [Object.translate("LABEL.USERROLE")]: getRolesText(row?.roles),
      [Object.translate("LABEL.USER_GROUPS")]: Array.isFullArray(
        row?.userGroups
      )
        ? row?.userGroups.map((r) => r?.value).join(" - ")
        : "",
    }));
    return modifiedData;
  };

  useEffect(() => {
    (async () => {
      let modifiedUsersData = await getModifiedUsersData(
        users.searchUsersComplete.items
      );
      setTableData(await getTableRowsAndColumns(modifiedUsersData));
    })();
  }, [users.searchUsersComplete]);

  useEffect(() => {
    if (
      Object.isObjectEmpty(users.ConfirmedAccount) &&
      Object.isObjectEmpty(users.LockedAccount) &&
      Object.isObjectEmpty(users.UnlockedAccount)
    )
      return;

    props.handleSearchUsers();
    window.dispatch(completeConfirmAccount({}));
    window.dispatch(completeLockAccount({}));
    window.dispatch(completeUnlockAccount({}));
  }, [users.ConfirmedAccount, users.LockedAccount, users.UnlockedAccount]);

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
            handleView={props.onDetails}
            handleEdit={props.onEdit}
            handleAdd={props.onAdd}
            handleDelete={props.onDelete}
            pagination={true}
            count={users.searchUsersComplete.count}
            page={props.pageIndex}
            rowsPerPage={props.pageSize}
            handlePaginationChange={async ({ pageIndex, pageSize }) => {
              await props.setPageIndex(pageIndex - 1);
              await props.setPageSize(pageSize);
              props.handleSearchUsers(pageIndex - 1, pageSize);
            }}
            cellDoubleClick={props.handleRowDoubleClick}
          />
        </Grid>
      </Grid>
    </div>
  );
}
