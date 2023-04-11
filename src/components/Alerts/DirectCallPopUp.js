import { HiOutlinePhone, ImPhoneHangUp, PhoneBusy } from "../icons";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "../muiComponents";
import ToolTip from "../toolTip/ToolTip";
import { alertStyle } from "./style";
export const DirectCallPopUp = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  const classes = alertStyle();
  return (
    <div>
      <Dialog
        className={classes.directCall}
        open={props.open}
        keepMounted
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-describedby="alert-dialog-slide-description"
        disableEscapeKeyDown={true}
      >
        <DialogContent>
          <div className={classes.contentCenter}>
            <Box className={"callerName"}>
              {props?.notification?.senderName}
            </Box>
            {props?.notification?.status &&
            props?.notification?.status !== "1" ? (
              <Box>
                <div className={classes.rejected}>
                  <PhoneBusy />
                </div>
                <Typography>{props?.resNotify}</Typography>
              </Box>
            ) : (
              <div className={classes.pulse}>
                <Avatar className={"avatar"}>
                  {props?.notification?.senderName
                    ?.substring(0, 2)
                    .toUpperCase()}
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
                onClick={props?.handleClose}
              >
                <ImPhoneHangUp />
              </Button>
            </ToolTip>
            {props?.showAnswerBtn ? (
              <>
                <ToolTip
                  title={Object.translate("BUTTONS.BUSY")}
                  placement="top"
                >
                  <Button
                    variant="contained"
                    disableElevation
                    className="busyButton"
                    onClick={props?.handleBusy}
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
                    onClick={props?.handleConfirm}
                  >
                    <HiOutlinePhone />
                  </Button>
                </ToolTip>
              </>
            ) : (
              <></>
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};
