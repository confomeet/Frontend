import React, { useMemo, useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Card,
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  CardHeader,
  IconButton,
} from "components/muiComponents";
import ToolTip from "../toolTip/ToolTip";
import { cardStyle } from "./style";
import ButtonList from "../onHoverButtonList/index";
import {
  Minus,
  CopyOutline,
  PenEdit,
  MoreVertical,
  Video,
  View,
  User,
  Calendar,
  Description,
  Participants as ParticipantsIcon,
  Flag,
  AiOutlineArrowsAlt,
  AiOutlineInfoCircle,
  EditIcon,
  MdOutlineEdit,
} from "../icons";
import Participants from "./Participants";
import clsx from "clsx";
import { DisplayType as MeetingsDisplayType } from "constantData";
import { handleNotification } from "redux/network/functions";
import { getPotentialParticipants } from "utils";

const getActions = (props, data) => [
  {
    icon: <View />,
    onClick: () => props.handleViewDetails && props.handleViewDetails(data.id),
    name: Object.translate("BUTTONS.VIEW"),
    hide: false,
  },

  {
    icon: <PenEdit />,
    onClick: () => props.onEdit && props.onEdit(data.id),
    name: Object.translate("BUTTONS.EDIT"),
    hide: false, //new Date(data.startDate).getTime() < new Date().getTime(),
  },
];

export default function MiniMeetingsCard({
  data = {},
  dataArr,
  parentEvent,
  joinMeeting,
  ...props
}) {
  const classes = cardStyle();
  const {
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);
  const [expandInfo, setexpandInfo] = useState(false);
  const relatedUsersIds = useMemo(
    () => props.relatedUsers.map((u) => u.id),
    [props.relatedUsers]
  );
  const handleExpand = async (id) => {
    await props.setView("grid");
    const nextView = "group";
    await props.handleGroupByChange(nextView);
    await props.setGroupByList((prevState) => ({
      ...prevState,
      selectedId: id,
    }));
    await props?.groupByList?.list
      ?.filter((row) => row?.id === id)[0]
      ?.onClick();
    props.setExpandArrows(true);
  };

  const HeaderActions = () => {
    return (
      <div
        className={
          props.view === MeetingsDisplayType.calendar
            ? classes.calenderHeaderActionButtons
            : classes.cardMiniActionButtons
        }
      >
        {/* {props.view === MeetingsDisplayType.calendar ? (
          <> */}
        {(data.byMe || props.allEvents) && (
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={() => props.onEdit && props.onEdit(data.id)}
          >
            <MdOutlineEdit />
          </IconButton>
        )}
        <IconButton
          color="primary"
          aria-label="open drawer"
          onClick={() => props.handleViewDetails(data.id)}
        >
          <AiOutlineInfoCircle />
        </IconButton>
        {data?.subEventCount > 0 && (
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={() => handleExpand(data.id)}
          >
            <AiOutlineArrowsAlt />
          </IconButton>
        )}
        {/* </>
        ) : (
          <></>
        )} */}
      </div>
    );
  };

  return (
    <Card
      elevation={0}
      sx={{ minWidth: 275 }}
      className={classes.miniCard}
    >
      <Box
        className={clsx(
          data.subEventCount > 0 ? "primary " : "white",
          "order d-flex center-content"
        )}
      >
        {data.subEventCount > 0 ? (
          <Flag className="main-event" />
        ) : (
          `${data.orderNo}`
        )}
      </Box>
      <Box onClick={() => setexpandInfo(!expandInfo)}>
        <div className="header-wrap">
          <CardHeader
            action={HeaderActions()}
            title={data.topic}
            subheader={
              parentEvent ? (
                <>{parentEvent.topic || Object.translate("VALUE.NO_VALUE")}</>
              ) : (
                <>&nbsp;</>
              )
            }
            style={{ position: "relative" }}
          />
        </div>
        <Divider />
        <CardContent>
          <Box marginBottom="6px" className="d-flex align-baseline  date">
            <Calendar />
            <Typography variant="subtitle">
              {Date.displayDate(data.startDate)}
            </Typography>
            -
            <Typography variant="subtitle">
              {Date.displayDate(data.endDate)}
            </Typography>
          </Box>
          <Box marginBottom="6px" display="flex">
            <User />
            <Typography variant="subtitle">{data.organizer || ""}</Typography>
          </Box>
        </CardContent>
      </Box>
      {expandInfo && (
        <Box>
          <CardContent>
            <Box marginBottom="6px" className="d-flex align-baseline  ">
              <ToolTip title="deee" placement="top">
                <ParticipantsIcon />
              </ToolTip>
              <Participants participants={data.participants || []} />
            </Box>

            <Box marginBottom="6px" className="d-flex align-baseline  ">
              <Description />

              <Typography variant="subtitle">
                {data.description || ""}
              </Typography>
            </Box>
          </CardContent>
          <CardActions className="between  ">
            <Button
              size="small"
              variant="text"
              startIcon={<Video />}
              className="light-btn medium-btn"
              onClick={(e) => {
                if (!data || !data.meetingId) return;
                window.handleJoinMeeting({
                  ...data,
                  participants: getPotentialParticipants(
                    data,
                    relatedUsersIds,
                    authUser
                  ),
                });
              }}
            >
              {Object.translate("LABEL.JOIN")}
            </Button>
            <Button
              size="small"
              variant="text"
              className="light-btn medium-btn "
              startIcon={<CopyOutline />}
              onClick={async () => {
                await navigator.clipboard.writeText(data.invitationText);
                handleNotification({
                  message: Object.translate("LABEL.INVETATION_CLIPBOARD"),
                  success: true,
                });
              }}
            >
              {Object.translate("LABEL.COPY_INVITE")}
            </Button>
          </CardActions>
        </Box>
      )}
    </Card>
  );
}
