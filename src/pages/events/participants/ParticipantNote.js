import React, { useState } from "react";
import { CloseIcon } from "components/icons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  TextField,
  Button,
} from "components/muiComponents";
import { Box, InputLabel } from "components/muiComponents";
import { Transition } from "components/muiComponents/Transistion.js";
import actions from "redux/actions";
import { eventsStyles } from "../style";
import { useTheme } from "@mui/styles";

const { addParticipantNote } = actions;

export default function ParticipantNote(props) {
  const [note, setNote] = useState("");
  const theme = useTheme();
  const handleClose = () => {
    props.setOpen(null);
  };
  const classes = eventsStyles();
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
              {Object.translate("BUTTONS.ADD_NOTE")}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            className={classes.DescSection}
            minWidth="500px"
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
                window.dispatch(
                  addParticipantNote({ id: props.open, body: { note } })
                )
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
