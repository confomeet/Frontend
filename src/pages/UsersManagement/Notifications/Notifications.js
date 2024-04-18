import clsx from "clsx";
import { CancelIcon, CheckCircleIcon, ImLink } from "components/icons";
import { Box } from "components/muiComponents";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/actions";
import { getTableRowsAndColumns } from "redux/network/functions";
import { useStyles } from "styles/generalStyle";
import NotificationHeader from "./NotificationHeader";
import NotificationSearchFields from "./NotificationSearchFields";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";

const { getNotifications, setSubHeader } = actions;

function Notifications(props) {
  const classes = useStyles();

  const initSearchParams = {
    topic: "",
    name: "",
    email: "",
  };

  const {
    settingsReducer: {
      settings: { authUser },
    },
    notifications,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useState({
    ...initSearchParams,
  });
  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [openFilters, setOpenFilters] = useState(false);

  const handleSearchParamsChange = (key, value) =>
    setSearchParams((prevState) => ({ ...prevState, [key]: value }));
  const handleGetNotificatios = (pIdx = pageNum, pSize = rowsPerPage) => {
    const body = {
      text: searchParams.topic || null,
      name: searchParams.name || null,
      email: searchParams.email || null,
      pageSize: pSize,
      pageIndex: pIdx,
    };
    dispatch(
      getNotifications({
        body,
        isAdmin: props.allNotifications,
      })
    );
  };

  const clearSearchParams = () => {
    setSearchParams(initSearchParams);
    const body = {
      text: null,
      name: null,
      email: null,
      pageSize: rowsPerPage,
      pageIndex: pageNum,
    };
    dispatch(
      getNotifications({
        body,
        isAdmin: props.allNotifications,
      })
    );
  };

  const getProps = () => ({
    handleGetNotificatios,
    handleSearchParamsChange,
    setOpenFilters,
    openFilters,
    searchParams,
    setSearchParams,
    clearSearchParams,
  });
  const getModifiedMessageTemplateData = (data) => {
    if (!data || !data.length) return [];
    let modifiedData = [];
    modifiedData = data.map((row) => ({
      ["I.D."]: row.id,
      [Object.translate("LABEL.RECEIVER")]: row.recipientName,
      [Object.translate("LABEL.TO_ADDRESS")]: row.toAddress,
      [Object.translate("LABEL.TITLE")]: row.notificationTitle,
      [Object.translate("LABEL.TITLE")]: row.notificationTitle,
      [Object.translate("LABEL.DATE")]: Date.displayDate(row.createdAt),
      [Object.translate("LABEL.MESSAGE")]: row.notificationBody,
      [Object.translate("LABEL.LINK")]: (
        <a
          href={row.notificationLink}
          target="_blank"
          className={classes.clickHere}
        >
          <ImLink />
        </a>
      ),
      [Object.translate("LABEL.SENT")]:
        row.isSent === 1 ? (
          <CheckCircleIcon className={classes.green} />
        ) : (
          <CancelIcon className={classes.red} />
        ),
    }));
    return modifiedData;
  };

  useEffect(() => {
    (async () => {
      if (!authUser) return;
      handleGetNotificatios();
    })();
  }, [authUser, window.currentLocation.pathname]);

  useEffect(() => {
    (async () => {
      let modifiedMessageTemplateData = await getModifiedMessageTemplateData(
        notifications.getNotificationsComplete?.items
      );
      setTableData(await getTableRowsAndColumns(modifiedMessageTemplateData));
    })();
  }, [notifications.getNotificationsComplete]);

  useEffect(() => {
    window.dispatch(
      setSubHeader({
        subHeader: <PageHeading />,
      })
    );
  }, [authUser]);
  return (
    <Box className={classes.rootNotifications}>
      <Box
        className={clsx(classes.myUsers, "d-flex-column")}
        style={{ height: "fit-content !important" }}
      >
        <NotificationSearchFields {...getProps()} />
      </Box>
      <Box className={classes.rootNotificationsBox}>
        <FullTabel
          title={Object.translate("LABEL.NOTIFICATIONS")}
          data={tableData.ROWS}
          columns={tableData.COLUMNS}
          selectableRows={false}
          DisableToolbar={true}
          pagination={true}
          count={notifications.getNotificationsComplete?.count}
          page={pageNum - 1}
          rowsPerPage={rowsPerPage}
          handlePaginationChange={async ({ pageIndex, pageSize }) => {
            await setPageNum(pageIndex);
            await setRowsPerPage(pageSize);
            handleGetNotificatios(pageIndex - 1, pageSize);
          }}
        />
      </Box>
    </Box>
  );
}
export default Notifications;
