import { Box } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HandleUser0 from "./HandleUser0";
import clsx from "clsx";
import actions from "redux/actions";
import { getListItemsForDropDownMenu } from "utils";
import { UserSearchFields } from "./UserSearchFields";
import { UsersHeader } from "./UsersHeader";
import ViewUsers from "./ViewUsers";
import { userStyle } from "./style";
import { getModifiedUserGroups } from "utils";

const { fetchAllRoles, setSubHeader, searchUsers } = actions;

const Users = () => {
  const classes = userStyle();
  const {
    settingsReducer: {
      settings: { isRTL },
    },
    users,
    usersgroups,
  } = useSelector((state) => state);
  const initSearchParams = {
    topic: null,
    roles: [],
    name: null,
    email: null,
    isLocked: false,
    isConfirmed: true,
    userGroups: [],
  };

  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [selectedObjIds, setSelectedObjIds] = useState([]);
  const [searchParams, setSearchParams] = useState({
    ...initSearchParams,
  });
  const [openFilters, setOpenFilters] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [allRoles, setAllRoles] = useState([]);
  const [usersgroupsArr, setUsersgroupsArr] = useState([]);
  const onAdd = () => {
    setToggleAdd(true);
    setToggleEdit(false);
    setToggleDetails(false);
    setEditObj(null);
  };
  useEffect(() => {
    const roles = getListItemsForDropDownMenu(
      users.AllRoles || [],
      "id",
      "roleName"
    );
    setAllRoles(roles);
  }, [users.AllRoles]);

  const onEdit = () => {
    setEditObj(
      users.searchUsersComplete.items.filter(
        (u) => u.id === selectedObjIds[0]
      )[0]
    );
    setToggleAdd(false);
    setToggleDetails(false);
    setToggleEdit(true);
  };
  const handleRowDoubleClick = (rowData) => {
    if (!rowData) return;

    setEditObj(
      users.searchUsersComplete.items.filter((u) => u.id === rowData)[0]
    );
    setToggleAdd(false);
    setToggleDetails(false);
    setToggleEdit(true);
  };
  const onView = () => {
    setToggleAdd(false);
    setToggleEdit(false);
    setToggleDetails(false);
    setEditObj(null);
    setSearchParams(initSearchParams);
    setPageSize(10);
    setPageIndex(1);
  };

  const handleSearchParamsChange = (key, value) =>
    setSearchParams((prevState) => ({ ...prevState, [key]: value }));

  const handleSearchUsers = async (
    page = pageIndex,
    rowsPerPage = pageSize
  ) => {
    const body = {
      userType: searchParams?.roles,
      text: searchParams?.topic,
      name: searchParams?.name,
      email: searchParams?.email,
      isLocked: searchParams?.isLocked,
      isConfirmed: searchParams?.isConfirmed,
      userGroups: searchParams?.userGroups,
      pageSize: rowsPerPage,
      pageIndex: page,
    };
    window.dispatch(searchUsers({ body }));
  };
  useEffect(() => {
    window.dispatch(fetchAllRoles());
    handleSearchUsers();
    window.dispatchWantedAction("GET_USERS_GROUPS", {
      customHeaders: {
        pageSize: 100,
        pageIndex: 1,
      },
    });
  }, [isRTL]);

  const clearSearchParams = () => {
    setSearchParams(initSearchParams);
    setPageSize(10);
    setPageIndex(1);
    const body = {
      userType: [],
      text: null,
      name: null,
      email: null,
      userGroups: [],
      isLocked: initSearchParams?.isLocked,
      isConfirmed: initSearchParams?.isConfirmed,
      pageSize: 10,
      pageIndex: 1,
    };
    window.dispatch(searchUsers({ body }));
  };

  const getHandleUsersProps = () => ({
    onAdd,
    onEdit,
    onView,
    toggleAdd,
    setToggleAdd,
    toggleEdit,
    setToggleEdit,
    toggleDetails,
    setToggleDetails,
    editObj,
    setEditObj,
    selectedObjIds,
    setSelectedObjIds,
    handleSearchUsers,
    handleSearchParamsChange,
    setOpenFilters,
    openFilters,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    allRoles,
    searchParams,
    clearSearchParams,
    handleRowDoubleClick,
    usersgroupsArr,
  });
  useEffect(() => {
    if (openFilters) return;
    setSearchParams(initSearchParams);
  }, [openFilters]);

  useEffect(() => {
    (async () => {
      if (toggleAdd || toggleEdit) return;
      window.dispatch(
        setSubHeader({
          subHeader: <UsersHeader {...getHandleUsersProps()} />,
        })
      );
    })();
  }, [isRTL, searchParams, openFilters, toggleAdd, toggleEdit]);

  useEffect(() => {
    (async () => {
      if (!Array.isFullArray(usersgroups.getUsersGroupsComplete?.items))
        return setUsersgroupsArr([]);

      setUsersgroupsArr(
        getModifiedUserGroups(usersgroups.getUsersGroupsComplete?.items)
      );
    })();
  }, [usersgroups.getUsersGroupsComplete]);

  return (
    <>
      <Box className={classes.rootUserManagement}>
        {toggleAdd || toggleEdit ? (
          <HandleUser0 {...getHandleUsersProps()} />
        ) : (
          <>
            <Box
              className={clsx(classes.usersBox, "d-flex-column")}
              style={{ height: "fit-content !important" }}
            >
              <UserSearchFields {...getHandleUsersProps()} />
            </Box>

            <ViewUsers {...getHandleUsersProps()} />
          </>
        )}
      </Box>
    </>
  );
};

export default Users;
