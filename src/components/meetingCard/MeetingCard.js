import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "components/muiComponents";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  AiOutlineArrowsAlt,
  AiOutlineInfoCircle,
  DocumentIcon,
  MdOutlineEdit,
  Participants as ParticipantsIcon,
  PenEdit,
  View,
} from "../icons";
import Participants from "./Participants";
import { cardStyle } from "./style";
import ToolTip from "../toolTip/ToolTip";
import { DisplayType as MeetingsDisplayType } from "constantData";
import { FiCopy, FiUnlock, FiVideo } from "react-icons/fi";
import { BsFillPlayFill } from "components/icons";

import { ImListNumbered } from "react-icons/im";
import { MdOutlineEvent } from "react-icons/md";
import { VscEdit } from "react-icons/vsc";
import { handleNotification } from "redux/network/functions";
import {
  getPotentialParticipants,
  getTransaltion,
  patchMeetingId,
} from "utils";
import { useTheme } from "@mui/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function MeetingCard({
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const relatedUsersIds = useMemo(
    () => props.relatedUsers.map((u) => u.id),
    [props.relatedUsers]
  );

  return (
    <Card elevation={0} sx={{ minWidth: 275 }} className={classes.card}>
      <div className="header-wrap">
        <CardHeader
          title={data.topic}
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => props.handleViewDetails(data.id)}
        />
      </div>
      <Typography className={classes.cardSubTopic}> {data.subTopic}</Typography>
      <CardContent onClick={() => props.handleViewDetails(data.id)}>
        <Box
          marginBottom="8px"
          marginInlineStart="16px"
          className="d-flex align-center"
        >
          <Typography variant="subtitle">
            {Object.translate("LABEL.FROM")}
          </Typography>
          <Typography className="subtitleBold">
            {Date.displayDate(data.startDate)}
          </Typography>
        </Box>
        <Box
          marginBottom="8px"
          marginInlineStart="16px"
          className="d-flex align-center"
        >
          <Typography variant="subtitle">
            {Object.translate("LABEL.TO")}
          </Typography>

          <Typography className="subtitleBold" marginInlineEnd="16px">
            {Date.displayDate(data.endDate)}
          </Typography>
        </Box>

        {data?.meetingId ? (
          <Box
            marginBottom="8px"
            marginInlineStart="16px"
            className="d-flex align-center"
          >
            <Typography variant="subtitle">
              {Object.translate("LABEL.MEETINGID")}
              {": "}
            </Typography>
            <Typography className="subtitleBold">
              {patchMeetingId(data?.meetingId)}
            </Typography>
          </Box>
        ) : null}
        {/* {data?.password ? (
          <Box
            marginBottom="8px"
            marginInlineStart="16px"
            className="d-flex align-center"
          >
            <Typography variant="subtitle">
              {Object.translate("LABEL.PASS_CODE")}
              {": "}
            </Typography>
            <Typography className="subtitleBold">{data?.password} </Typography>
          </Box>
        ) : null} */}
        <Box
          marginBottom="8px"
          marginInlineStart="16px"
          className="d-flex align-baseline partyAvatarBox"
        >
          <Typography variant="subtitle">
            {Object.translate("LABEL.PARTICIPANTS")}
            {": "}
          </Typography>
          <Participants participants={data.participants || []} />
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Divider className="actionsDivider" />
        <Box className={classes.cardActionsButtons}>
          <>
            <ToolTip title={Object.translate("LABEL.JOIN")} placement="top">
              <Button
                size="small"
                variant="text"
                className="joinButton"
                startIcon={<FiVideo />}
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
              ></Button>
            </ToolTip>
            <Divider
              flexItem
              orientation="vertical"
              variant="middle"
              className="actionsDivider"
            />
            <ToolTip
              title={Object.translate("LABEL.COPY_INVITE")}
              placement="top"
            >
              <Button
                size="small"
                variant="text"
                className="copyOutlineButton"
                startIcon={<FiCopy />}
                onClick={async () => {
                  await navigator.clipboard.writeText(data.invitationText);
                  handleNotification({
                    message: Object.translate("LABEL.INVETATION_CLIPBOARD"),
                    success: true,
                  });
                }}
              ></Button>
            </ToolTip>
            <Divider
              flexItem
              orientation="vertical"
              variant="middle"
              className="actionsDivider"
            />
          </>

          {(data.byMe || props.allEvents || props.relatedUsers.length > 0) && (
            <>
              <ToolTip
                title={Object.translate("LABEL.EDIT_EVENT")}
                placement="top"
              >
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  onClick={() => props.onEdit && props.onEdit(data.id)}
                  className="editEventButton"
                >
                  <VscEdit />
                </IconButton>
              </ToolTip>
              <Divider
                flexItem
                orientation="vertical"
                variant="middle"
                className="actionsDivider"
              />
            </>
          )}

          <ToolTip title={Object.translate("LABEL.SHOW_EVENT")} placement="top">
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={() => props.handleViewDetails(data.id)}
              className="showEventButton"
            >
              <AiOutlineInfoCircle />
            </IconButton>
          </ToolTip>
        </Box>
      </CardActions>
    </Card>
  );
}
