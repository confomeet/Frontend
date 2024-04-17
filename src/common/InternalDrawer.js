import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
} from "../components/muiComponents";
import HorizontalCard from "components/horizontalCard/HorizontalCard";
import { useSelector } from "react-redux";
import SubEventsContainer from "../components/expandedItems/SubEventsContainer";
import {
  ArrowForwardIosIcon,
  AddIcon,
  ChevronLeft,
  ChevronRight,
} from "../components/icons";
import style from "./style";
import clsx from "clsx";
import { CameraVideoFill, CheckList, Check, Clock } from "../components/icons";
import { MeetingStatus } from "constantData";
import ToolTip from "components/toolTip/ToolTip";
import { getPotentialParticipants } from "utils";

export default function InternalDrawer(props, data) {
  const [selectedItem, setSelectedItem] = useState(
    Array.findElementInList(
      props.groupByList.list,
      "id",
      props.groupByList.selectedId
    ) || {}
  );

  const {
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);

  const relatedUsersIds = useMemo(
    () => props.relatedUsers.map((u) => u.id),
    [props.relatedUsers]
  );
  const [expanded, setExpanded] = useState(Object.isObjectEmpty(selectedItem));

  const { all, done, remaining } = useMemo(() => {
    let done = 0,
      remaining = 0;
    props.groupByList.displyList?.map((e) =>
      e.meetingStatus?.status === MeetingStatus.finished
        ? (done = done + 1)
        : (remaining = remaining + 1)
    );

    return { all: props.groupByList.displyList.length || 0, done, remaining };
  }, [props.groupByList.displyList]);

  useEffect(() => {
    setSelectedItem(
      Array.findElementInList(
        props?.groupByList?.list,
        "id",
        props?.groupByList?.selectedId
      ) || {}
    );
  }, [props?.groupByList?.list, props?.groupByList?.selectedId]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    props.setExpandArrows(false);
  };
  const classes = style();

  useEffect(() => {
    (async () => {
      if (!props.expandArrows) return;
      props?.groupByList?.list
        ?.filter((row) => row?.id === props?.groupByList?.selectedId)[0]
        ?.onClick();
      setExpanded(false);
    })();
  }, [props.expandArrows]);

  return (
    <Box
      sx={{
        padding: expanded ? "16px" : "0",
      }}
      className={clsx(classes.internalDrawer, "d-flex-column  ")}
    >
      {expanded ? (
        props.groupByList.list.map((item) => (
          <HorizontalCard
            data={item}
            onClick={() => {
              item.onClick && item.onClick();
              if (item.id !== -1) handleExpandClick();
            }}
            className={item.id === props.groupByList.selectedId ? "active" : ""}
          />
        ))
      ) : (
        <>
          <Box display="flex" alignItems="center">
            <IconButton className="backHeader" onClick={handleExpandClick}>
              <ChevronLeft />
            </IconButton>
            <Button
              disableElevation
              variant="contained"
              fullWidth
              endIcon={<CameraVideoFill />}
              className={clsx(classes.start, "d-flex between")}
              onClick={(e) => {
                if (!selectedItem || !selectedItem.meetingId) return;
                window.handleJoinMeeting({
                  ...selectedItem,
                  participants: getPotentialParticipants(
                    selectedItem,
                    relatedUsersIds,
                    authUser
                  ),
                });
              }}
            >
              <p>{Object.translate("LABEL.START")}</p>
            </Button>
          </Box>
          <Box className="all-details">
            <Box backgroundColor="#fff" padding="16px 8px" borderRadius="7px">
              <Box className="details-header">
                <div width="80%">
                  <Typography className="parent-tilte" variant="h4">
                    {selectedItem.topic}
                  </Typography>
                  <Typography variant="body2">
                    {selectedItem.subTopic}
                  </Typography>
                </div>
                <Box className="header-buttons">
                  <ToolTip
                    title={Object.translate("EVENTS.ADD_SUB_EVENT")}
                    placement="top"
                  >
                    <IconButton
                      className="back"
                      onClick={() => props.onAdd(props.groupByList.selectedId)}
                    >
                      <AddIcon className="add" />
                    </IconButton>
                  </ToolTip>
                  <IconButton className="back" onClick={handleExpandClick}>
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box marginBottom="6px" className="d-flex align-baseline  date">
                <Typography variant="subtitle">
                  {Date.displayDate(data.startDate)}
                </Typography>
                &nbsp; &nbsp;
                <Typography variant="subtitle">
                  {Date.displayDate(data.endDate)}
                </Typography>
              </Box>
              <Box className=" d-flex between">
                <div className="counter d-flex-column between  ">
                  <Typography className="d-flex center-content primary">
                    {Object.translate("FILTER.ALL")}
                  </Typography>
                  <div className="figures d-flex between align-baseline">
                    <span className="figure">{all}</span>
                    <span className="icon primary">
                      <CheckList />
                    </span>
                  </div>
                </div>
                <div className="counter d-flex-column between ">
                  <Typography className="d-flex center-content success">
                    {Object.translate("FILTER.DONE")}
                  </Typography>
                  <div className=" figures d-flex between align-baseline">
                    <span className="figure">{done}</span>
                    <span className="icon success">
                      <Check />
                    </span>
                  </div>
                </div>
                <div className="counter d-flex-column between  ">
                  <Typography className="d-flex center-content warning">
                    {Object.translate("FILTER.REMAINING")}
                  </Typography>
                  <div className=" figures d-flex between align-baseline">
                    <span className="figure">{remaining}</span>
                    <span className="icon warning">
                      <Clock />
                    </span>
                  </div>
                </div>
              </Box>
            </Box>
            <SubEventsContainer item={selectedItem} />
          </Box>
        </>
      )}
    </Box>
  );
}
