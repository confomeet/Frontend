import incomingRing from "assets/ringTune.mp3";
import { HiOutlinePhone, ImPhoneHangUp, PhoneBusy } from "components/icons";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "components/muiComponents";
import ToolTip from "components/toolTip/ToolTip";
import { useInterval } from "hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { respondToCall } from "redux/signalR/eventsHandlers/Outgoing";
import { joinByMeetingLink } from "utils";
import telephoneRing from "../../assets/normal_ring.mp3";
import { alertStyle } from "./style";
const { setDirectPopupData } = actions;

const initNotification = {
  open: false,
  title: "",
  body: "",
  senderName: "",
  senderId: null,
  status: null,
  contactId: null,
};

const DirectCallPopup = () => {
  const classes = alertStyle();
  const {
    settingsReducer: {
      settings: { directPopup, authUser },
    },
    contacts,
  } = useSelector((state) => state);
  const [resNotify, setResNotify] = useState(null);
  const [beep, setBeep] = useState(null);
  const [showAnswerBtn, switchAnswerBtn] = useState(false);

  const handleClose = () => {
    window.dispatch(setDirectPopupData({ data: { open: false } }));
    switchAnswerBtn(false);
  };

  const handleConfirmJoin = () => {
    respondToCall({
      recieverId: `${directPopup?.senderId}`,
      status: 1,
    });
    joinByMeetingLink({
      link: directPopup?.notificationBody,
    });
    handleClose();
  };

  const handleDecline = () => {
    respondToCall({
      recieverId: `${
        directPopup?.isSender ? directPopup?.contactId : directPopup?.senderId
      }`,
      status: directPopup?.isSender ? 5 : 2,
    });
    window.dispatch(setDirectPopupData({ data: { ...initNotification } }));
  };

  const handleBusyUser = () => {
    respondToCall({
      recieverId: `${directPopup?.senderId}`,
      status: 3,
    });
    handleClose();
  };

  const palySound = (telefoneRing) => {
    if (telefoneRing) setBeep(new Audio(telephoneRing));
    else setBeep(new Audio(incomingRing));
  };

  useInterval(async () => {
    if (!directPopup?.open || !beep) return;
    beep.play();
  }, 3500);

  useEffect(() => {
    (async () => {
      if (!directPopup?.open) {
        beep?.pause();
        return;
      }

      palySound(directPopup?.isSender);
    })();
  }, [directPopup]);

  useEffect(() => {
    (async () => {
      if (!contacts.CallResponse) return;
      if (!authUser) return;
      switch (contacts.CallResponse.status) {
        case 1:
          joinByMeetingLink({
            link: contacts.CallResponse.notificationBody,
          });

          window.dispatch(
            setDirectPopupData({ data: { ...initNotification } })
          );
          return;
        case 2:
          setResNotify(Object.translate("LABEL.USER_DECLINE"));
          break;
        case 3:
          setResNotify(Object.translate("LABEL.USER_BUSY"));
          break;
        case 4:
          setResNotify(Object.translate("LABEL.NO_RESPONSE"));
          break;
        case 5:
          window.dispatch(
            setDirectPopupData({ data: { ...initNotification } })
          );
          return;
        default:
          return;
      }

      window.dispatch(
        setDirectPopupData({
          data: { ...directPopup, status: contacts.CallResponse.status },
        })
      );

      setTimeout(() => {
        window.dispatch(setDirectPopupData({ data: { ...initNotification } }));
      }, 3000);
    })();
  }, [authUser, contacts.CallResponse]);

  useEffect(() => {
    (async () => {
      if (!contacts.IncomingCall) return;
      switchAnswerBtn(true);
      window.dispatch(
        setDirectPopupData({
          data: { ...contacts.IncomingCall, open: true },
        })
      );
    })();
  }, [authUser, contacts.IncomingCall]);

  return (
    <div>
      <Dialog
        className={classes.directCall}
        open={directPopup?.open ? directPopup?.open : false}
        keepMounted
        onClose={(_, reason) => {
          if (reason === "backdropClick") return;
          handleClose();
        }}
        aria-describedby="alert-dialog-slide-description"
        disableEscapeKeyDown={true}
      >
        <DialogContent>
          <div className={classes.contentCenter}>
            <Box className={"callerName"}>{directPopup?.senderName}</Box>
            {directPopup?.status && directPopup?.status !== 1 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={classes.rejected}>
                  <PhoneBusy />
                </div>
                <Typography>{resNotify}</Typography>
              </Box>
            ) : (
              <div className={classes.pulse}>
                <Avatar className={"avatar"}>
                  {directPopup?.senderName?.substring(0, 2).toUpperCase()}
                </Avatar>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Box className={"btnBox"}>
            <ToolTip
              title={Object.translate("BUTTONS.DECLINE_CALL")}
              placement="top"
            >
              <Button
                variant="contained"
                disableElevation
                className="declineButton"
                onClick={handleDecline}
              >
                <ImPhoneHangUp />
              </Button>
            </ToolTip>
            {showAnswerBtn && (
              <>
                <ToolTip
                  title={Object.translate("BUTTONS.BUSY")}
                  placement="top"
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="busyButton"
                    onClick={handleBusyUser}
                  >
                    <PhoneBusy />
                  </Button>
                </ToolTip>
                <ToolTip
                  title={Object.translate("BUTTONS.ANSWER")}
                  placement="top"
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="answerButton"
                    onClick={handleConfirmJoin}
                  >
                    <HiOutlinePhone />
                  </Button>
                </ToolTip>
              </>
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DirectCallPopup;
