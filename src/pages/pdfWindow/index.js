import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ResizableDraggableDialog from "components/dialogs/ResizableDraggableDialog";

const initMeetingProps = {
  base64: null,
  open: false,
};
const PDFFrame = () => {
  const { base64PDF } = useSelector((state) => state.settingsReducer.settings);
  const [meetingProps, setMeetingProps] = useState(initMeetingProps);

  useEffect(() => {
    (async () => {
      if (!base64PDF) return;
      setMeetingProps({
        base64: base64PDF,
        open: true,
      });
    })();
  }, [base64PDF]);
  return (
    <ResizableDraggableDialog
      open={meetingProps.open}
      setOpen={(open) => {
        setMeetingProps((prevState) => ({ ...prevState, open }));
      }}
    >
      <iframe
        title={"PDF Viewer"}
        src={meetingProps.base64}
        height="100%"
        width="100%"
      />
    </ResizableDraggableDialog>
  );
};

export default PDFFrame;
