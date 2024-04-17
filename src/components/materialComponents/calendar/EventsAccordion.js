import { CopyOutline, Video } from "components/icons";
import { IoIosInformationCircleOutline } from "components/icons";
import { Box, Button, Divider, Typography } from "components/muiComponents";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { handleNotification } from "redux/network/functions";
import { getPotentialParticipants } from "utils";
import calendarStyle from "./style";

function EventDetails({
  data = {},
  dataArr,
  parentEvent,
  joinMeeting,
  ...props
}) {
  const {
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);

  const relatedUsersIds = useMemo(
    () => props.relatedUsers?.map((u) => u.id),
    [props.relatedUsers]
  );

  if (props.selectedEvent !== props.event.id) return null;

  return (
    <Box
      style={{
        width: "100%",
        border: "1px dashed #D5D5D5",
        padding: "5px 10px",
        borderRadius: "0 0 5px 5px",
      }}
    >
      <Box width="100%" display="flex">
        <Typography variant="subtitle">
          {Date.displayDate(props.event.startDate)}
        </Typography>
        &nbsp; &nbsp;
        <Typography variant="subtitle">
          {Date.displayDate(props.event.endDate)}
        </Typography>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          size="small"
          variant="text"
          className="light-btn"
          startIcon={<IoIosInformationCircleOutline />}
          onClick={async () => props.handleViewDetails(props.event.id)}
        ></Button>
        <Button
          size="small"
          variant="text"
          startIcon={<Video />}
          className="light-btn"
          onClick={(e) => {
            if (!props.event || !props.event.meetingId) return;
            window.handleJoinMeeting({
              ...props.event,
              participants: getPotentialParticipants(
                props.event,
                relatedUsersIds,
                authUser
              ),
            });
          }}
        ></Button>
        <Button
          size="small"
          variant="text"
          className="light-btn"
          startIcon={<CopyOutline />}
          onClick={async () => {
            await navigator.clipboard.writeText(data.invitationText);
            handleNotification({
              message: Object.translate("LABEL.INVETATION_CLIPBOARD"),
              success: true,
            });
          }}
        ></Button>
      </Box>
    </Box>
  );
}
export default function EventsAccordion(props) {
  const calendarClasses = calendarStyle();
  const [selectedEvent, setOpenAdvanceInfo] = useState(null);

  if (!props.isSmallScreen) return null;
  if (!props.events) return null;

  return (
    <Box className={calendarClasses.calendarCard}>
      {props.events?.eventsGroup?.map((ev) => (
        <>
          <Box
            className={calendarClasses.EventTitleBox}
            onClick={() => setOpenAdvanceInfo(ev.id)}
          >
            <Divider orientation="horizontal" />
            <Typography className={calendarClasses.EventTitle}>
              {ev.topic}
            </Typography>
          </Box>
          <Box className={calendarClasses.EventDetails}>
            <EventDetails
              className={calendarClasses.EventInfo}
              selectedEvent={selectedEvent}
              event={ev}
              {...props}
            />
          </Box>
        </>
      ))}
    </Box>
  );
}
