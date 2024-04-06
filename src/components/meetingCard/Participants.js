import React from "react";
import clsx from "clsx";
import {
  Badge,
  Box,
  AvatarGroup,
  Avatar,
} from "../../components/muiComponents";
import Tooltip from "components/muiComponents/BootstrapTooltip";
import {
  ForwardIcon,
  BackICon,
  RiAdminFill,
  BsFlagFill,
} from "components/icons";
function stringAvatar(name) {
  if (!name) return "U";
  return {
    children: name.includes(" ")
      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
      : `${name.charAt(0)}`,
  };
}

const Participants = ({ participants }) => (
  <Box display="flex" width="100%">
    <AvatarGroup total={participants.length}>
      {participants.map(
        (p) => (
          <Box>
            {p.isModerator ? (
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                className={clsx(
                  p.participantStatus ? "participants" : "unActiveParticipants"
                )}
              >
                <Tooltip placement="top" title={p.fullName || ""}>
                  <Avatar {...stringAvatar(p.fullName)} />
                </Tooltip>
              </Badge>
            ) : (
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
                className={
                  p.participantStatus ? "participants" : "unActiveParticipants"
                }
              >
                <Tooltip placement="top" title={p.fullName || ""}>
                  <Avatar {...stringAvatar(p.fullName)} />
                </Tooltip>
              </Badge>
            )}
          </Box>
        )
      )}
    </AvatarGroup>
  </Box>
);

export default Participants;
