import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MeetFrame from "components/meetFrame";
import ResizableDraggableDialog from "components/dialogs/ResizableDraggableDialog";

import actions from "redux/actions";
const { openVideoFrame } = actions;

const initMeetingProps = {
  domain: null,
  roomName: null,
  jwt: null,
  open: false,
};
const LilacFrame = () => {
  const { link } = useSelector((state) => state.settingsReducer.settings);
  const [meetingProps, setMeetingProps] = useState(initMeetingProps);

  const getMeetingProps = (fullUrl) => {
    if (!fullUrl) return initMeetingProps;
    let values = fullUrl.split("/");
    const domain = values[2];
    values = values[3].split("?");
    const roomName = values[0];
    values = values[1].split("jwt=");
    const jwt = values[1];
    window.dispatch(openVideoFrame({ link: null }));

    return { domain, roomName, jwt, open: true, link: fullUrl };
  };
  useEffect(() => {
    (async () => {
      if (!link) return;
      const currentMeetingProps = getMeetingProps(link);
      setMeetingProps(currentMeetingProps);
    })();
  }, [link]);
  return (
    <ResizableDraggableDialog
      open={meetingProps.open}
      setOpen={(open) => {
        setMeetingProps((prevState) => ({ ...prevState, open }));
      }}
      handleOpenNewWindow={() => {
        window.open(meetingProps.link);
        setMeetingProps((prevState) => ({ ...prevState, open: false }));
      }}
    >
      <MeetFrame
        {...meetingProps}
        setOpen={(open) => {
          setMeetingProps((prevState) => ({ ...prevState, open }));
        }}
      />
    </ResizableDraggableDialog>
  );
};

export default LilacFrame;
