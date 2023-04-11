import {
  MiniArrowDropright,
  NoteIcon,
  ReminderIcon,
  RiAdminFill,
  SMSIcon,
  User,
  Video,
} from "components/icons";
import { Box, Typography } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { isEmail } from "redux/network/functions";
import ParticipantNote from "./ParticipantNote";
import ParticipantSMS from "./ParticipantSMS";
import { isEmiratesMobileNo } from "./Participants";
import SingleParticipantActions from "./SingleParticipantActions";

const { remindParticipant, addParticipantNoteDone } = actions;

const handleJoinMainMeeting = (event, participantId, userType, link) => {
  window.handleJoinMeeting(
    {
      ...event,
      participants: event.participants.filter((p) =>
        [p.userId, p.groupIn].includes(participantId)
      ),
    },
    link,
    userType
  );
};

const handleParticipantReminder = (id, body) => {
  window.dispatch(remindParticipant({ id, body }));
};

const getParticipantActions = ({
  event,
  participant,
  cabinsIds,
  meetings,
  switchNote,
  switchSMS,
  switchEmail,
}) => {
  let actions = [];
  if (participant.meetingLink)
    actions.push({
      icon: <Video className="ReminderIcon" />,
      onClick: () =>
        handleJoinMainMeeting(
          event,
          participant.userId,
          participant.userType,
          participant.meetingLink
        ),
      label: Object.translate("BUTTONS.JOIN"),
    });

  actions.push({
    label: Object.translate("BUTTONS.ADD_NOTE"),
    icon: <NoteIcon className="ReminderIcon" />,
    onClick: () => switchNote(participant.id),
  });

  if (isEmiratesMobileNo(participant.mobile))
    actions.push({
      label: Object.translate("BUTTONS.SEND_SMS"),
      icon: <SMSIcon className="ReminderIcon" />,
      onClick: () => switchSMS(participant.mobile),
    });

  if (isEmail(participant.email))
    actions.push({
      label: Object.translate("BUTTONS.SEND_EMAIL"),
      icon: <SMSIcon className="ReminderIcon" />,
      onClick: () => switchEmail(participant.email),
    });

  if (participant.remind)
    actions.push({
      label: Object.translate("BUTTONS.REMINDER"),
      icon: <ReminderIcon className="ReminderIcon" />,
      onClick: () =>
        handleParticipantReminder(participant.id, {
          email: participant.email,
        }),
    });

  return actions;
};

export default function SingleParticipant({
  participant,
  cabinsIds,
  event,
  ...props
}) {
  const { meetings } = useSelector((state) => state);
  const [openNote, switchNote] = useState(null);
  const [openSMS, switchSMS] = useState(null);
  const [openEmail, switchEmail] = useState(null);

  const [openInvestigation, switchInvestigationReport] = useState(false);

  useEffect(() => {
    (async () => {
      if (!meetings.AddedParticipantNote) return;
      switchNote(null);
      window.dispatch(addParticipantNoteDone({ data: false }));
    })();
  }, [meetings.AddedParticipantNote]);

  return (
    <>
      {openNote && <ParticipantNote open={openNote} setOpen={switchNote} />}
      {openSMS && (
        <ParticipantSMS open={openSMS} setOpen={switchSMS} type="sms" />
      )}
      {openEmail && (
        <ParticipantSMS open={openEmail} setOpen={switchEmail} type="email" />
      )}

      <Box className="sectionParty">
        <Box className="sectionPartyBox" style={{ display: "flex" }}>
          {props?.element?.childrenArr ? (
            <MiniArrowDropright
              onClick={() =>
                props?.setOpenPartiArr(
                  props?.openPartiArr === props?.element?.id
                    ? null
                    : props?.element?.id
                )
              }
            />
          ) : (
            <User className={participant.isModerator ? "checked" : ""} />
          )}
        </Box>
        <Box>
          <Box className="PartyDetails">
            <Typography className="PartyName">
              <span className={participant.isModerator ? "checked" : ""}>
                {`${participant.fullName}`}
              </span>
              <br />
            </Typography>
            {participant.email ? (
              <span className="PartyMail">{participant.email}</span>
            ) : (
              participant.mobile && (
                <span className="PartyMail">{participant.mobile}</span>
              )
            )}
          </Box>
        </Box>
        <Box
          className="ModerGrid"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {participant.isModerator && (
            <RiAdminFill className="isModeratorIcon" />
          )}
        </Box>
        <Box>
          <SingleParticipantActions
            actions={getParticipantActions({
              participant,
              cabinsIds,
              event,
              meetings,
              switchNote,
              switchSMS,
              switchEmail,
              switchInvestigationReport,
            })}
          />
        </Box>
      </Box>
    </>
  );
}
