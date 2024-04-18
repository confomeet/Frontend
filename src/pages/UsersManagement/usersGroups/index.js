import { IoArrowBack } from "components/icons";
import { Box, Typography } from "components/muiComponents";
import { DataActions as UserGroupsActions } from "constantData";
import { UsersGroupsContext } from "contextProviders";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import UsersGroups from "./UsersGroups";
import ToolTip from "components/toolTip/ToolTip";

import UsersGroupsHeader from "./components/UsersGroupsHeader";
const initSearchParams = {
  text: "",
  groupName: "",
};
const UsersGroupsProvider = () => {
  const {
    usersgroups,
    settingsReducer: {
      settings: {
        authUser,
      },
    },
  } = useSelector((state) => state);
  const [mainView, switchMainView] = useState(true);
  const [addToggle, switchAdd] = useState(false);
  const [editToggle, switchEdit] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchParams, setSearchParams] = useState(initSearchParams);
  const [selectedObj, setSelectedObj] = useReducer((initState, data) => {
    return data ? data : null;
  }, null);

  const handleToogle = (action) => {
    switchMainView(action === UserGroupsActions.mainView);
    switchAdd(action === UserGroupsActions.add);
    switchEdit(action === UserGroupsActions.edit);
    if (action === UserGroupsActions.mainView) {
      setSelectedObj(null);
      setPageSize(10);
      setPageIndex(1);
      setSearchParams(initSearchParams);
    }
  };

  const handleGetUsersGroups = async (
    reset = false,
    page = pageIndex,
    rowsPerPage = pageSize
  ) => {
    let params = {
      text: searchParams?.text,
      groupName: searchParams?.groupName,
    };
    if (!params?.text || reset) delete params?.text;
    if (!params?.groupName || reset) delete params?.groupName;
    window.dispatchWantedAction(
      "GET_USERS_GROUPS",
      params
        ? {
            customHeaders: {
              pageSize: rowsPerPage,
              pageIndex: page,
            },
            params,
          }
        : {
            customHeaders: {
              pageSize: rowsPerPage,
              pageIndex: page,
            },
          }
    );
  };

  const handleGetUsersGroupById = (groupId) => {
    if (!groupId) return;
    let params = {
      groupId,
    };
    window.dispatchWantedAction("GET_USERS_GROUP_BY_ID", {
      params,
    });
  };

  const handleDeleteUsersGroup = (groupId) => {
    let params = {
      groupId,
    };
    window.dispatchWantedAction("DELETE_USERS_GROUPS", {
      params,
    });
  };

  const handleSearchParamsChange = (key, value) => {
    setSearchParams((prevState) => ({ ...prevState, [key]: value }));
  };

  const clearSearchParams = () => {
    setSearchParams(initSearchParams);
    setPageSize(10);
    setPageIndex(1);
    handleGetUsersGroups(true, 1, 10);
  };

  useEffect(() => {
    (async () => {
      if (mainView)
        return window.dispatchWantedAction("SET_SUB_HEADER", {
          subHeader: <UsersGroupsHeader handleToogle={handleToogle} />,
        });
      return window.dispatchWantedAction("SET_SUB_HEADER", {
        subHeader: (
          <Box className="titleMainGrid">
            <Box className="titleBox">
              <Typography className="titleTypography">
                {Object.translate(
                  addToggle ? "LABEL.ADD_USERS_GROUP" : "LABEL.EDIT_USERS_GROUP"
                )}
              </Typography>
            </Box>
            <ToolTip title={Object.translate("BUTTONS.BACK")} placement="top">
              <Box
                className="titleIconBox"
                onClick={() => handleToogle(UserGroupsActions.mainView)}
              >
                <IoArrowBack className="leftArrowBack" />
              </Box>
            </ToolTip>
          </Box>
        ),
      });
    })();
  }, [mainView, addToggle, editToggle]);

  useEffect(() => {
    handleToogle(UserGroupsActions.mainView);
    handleGetUsersGroups(true);
  }, [authUser]);

  return (
    <UsersGroupsContext.Provider
      value={{
        mainView,
        handleGetUsersGroups,
        handleSearchParamsChange,
        clearSearchParams,
        pageIndex,
        setPageIndex,
        pageSize,
        setPageSize,
        addToggle,
        editToggle,
        searchParams,
        handleToogle,
        setSelectedObj,
        selectedObj,
        handleGetUsersGroupById,
        handleDeleteUsersGroup,
      }}
    >
      <UsersGroups />
    </UsersGroupsContext.Provider>
  );
};

export default UsersGroupsProvider;
