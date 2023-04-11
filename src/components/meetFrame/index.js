import React, { useEffect } from "react";

const jitsi_container = "jitsi-container";
const JitsiMeetComponent = (props) => {
  const startConference = () => {
    try {
      const element = document.getElementById(jitsi_container);
      // if (element) element.empty();
      const domain = props.domain;
      const options = {
        roomName: props.roomName,
        jwt: props.jwt,
        parentNode: document.getElementById(jitsi_container),
        height: "100%",
        width: "100%",
        // height: 600,
        // width: 1000,

        // interfaceConfigOverwrite: {
        //   filmStripOnly: false,
        //   SHOW_JITSI_WATERMARK: false,
        // },
        // configOverwrite: {
        //   disableSimulcast: false,
        // },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);
      api.on("readyToClose", () => {
        props.setOpen(false);
      });
      api.addEventListener("videoConferenceJoined", () => {});
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  };

  useEffect(() => {
    if (!props.open) return;
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, [props.open]);

  return (
    props.open && (
      <div
        id={jitsi_container}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    )
  );
};

export default JitsiMeetComponent;
