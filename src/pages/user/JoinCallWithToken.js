import { Box } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchQueries, joinByMeetingLink } from "utils";

import actions from "../../redux/actions";

const { joinMeetingByUserId, joinMeetingByUserIdDone } = actions;

function JoinCall() {
  const { id, uuid } = useParams();
  const { meetings } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { redirect, partyid: partyId } = useMemo(() => getSearchQueries(), []);

  useEffect(() => {
    if (!id || !uuid) return;
    let participants_group = localStorage.getItem("participants_group");
    if (participants_group) {
      participants_group = JSON.parse(participants_group);
      participants_group = participants_group.map((p) => ({
        userId: p.userId,
        fullName: p.fullName,
        email: p.email,
        partyId: p.partyId,
      }));
    }
    let params = {};
    if (partyId) params.partyId = partyId;
    dispatch(
      joinMeetingByUserId({
        params,
        pathParams: { id, uuid },
        body: { attendees: participants_group || [] },
      })
    );
  }, []);

  useEffect(() => {
    if (!meetings.joinMeetingByUserIdDone) return;
    const result = meetings.joinMeetingByUserIdDone.result || null;
    if (result) {
      if (redirect === "0") {
        joinByMeetingLink({
          link: result,
          shouldSignout: false,
          shouldRedirect: true,
        });
        return;
      }
      window.location.href = result;
      return;
    }
    dispatch(joinMeetingByUserIdDone({ data: null }));
  }, [meetings.joinMeetingByUserIdDone]);

  return (
    <Box
      sx={{ width: "100%" }}
      className="d-flex   cricle-corner center-content "
    >
      <Box className="loginContent">
        <Box className="lilacLogo">
          <img src={`${window.officialLogo}`} alt="lilacLogo" />
        </Box>
      </Box>
    </Box>
  );
}

export default JoinCall;
