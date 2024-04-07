import {
  Box,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "components/muiComponents";
import { pagination } from "components/shared/utils";
import FullTabel from "components/table/Table";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTableRowsAndColumns } from "redux/network/functions";
import { handleNoValue } from "utils";

const UsersByStatus = (props) => {
  const {
    statistics,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);

  const [tableData, setTableData] = useState({ ROWS: [], COLUMNS: [] });
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [anchorEls, setAnchorEls] = useState([]);
  const handleClick = (index, event) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };
  const handleClose = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };
  const getModifiedUsersByStatusStatistics = (data) => {
    if (!data || !data.length) return [];
    return data.map((row, index) => ({
      ["I.D."]: row.id,
      [Object.translate("STATISTICS.USERS_BY_STATUS.MEETING_ID")]:
        handleNoValue(row.meetingId),
      [Object.translate("STATISTICS.USERS_BY_STATUS.TOPIC")]: handleNoValue(
        row.topic
      ),
      [Object.translate("STATISTICS.USERS_BY_STATUS.ONLINE_PARTICIPANTS")]: (
        <Box>
          <Typography
            sx={{ cursor: row.onlineParticipants ? "pointer" : "unset" }}
            onClick={(e) => handleClick(index, e)}
          >
            {handleNoValue(row.onlineParticipants)}
          </Typography>
          {Array.isFullArray(row.onlineParticipantsDetails) && (
            <Menu
              id={`menu-${index}`}
              anchorEl={anchorEls[index]}
              open={Boolean(anchorEls[index])}
              onClose={() => handleClose(index)}
              sx={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {row.onlineParticipantsDetails.map((row) => {
                return (
                  <MenuItem sx={{ display: "grid" }}>
                    <Typography>{row?.fullName}</Typography>
                    <Typography>{row?.email}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          )}
        </Box>
      ),

      [Object.translate("STATISTICS.USERS_BY_STATUS.ALL_PARTICIPANTS")]:
        handleNoValue(row.allParticipants),
    }));
  };

  // FIXME: this effect does not involve any synchronization with external system.
  // There is not sense in doing this with async/await calls. It should be refactored.
  useEffect(() => {
    (async () => {
      if (Object.isObjectEmpty(statistics.UsersByStatusStatistics)) return;
      if (!Array.isFullArray(statistics.UsersByStatusStatistics.items)) return;
      let paginatedData = pagination(
        statistics.UsersByStatusStatistics.items,
        pageSize,
        pageIndex
      );
      let modifiedUsersByStatusStatistics = getModifiedUsersByStatusStatistics(
        paginatedData?.requiredArr
      );
      let rowsAndColumnsData = await getTableRowsAndColumns(
        modifiedUsersByStatusStatistics
      );
      setTableData({
        COUNT: paginatedData?.count,
        ...rowsAndColumnsData,
      });
    })();
  }, [statistics.UsersByStatusStatistics, pageSize, pageIndex, anchorEls]);

  return (
    <Grid item xs={6} className="eventsByApp">
      <Typography className="subtitle">
        {Object.translate("STATISTICS.USERS_BY_STATUS.TITLE")}
      </Typography>
      <FullTabel
        data={tableData.ROWS}
        columns={tableData.COLUMNS}
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

export default UsersByStatus;
