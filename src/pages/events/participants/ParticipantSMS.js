import { CloseIcon } from "components/icons";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "components/muiComponents";
import { Transition } from "components/muiComponents/Transistion.js";
import { useMemo, useState } from "react";
import actions from "redux/actions";

const { sendSmsToParticipant } = actions;

export default function ParticipantNote(props) {
  const [note, setNote] = useState("");
  const handleClose = () => {
    props.setOpen(null);
  };
  const isMobile = useMemo(() => props.type === "sms", [props.type]);
  const isEmail = useMemo(() => props.type === "email", [props.type]);
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        disableAutoFocus={false}
        disableEnforceFocus={true}
      >
        <DialogTitle id="customized-dialog-title">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography style={{ fontSize: "20px", fontWeight: "bolder" }}>
              {Object.translate(
                isMobile
                  ? "BUTTONS.SEND_SMS"
                  : isEmail
                  ? "BUTTONS.SEND_EMAIL"
                  : ""
              )}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            style={{
              border: "1px solid #ccc",
              "& > div": {
                "& > div": {
                  "& > textarea": {
                    direction: "ltr",
                  },
                },
              },
            }}
            className="DescSection"
            minWidth="500px"
          >
            <TextField
              InputProps={{ disableUnderline: true }}
              variant="standard"
              fullWidth
              multiline
              minRows={2}
              maxRows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginBottom="15px"
          >
            <Button
              variant="contained"
              size="small"
              className="medium-btn "
              disabled={!note}
              onClick={() =>
                isMobile
                  ? window.dispatch(
                      sendSmsToParticipant({
                        body: {
                          pMobileNO: props.open,
                          pMessage_TEXT: note,
                          pLanguage: "AR1",
                        },
                      })
                    )
                  : null
              }
            >
              {Object.translate("BUTTONS.SEND")}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
